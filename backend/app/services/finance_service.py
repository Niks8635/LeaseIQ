import uuid
from datetime import datetime
from sqlalchemy.orm import Session
from sqlalchemy import func
from fastapi import HTTPException
from backend.app.models.finance import MaintenanceBill, Payment, Receipt, Expense
from backend.app.schemas.finance import PaymentCreate, MaintenanceBillCreate

def record_payment(db: Session, society_id: int, payment_in: PaymentCreate) -> Payment:
    bill = None
    if payment_in.bill_id:
        bill = db.query(MaintenanceBill).filter(
            MaintenanceBill.id == payment_in.bill_id,
            MaintenanceBill.society_id == society_id
        ).first()
        if not bill:
            raise HTTPException(status_code=404, detail="Maintenance bill not found")
            
    tx_ref = f"PAY-{uuid.uuid4().hex[:10].upper()}"
    payment = Payment(
        society_id=society_id,
        bill_id=payment_in.bill_id,
        resident_id=payment_in.resident_id or (bill.resident_id if bill else None),
        amount=payment_in.amount,
        payment_date=datetime.utcnow(),
        payment_method=payment_in.payment_method,
        status="SUCCESS",
        transaction_reference=tx_ref,
        notes=payment_in.notes
    )
    db.add(payment)
    db.flush()
    
    # Generate receipt
    receipt_num = f"RCP-{datetime.utcnow().strftime('%Y%m')}-{payment.id:04d}"
    receipt = Receipt(
        society_id=society_id,
        payment_id=payment.id,
        receipt_number=receipt_num,
        issued_date=datetime.utcnow(),
        receipt_url=f"/receipts/{receipt_num}.pdf"
    )
    db.add(receipt)
    
    # Update bill status if fully paid
    if bill:
        total_paid = db.query(func.sum(Payment.amount)).filter(
            Payment.bill_id == bill.id,
            Payment.status == "SUCCESS"
        ).scalar() or 0.0
        total_paid += payment.amount
        
        if total_paid >= bill.total_amount:
            bill.status = "PAID"
        elif total_paid > 0:
            bill.status = "PARTIAL"
            
    db.commit()
    db.refresh(payment)
    return payment

def get_financial_summary(db: Session, society_id: int) -> dict:
    total_billed = db.query(func.sum(MaintenanceBill.total_amount)).filter(
        MaintenanceBill.society_id == society_id
    ).scalar() or 0.0
    
    total_collected = db.query(func.sum(Payment.amount)).filter(
        Payment.society_id == society_id,
        Payment.status == "SUCCESS"
    ).scalar() or 0.0
    
    pending_bills = db.query(MaintenanceBill).filter(
        MaintenanceBill.society_id == society_id,
        MaintenanceBill.status.in_(["PENDING", "PARTIAL", "OVERDUE"])
    ).all()
    
    pending_amount = sum(b.total_amount for b in pending_bills) - total_collected
    if pending_amount < 0:
        pending_amount = 0.0
        
    collection_rate = round((total_collected / total_billed * 100), 1) if total_billed > 0 else 100.0
    
    total_expenses = db.query(func.sum(Expense.amount)).filter(
        Expense.society_id == society_id,
        Expense.status == "APPROVED"
    ).scalar() or 0.0
    
    return {
        "total_billed": round(total_billed, 2),
        "total_collected": round(total_collected, 2),
        "pending_dues": round(pending_amount, 2),
        "collection_rate": collection_rate,
        "total_expenses": round(total_expenses, 2),
        "open_invoices_count": len(pending_bills)
    }
