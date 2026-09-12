from typing import Optional, List
from pydantic import BaseModel

class SocietyCreate(BaseModel):
    name: str
    registration_number: Optional[str] = None
    address: str
    city: str
    state: str
    pincode: str
    contact_email: Optional[str] = None
    contact_phone: Optional[str] = None

class SocietyOut(BaseModel):
    id: int
    name: str
    registration_number: Optional[str] = None
    address: str
    city: str
    state: str
    pincode: str
    total_units: int
    is_active: bool

    class Config:
        from_attributes = True

class BuildingCreate(BaseModel):
    name: str
    total_floors: int = 1
    description: Optional[str] = None

class BuildingOut(BaseModel):
    id: int
    society_id: int
    name: str
    total_floors: int
    description: Optional[str] = None

    class Config:
        from_attributes = True

class UnitCreate(BaseModel):
    building_id: int
    unit_number: str
    unit_type: str = "2BHK"
    area_sqft: float = 1000.0
    occupancy_status: str = "OCCUPIED"

class UnitOut(BaseModel):
    id: int
    society_id: int
    building_id: int
    unit_number: str
    unit_type: str
    area_sqft: float
    occupancy_status: str

    class Config:
        from_attributes = True
