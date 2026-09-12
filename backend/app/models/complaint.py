from sqlalchemy import Column, Integer, String, Text, DateTime, ForeignKey, Float, Date, Boolean
from sqlalchemy.orm import relationship
from backend.app.core.database import Base
from backend.app.models.base import TenantMixin

class Complaint(Base, TenantMixin):
    __tablename__ = "complaints"
    
    id = Column(Integer, primary_key=True, index=True)
    ticket_number = Column(String(50), unique=True, index=True, nullable=False)
    unit_id = Column(Integer, ForeignKey("units.id", ondelete="CASCADE"), nullable=False)
    resident_id = Column(Integer, ForeignKey("residents.id", ondelete="CASCADE"), nullable=False)
    category = Column(String(100), nullable=False)  # Plumbing, Electrical, Lift, Security, Housekeeping, Noise
    title = Column(String(255), nullable=False)
    description = Column(Text, nullable=False)
    priority = Column(String(50), default="MEDIUM")  # LOW, MEDIUM, HIGH, EMERGENCY
    status = Column(String(50), default="OPEN", index=True)  # OPEN, ASSIGNED, IN_PROGRESS, RESOLVED, CLOSED
    assigned_staff_id = Column(Integer, ForeignKey("users.id", ondelete="SET NULL"), nullable=True)
    assigned_vendor_id = Column(Integer, ForeignKey("vendors.id", ondelete="SET NULL"), nullable=True)
    sla_hours = Column(Integer, default=24)
    resolved_at = Column(DateTime, nullable=True)
    resolution_summary = Column(Text)
    attachment_url = Column(String(500))
    
    comments = relationship("ComplaintComment", back_populates="complaint", cascade="all, delete-orphan")

class ComplaintComment(Base, TenantMixin):
    __tablename__ = "complaint_comments"
    
    id = Column(Integer, primary_key=True, index=True)
    complaint_id = Column(Integer, ForeignKey("complaints.id", ondelete="CASCADE"), nullable=False)
    user_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    comment = Column(Text, nullable=False)
    is_internal_only = Column(Boolean, default=False)
    
    complaint = relationship("Complaint", back_populates="comments")

class Facility(Base, TenantMixin):
    __tablename__ = "facilities"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False)  # Clubhouse, Swimming Pool, Gym, Tennis Court, Party Hall
    description = Column(Text)
    capacity = Column(Integer, default=50)
    slot_duration_minutes = Column(Integer, default=60)
    booking_charge = Column(Float, default=0.0)
    rules = Column(Text)
    opening_time = Column(String(20), default="06:00")
    closing_time = Column(String(20), default="22:00")
    is_active = Column(Boolean, default=True)
    
    bookings = relationship("FacilityBooking", back_populates="facility", cascade="all, delete-orphan")

class FacilityBooking(Base, TenantMixin):
    __tablename__ = "facility_bookings"
    
    id = Column(Integer, primary_key=True, index=True)
    facility_id = Column(Integer, ForeignKey("facilities.id", ondelete="CASCADE"), nullable=False)
    resident_id = Column(Integer, ForeignKey("residents.id", ondelete="CASCADE"), nullable=False)
    booking_date = Column(Date, nullable=False)
    start_time = Column(String(20), nullable=False)  # e.g., "10:00"
    end_time = Column(String(20), nullable=False)    # e.g., "11:00"
    number_of_guests = Column(Integer, default=1)
    status = Column(String(50), default="CONFIRMED")  # CONFIRMED, CANCELLED, COMPLETED
    amount_paid = Column(Float, default=0.0)
    
    facility = relationship("Facility", back_populates="bookings")
