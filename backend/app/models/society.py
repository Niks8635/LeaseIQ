from sqlalchemy import Column, Integer, String, Text, Boolean, ForeignKey, Float
from sqlalchemy.orm import relationship
from backend.app.core.database import Base
from backend.app.models.base import TimestampMixin, TenantMixin

class Society(Base, TimestampMixin):
    __tablename__ = "societies"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(255), nullable=False, index=True)
    registration_number = Column(String(100), unique=True, index=True)
    address = Column(Text, nullable=False)
    city = Column(String(100), nullable=False)
    state = Column(String(100), nullable=False)
    pincode = Column(String(20), nullable=False)
    contact_email = Column(String(255))
    contact_phone = Column(String(50))
    total_units = Column(Integer, default=0)
    is_active = Column(Boolean, default=True)
    
    # Relationships
    buildings = relationship("Building", back_populates="society", cascade="all, delete-orphan")
    users = relationship("User", back_populates="society")
    residents = relationship("Resident", back_populates="society")

class Building(Base, TenantMixin):
    __tablename__ = "buildings"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False)  # e.g., Tower A, Block 1
    total_floors = Column(Integer, default=1)
    description = Column(Text)
    
    society = relationship("Society", back_populates="buildings")
    floors = relationship("Floor", back_populates="building", cascade="all, delete-orphan")
    units = relationship("Unit", back_populates="building", cascade="all, delete-orphan")

class Floor(Base, TenantMixin):
    __tablename__ = "floors"
    
    id = Column(Integer, primary_key=True, index=True)
    building_id = Column(Integer, ForeignKey("buildings.id", ondelete="CASCADE"), nullable=False)
    floor_number = Column(Integer, nullable=False)
    name = Column(String(50))  # e.g., "Ground Floor", "1st Floor"
    
    building = relationship("Building", back_populates="floors")
    units = relationship("Unit", back_populates="floor")

class Unit(Base, TenantMixin):
    __tablename__ = "units"
    
    id = Column(Integer, primary_key=True, index=True)
    building_id = Column(Integer, ForeignKey("buildings.id", ondelete="CASCADE"), nullable=False)
    floor_id = Column(Integer, ForeignKey("floors.id", ondelete="SET NULL"), nullable=True)
    unit_number = Column(String(50), nullable=False, index=True)  # e.g., "A-402"
    unit_type = Column(String(50), default="2BHK")  # 1BHK, 2BHK, 3BHK, Penthouse, etc.
    area_sqft = Column(Float, default=1000.0)
    occupancy_status = Column(String(50), default="OCCUPIED")  # OCCUPIED, VACANT, TENANT_OCCUPIED
    
    building = relationship("Building", back_populates="units")
    floor = relationship("Floor", back_populates="units")
    residents = relationship("Resident", back_populates="unit")
