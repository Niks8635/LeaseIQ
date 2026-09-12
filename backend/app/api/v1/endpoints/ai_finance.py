from typing import List, Dict, Any
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from backend.app.api.deps import get_db, get_current_user
from backend.app.schemas.finance import BankReconciliationMatch
from backend.app.schemas.vendor import InvoiceExtractRequest, InvoiceExtractResponse
from backend.app.services.reconciliation_service import reconcile_bank_transactions
from backend.app.services.invoice_service import extract_invoice_intelligence

router = APIRouter()

@router.get("/{society_id}/reconciliation", response_model=List[BankReconciliationMatch])
def get_ai_bank_reconciliation(society_id: int, db: Session = Depends(get_db)):
    """Runs the AI Bank Reconciliation engine on society bank transactions against open bills."""
    matches = reconcile_bank_transactions(db, society_id)
    return [
        BankReconciliationMatch(
            transaction_id=m["transaction_id"],
            narration=m["narration"],
            amount=m["amount"],
            transaction_date=m["transaction_date"],
            matched_invoice_or_bill_id=m["matched_bill_id"],
            matched_resident=m["matched_resident"],
            confidence_score=m["confidence_score"],
            match_status=m["match_status"],
            explanation=m["explanation"]
        )
        for m in matches
    ]

@router.post("/{society_id}/extract-invoice", response_model=InvoiceExtractResponse)
def extract_invoice(
    society_id: int,
    req: InvoiceExtractRequest,
    db: Session = Depends(get_db)
):
    """Processes an uploaded invoice via AI to extract structured vendor, tax, amount, and flags duplicates."""
    data = extract_invoice_intelligence(db, society_id, req.filename, req.raw_text)
    return InvoiceExtractResponse(**data)
