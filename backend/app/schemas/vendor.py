from typing import Optional, List
from datetime import date
from pydantic import BaseModel

class InvoiceExtractRequest(BaseModel):
    filename: str
    vendor_name_hint: Optional[str] = None
    raw_text: Optional[str] = None

class InvoiceExtractResponse(BaseModel):
    vendor_name: str
    invoice_number: str
    amount: float
    gst_rate: float
    category: str
    invoice_date: date
    due_date: date
    confidence: float
    is_duplicate: bool
    duplicate_warning: Optional[str] = None

class VendorCreate(BaseModel):
    name: str
    service_category: str
    phone: str
    email: Optional[str] = None
    gst_number: Optional[str] = None
    contact_person: Optional[str] = None

class VendorOut(BaseModel):
    id: int
    name: str
    service_category: str
    phone: str
    email: Optional[str] = None
    gst_number: Optional[str] = None
    rating: float
    is_active: bool

    class Config:
        from_attributes = True

class VendorInvoiceCreate(BaseModel):
    vendor_id: int
    invoice_number: str
    amount: float
    gst_amount: float = 0.0
    invoice_date: date
    due_date: date

class VendorInvoiceOut(BaseModel):
    id: int
    vendor_id: int
    invoice_number: str
    amount: float
    invoice_date: date
    due_date: date
    status: str
    is_potential_duplicate: bool
    duplicate_reason: Optional[str] = None

    class Config:
        from_attributes = True
