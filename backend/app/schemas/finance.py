from typing import Optional, List
from datetime import date, datetime
from pydantic import BaseModel

class MaintenanceBillCreate(BaseModel):
    unit_id: int
    billing_month: str
    base_charge: float
    water_charge: float = 0.0
    sinking_fund: float = 0.0
    penalty_charge: float = 0.0
    other_charges: float = 0.0
    due_date: date

class MaintenanceBillOut(BaseModel):
    id: int
    unit_id: int
    unit_number: Optional[str] = None
    bill_number: str
    billing_month: str
    base_charge: float
    total_amount: float
    due_date: date
    status: str

    class Config:
        from_attributes = True

class PaymentCreate(BaseModel):
    bill_id: Optional[int] = None
    resident_id: Optional[int] = None
    amount: float
    payment_method: str = "DEMO"
    notes: Optional[str] = None

class PaymentOut(BaseModel):
    id: int
    bill_id: Optional[int] = None
    resident_id: Optional[int] = None
    amount: float
    payment_date: datetime
    payment_method: str
    status: str
    transaction_reference: str
    receipt_number: Optional[str] = None

    class Config:
        from_attributes = True

class ExpenseCreate(BaseModel):
    title: str
    amount: float
    category_id: Optional[int] = None
    vendor_id: Optional[int] = None
    expense_date: date

class ExpenseOut(BaseModel):
    id: int
    title: str
    amount: float
    category_name: Optional[str] = None
    expense_date: date
    status: str

    class Config:
        from_attributes = True

class BankReconciliationMatch(BaseModel):
    transaction_id: int
    narration: str
    amount: float
    transaction_date: date
    matched_invoice_or_bill_id: Optional[int] = None
    matched_resident: Optional[str] = None
    confidence_score: float
    match_status: str  # MATCHED, UNMATCHED, POSSIBLE_MATCH, NEEDS_REVIEW
    explanation: str
