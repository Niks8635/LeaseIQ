from sqlalchemy import Column, Integer, String, Text, Float, Date, DateTime, ForeignKey, Boolean
from sqlalchemy.orm import relationship
from backend.app.core.database import Base
from backend.app.models.base import TenantMixin

class MaintenanceBill(Base, TenantMixin):
    __tablename__ = "maintenance_bills"
    
    id = Column(Integer, primary_key=True, index=True)
    unit_id = Column(Integer, ForeignKey("units.id", ondelete="CASCADE"), nullable=False, index=True)
    resident_id = Column(Integer, ForeignKey("residents.id", ondelete="SET NULL"), nullable=True)
    bill_number = Column(String(100), unique=True, index=True, nullable=False)
    billing_month = Column(String(20), nullable=False)  # e.g., "September 2025"
    base_charge = Column(Float, default=0.0)
    water_charge = Column(Float, default=0.0)
    sinking_fund = Column(Float, default=0.0)
    penalty_charge = Column(Float, default=0.0)
    other_charges = Column(Float, default=0.0)
    total_amount = Column(Float, nullable=False)
    due_date = Column(Date, nullable=False)
    status = Column(String(50), default="PENDING", index=True)  # PENDING, PAID, PARTIAL, OVERDUE
    
    payments = relationship("Payment", back_populates="bill")
    items = relationship("MaintenanceItem", back_populates="bill", cascade="all, delete-orphan")

class MaintenanceItem(Base, TenantMixin):
    __tablename__ = "maintenance_items"
    
    id = Column(Integer, primary_key=True, index=True)
    bill_id = Column(Integer, ForeignKey("maintenance_bills.id", ondelete="CASCADE"), nullable=False)
    description = Column(String(255), nullable=False)
    amount = Column(Float, nullable=False)
    
    bill = relationship("MaintenanceBill", back_populates="items")

class Payment(Base, TenantMixin):
    __tablename__ = "payments"
    
    id = Column(Integer, primary_key=True, index=True)
    bill_id = Column(Integer, ForeignKey("maintenance_bills.id", ondelete="SET NULL"), nullable=True)
    resident_id = Column(Integer, ForeignKey("residents.id", ondelete="SET NULL"), nullable=True)
    amount = Column(Float, nullable=False)
    payment_date = Column(DateTime, nullable=False)
    payment_method = Column(String(50), default="UPI")  # UPI, NET_BANKING, CARD, CHEQUE, CASH, DEMO
    status = Column(String(50), default="SUCCESS", index=True)  # PENDING, SUCCESS, FAILED, REFUNDED
    transaction_reference = Column(String(100), unique=True, index=True)
    gateway_order_id = Column(String(100))
    notes = Column(Text)
    
    bill = relationship("MaintenanceBill", back_populates="payments")
    receipt = relationship("Receipt", back_populates="payment", uselist=False)

class Receipt(Base, TenantMixin):
    __tablename__ = "receipts"
    
    id = Column(Integer, primary_key=True, index=True)
    payment_id = Column(Integer, ForeignKey("payments.id", ondelete="CASCADE"), nullable=False, unique=True)
    receipt_number = Column(String(100), unique=True, index=True, nullable=False)
    issued_date = Column(DateTime, nullable=False)
    receipt_url = Column(String(500))
    
    payment = relationship("Payment", back_populates="receipt")

class ExpenseCategory(Base, TenantMixin):
    __tablename__ = "expense_categories"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False)  # Security, Cleaning, Lift Maintenance, Electricity, etc.
    description = Column(String(255))
    monthly_budget = Column(Float, default=0.0)

class Expense(Base, TenantMixin):
    __tablename__ = "expenses"
    
    id = Column(Integer, primary_key=True, index=True)
    category_id = Column(Integer, ForeignKey("expense_categories.id", ondelete="SET NULL"), nullable=True)
    vendor_id = Column(Integer, ForeignKey("vendors.id", ondelete="SET NULL"), nullable=True)
    title = Column(String(255), nullable=False)
    amount = Column(Float, nullable=False)
    expense_date = Column(Date, nullable=False)
    status = Column(String(50), default="APPROVED")  # DRAFT, PENDING_APPROVAL, APPROVED, PAID, REJECTED
    approved_by_user_id = Column(Integer, ForeignKey("users.id", ondelete="SET NULL"), nullable=True)
    receipt_doc_url = Column(String(500))

class Budget(Base, TenantMixin):
    __tablename__ = "budgets"
    
    id = Column(Integer, primary_key=True, index=True)
    financial_year = Column(String(20), nullable=False)  # e.g., "2025-2026"
    category_id = Column(Integer, ForeignKey("expense_categories.id", ondelete="CASCADE"), nullable=False)
    allocated_amount = Column(Float, nullable=False)
    spent_amount = Column(Float, default=0.0)

class BankTransaction(Base, TenantMixin):
    __tablename__ = "bank_transactions"
    
    id = Column(Integer, primary_key=True, index=True)
    bank_account_number = Column(String(50), nullable=False)
    transaction_date = Column(Date, nullable=False)
    narration = Column(Text, nullable=False)
    reference_number = Column(String(100), index=True)
    transaction_type = Column(String(20), nullable=False)  # CREDIT, DEBIT
    amount = Column(Float, nullable=False)
    reconciliation_status = Column(String(50), default="UNMATCHED", index=True)  # MATCHED, UNMATCHED, POSSIBLE_MATCH, NEEDS_REVIEW

class ReconciliationMatch(Base, TenantMixin):
    __tablename__ = "reconciliation_matches"
    
    id = Column(Integer, primary_key=True, index=True)
    bank_transaction_id = Column(Integer, ForeignKey("bank_transactions.id", ondelete="CASCADE"), nullable=False)
    payment_id = Column(Integer, ForeignKey("payments.id", ondelete="SET NULL"), nullable=True)
    bill_id = Column(Integer, ForeignKey("maintenance_bills.id", ondelete="SET NULL"), nullable=True)
    confidence_score = Column(Float, nullable=False)  # e.g. 0.98 for 98%
    match_status = Column(String(50), default="MATCHED")  # MATCHED, CONFIRMED, REJECTED
    explanation = Column(Text)
    verified_by_user_id = Column(Integer, ForeignKey("users.id", ondelete="SET NULL"), nullable=True)
