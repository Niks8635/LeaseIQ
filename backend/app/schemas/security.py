from typing import Optional
from datetime import datetime
from pydantic import BaseModel

class VisitorCreate(BaseModel):
    name: str
    phone: str
    unit_id: int
    visitor_type: str = "GUEST"
    vehicle_number: Optional[str] = None
    purpose: Optional[str] = None

class VisitorLogOut(BaseModel):
    id: int
    visitor_name: str
    visitor_phone: str
    visitor_type: str
    unit_number: str
    entry_time: datetime
    exit_time: Optional[datetime] = None
    status: str
    gate_name: str

class DeliveryCreate(BaseModel):
    unit_id: int
    delivery_partner: str
    delivery_person_name: Optional[str] = None
    delivery_person_phone: Optional[str] = None

class DeliveryOut(BaseModel):
    id: int
    unit_id: int
    delivery_partner: str
    delivery_person_name: Optional[str] = None
    status: str
    received_at: datetime
    collected_at: Optional[datetime] = None

    class Config:
        from_attributes = True
