from sqlalchemy import Column, Integer, String, Boolean, ForeignKey
from sqlalchemy.orm import relationship
from backend.app.core.database import Base
from backend.app.models.base import TenantMixin

class Vehicle(Base, TenantMixin):
    __tablename__ = "vehicles"
    
    id = Column(Integer, primary_key=True, index=True)
    resident_id = Column(Integer, ForeignKey("residents.id", ondelete="CASCADE"), nullable=False)
    vehicle_number = Column(String(50), unique=True, index=True, nullable=False)
    vehicle_type = Column(String(50), default="FOUR_WHEELER")  # TWO_WHEELER, FOUR_WHEELER, EV
    make_model = Column(String(100))
    sticker_number = Column(String(50))
    is_verified = Column(Boolean, default=True)

class ParkingSlot(Base, TenantMixin):
    __tablename__ = "parking_slots"
    
    id = Column(Integer, primary_key=True, index=True)
    slot_number = Column(String(50), nullable=False, index=True)  # e.g., P1-A12, B2-04
    slot_type = Column(String(50), default="RESIDENT")  # RESIDENT, VISITOR, EV_CHARGING, HANDICAP
    level = Column(String(50), default="Basement 1")
    is_occupied = Column(Boolean, default=False)
    
    assignment = relationship("ParkingAssignment", back_populates="slot", uselist=False)

class ParkingAssignment(Base, TenantMixin):
    __tablename__ = "parking_assignments"
    
    id = Column(Integer, primary_key=True, index=True)
    slot_id = Column(Integer, ForeignKey("parking_slots.id", ondelete="CASCADE"), nullable=False, unique=True)
    unit_id = Column(Integer, ForeignKey("units.id", ondelete="CASCADE"), nullable=False)
    resident_id = Column(Integer, ForeignKey("residents.id", ondelete="SET NULL"), nullable=True)
    vehicle_id = Column(Integer, ForeignKey("vehicles.id", ondelete="SET NULL"), nullable=True)
    
    slot = relationship("ParkingSlot", back_populates="assignment")
