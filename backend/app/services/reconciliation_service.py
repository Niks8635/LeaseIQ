import re
from typing import List, Dict, Any
from sqlalchemy.orm import Session
from backend.app.models.finance import BankTransaction, MaintenanceBill, ReconciliationMatch
from backend.app.models.resident import Resident
from backend.app.models.society import Unit
from backend.app.models.user import User

def reconcile_bank_transactions(db: Session, society_id: int) -> List[Dict[str, Any]]:
    unreconciled = db.query(BankTransaction).filter(
        BankTransaction.society_id == society_id,
        BankTransaction.reconciliation_status != "CONFIRMED"
    ).all()
    
    open_bills = db.query(MaintenanceBill).filter(
        MaintenanceBill.society_id == society_id,
        MaintenanceBill.status.in_(["PENDING", "PARTIAL", "OVERDUE"])
    ).all()
    
    residents = db.query(Resident).filter(Resident.society_id == society_id).all()
    
    results = []
    for tx in unreconciled:
        best_match = None
        highest_confidence = 0.0
        explanation = "No matching bill found"
        status = "UNMATCHED"
        matched_resident_name = None
        
        # Check credit transactions
        if tx.transaction_type == "CREDIT":
            narration_upper = tx.narration.upper()
            
            for bill in open_bills:
                unit = db.query(Unit).filter(Unit.id == bill.unit_id).first()
                unit_str = unit.unit_number.upper().replace("-", "") if unit else ""
                
                # Check for unit number in narration
                has_unit = unit and (unit.unit_number.upper() in narration_upper or unit_str in narration_upper)
                # Check for exact amount
                exact_amount = abs(bill.total_amount - tx.amount) < 0.01
                
                confidence = 0.0
                if has_unit and exact_amount:
                    confidence = 0.98
                    explanation = f"Exact amount ₹{tx.amount:,.0f} and Unit {unit.unit_number} identified in narration."
                    status = "MATCHED"
                elif has_unit:
                    confidence = 0.75
                    explanation = f"Unit {unit.unit_number} matched in narration, but amount differs from bill ₹{bill.total_amount:,.0f}."
                    status = "POSSIBLE_MATCH"
                elif exact_amount:
                    confidence = 0.65
                    explanation = f"Exact bill amount ₹{tx.amount:,.0f} matched, but unit number not explicitly found in bank narration."
                    status = "NEEDS_REVIEW"
                    
                if confidence > highest_confidence:
                    highest_confidence = confidence
                    best_match = bill
                    if bill.resident_id:
                        res = db.query(Resident).filter(Resident.id == bill.resident_id).first()
                        if res and res.user:
                            matched_resident_name = res.user.full_name
                            
        results.append({
            "transaction_id": tx.id,
            "narration": tx.narration,
            "amount": tx.amount,
            "transaction_date": tx.transaction_date,
            "matched_bill_id": best_match.id if best_match else None,
            "matched_resident": matched_resident_name,
            "confidence_score": highest_confidence,
            "match_status": status,
            "explanation": explanation
        })
        
    return results
