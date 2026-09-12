from sqlalchemy import Column, Integer, String, Text, Float, Date, ForeignKey, Boolean
from sqlalchemy.orm import relationship
from backend.app.core.database import Base
from backend.app.models.base import TenantMixin

class Vendor(Base, TenantMixin):
    __tablename__ = "vendors"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(255), nullable=False, index=True)
    service_category = Column(String(100), nullable=False)  # Security, Cleaning, Lift, Plumber, Electrician, etc.
    contact_person = Column(String(255))
    email = Column(String(255))
    phone = Column(String(50), nullable=False)
    gst_number = Column(String(50))
    pan_number = Column(String(50))
    rating = Column(Float, default=4.5)
    is_active = Column(Boolean, default=True)
    
    contracts = relationship("VendorContract", back_populates="vendor", cascade="all, delete-orphan")
    invoices = relationship("VendorInvoice", back_populates="vendor", cascade="all, delete-orphan")

class VendorContract(Base, TenantMixin):
    __tablename__ = "vendor_contracts"
    
    id = Column(Integer, primary_key=True, index=True)
    vendor_id = Column(Integer, ForeignKey("vendors.id", ondelete="CASCADE"), nullable=False)
    title = Column(String(255), nullable=False)
    start_date = Column(Date, nullable=False)
    end_date = Column(Date, nullable=False)
    monthly_amount = Column(Float, nullable=False)
    status = Column(String(50), default="ACTIVE")  # ACTIVE, EXPIRED, RENEWAL_DUE, TERMINATED
    document_url = Column(String(500))
    
    vendor = relationship("Vendor", back_populates="contracts")

class VendorInvoice(Base, TenantMixin):
    __tablename__ = "vendor_invoices"
    
    id = Column(Integer, primary_key=True, index=True)
    vendor_id = Column(Integer, ForeignKey("vendors.id", ondelete="CASCADE"), nullable=False)
    invoice_number = Column(String(100), nullable=False, index=True)
    amount = Column(Float, nullable=False)
    gst_amount = Column(Float, default=0.0)
    invoice_date = Column(Date, nullable=False)
    due_date = Column(Date, nullable=False)
    status = Column(String(50), default="PENDING")  # PENDING, APPROVED, PAID, REJECTED, DUPLICATE_FLAGGED
    is_potential_duplicate = Column(Boolean, default=False)
    duplicate_reason = Column(Text)
    file_url = Column(String(500))
    
    vendor = relationship("Vendor", back_populates="invoices")

class InvoiceExtraction(Base, TenantMixin):
    __tablename__ = "invoice_extractions"
    
    id = Column(Integer, primary_key=True, index=True)
    raw_filename = Column(String(255), nullable=False)
    extracted_vendor = Column(String(255))
    extracted_invoice_number = Column(String(100))
    extracted_gst = Column(String(50))
    extracted_amount = Column(Float)
    extracted_date = Column(Date)
    extracted_due_date = Column(Date)
    extracted_category = Column(String(100))
    confidence = Column(Float, default=0.95)
    is_confirmed = Column(Boolean, default=False)
