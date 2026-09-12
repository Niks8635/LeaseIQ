from typing import Optional, List
from datetime import date
from pydantic import BaseModel, EmailStr

class ResidentCreate(BaseModel):
    full_name: str
    email: EmailStr
    phone: str
    unit_id: int
    resident_type: str = "OWNER"
    emergency_contact_name: Optional[str] = None
    emergency_contact_phone: Optional[str] = None

class ResidentOut(BaseModel):
    id: int
    society_id: int
    user_id: int
    unit_id: Optional[int]
    resident_type: str
    emergency_contact_name: Optional[str] = None
    emergency_contact_phone: Optional[str] = None
    is_primary: bool

    class Config:
        from_attributes = True

class FamilyMemberCreate(BaseModel):
    name: str
    relationship_type: str
    phone: Optional[str] = None

class FamilyMemberOut(BaseModel):
    id: int
    resident_id: int
    name: str
    relationship_type: str
    phone: Optional[str] = None

    class Config:
        from_attributes = True
