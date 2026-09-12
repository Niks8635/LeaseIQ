from typing import Optional, List
from datetime import datetime, date
from pydantic import BaseModel

class ComplaintCreate(BaseModel):
    category: str
    title: str
    description: str
    priority: str = "MEDIUM"
    unit_id: Optional[int] = None

class ComplaintUpdate(BaseModel):
    status: Optional[str] = None
    priority: Optional[str] = None
    assigned_staff_id: Optional[int] = None
    assigned_vendor_id: Optional[int] = None
    resolution_summary: Optional[str] = None

class ComplaintOut(BaseModel):
    id: int
    ticket_number: str
    unit_id: int
    category: str
    title: str
    description: str
    priority: str
    status: str
    sla_hours: int
    created_at: datetime
    resolved_at: Optional[datetime] = None

    class Config:
        from_attributes = True

class FacilityCreate(BaseModel):
    name: str
    description: Optional[str] = None
    capacity: int = 50
    booking_charge: float = 0.0
    rules: Optional[str] = None

class FacilityOut(BaseModel):
    id: int
    name: str
    description: Optional[str] = None
    capacity: int
    booking_charge: float
    is_active: bool

    class Config:
        from_attributes = True

class FacilityBookingCreate(BaseModel):
    facility_id: int
    booking_date: date
    start_time: str
    end_time: str
    number_of_guests: int = 1

class FacilityBookingOut(BaseModel):
    id: int
    facility_id: int
    facility_name: Optional[str] = None
    booking_date: date
    start_time: str
    end_time: str
    status: str
    amount_paid: float

    class Config:
        from_attributes = True
