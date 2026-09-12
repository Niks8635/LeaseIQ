from typing import List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from backend.app.api.deps import get_db, get_current_user
from backend.app.models.finance import MaintenanceBill, Payment, Receipt, Expense
from backend.app.models.society import Unit
from backend.app.models.user import User
from backend.app.schemas.finance import (
    MaintenanceBillOut, MaintenanceBillCreate, PaymentOut, PaymentCreate,
    ExpenseOut, ExpenseCreate
)
from backend.app.services.finance_service import record_payment, get_financial_summary

router = APIRouter()

@router.get("/{society_id}/summary")
def get_society_finance_summary(society_id: int, db: Session = Depends(get_db)):
    """Returns calculated real metrics: Total Billed, Total Collected, Pending Dues, Collection Rate, Expenses."""
    return get_financial_summary(db, society_id)

@router.get("/{society_id}/bills", response_model=List[MaintenanceBillOut])
def list_maintenance_bills(society_id: int, db: Session = Depends(get_db)):
    bills = db.query(MaintenanceBill).filter(MaintenanceBill.society_id == society_id).all()
    results = []
    for b in bills:
        u = db.query(Unit).filter(Unit.id == b.unit_id).first()
        results.append(MaintenanceBillOut(
            id=b.id,
            unit_id=b.unit_id,
            unit_number=u.unit_number if u else "N/A",
            bill_number=b.bill_number,
            billing_month=b.billing_month,
            base_charge=b.base_charge,
            total_amount=b.total_amount,
            due_date=b.due_date,
            status=b.status
        ))
    return results

@router.post("/{society_id}/payments", response_model=PaymentOut)
def make_payment(
    society_id: int,
    payment_in: PaymentCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    """Processes a maintenance payment (including demo payment mode) and generates a verifiable receipt."""
    p = record_payment(db, society_id, payment_in)
    return PaymentOut(
        id=p.id,
        bill_id=p.bill_id,
        resident_id=p.resident_id,
        amount=p.amount,
        payment_date=p.payment_date,
        payment_method=p.payment_method,
        status=p.status,
        transaction_reference=p.transaction_reference,
        receipt_number=p.receipt.receipt_number if p.receipt else None
    )

@router.get("/{society_id}/payments", response_model=List[PaymentOut])
def list_payments(society_id: int, db: Session = Depends(get_db)):
    payments = db.query(Payment).filter(Payment.society_id == society_id).order_by(Payment.payment_date.desc()).all()
    results = []
    for p in payments:
        results.append(PaymentOut(
            id=p.id,
            bill_id=p.bill_id,
            resident_id=p.resident_id,
            amount=p.amount,
            payment_date=p.payment_date,
            payment_method=p.payment_method,
            status=p.status,
            transaction_reference=p.transaction_reference,
            receipt_number=p.receipt.receipt_number if p.receipt else None
        ))
    return results

@router.get("/{society_id}/expenses", response_model=List[ExpenseOut])
def list_expenses(society_id: int, db: Session = Depends(get_db)):
    expenses = db.query(Expense).filter(Expense.society_id == society_id).all()
    return [
        ExpenseOut(
            id=e.id,
            title=e.title,
            amount=e.amount,
            category_name="Operational",
            expense_date=e.expense_date,
            status=e.status
        )
        for e in expenses
    ]
