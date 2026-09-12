from sqlalchemy import Column, Integer, String, Text, DateTime, ForeignKey, Boolean
from sqlalchemy.orm import relationship
from backend.app.core.database import Base
from backend.app.models.base import TenantMixin

class Visitor(Base, TenantMixin):
    __tablename__ = "visitors"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(255), nullable=False)
    phone = Column(String(50), nullable=False, index=True)
    visitor_type = Column(String(50), default="GUEST")  # GUEST, DELIVERY, CAB, SERVICE, DOMESTIC_HELP
    photo_url = Column(String(500))
    vehicle_number = Column(String(50))
    purpose = Column(String(255))
    
    logs = relationship("VisitorLog", back_populates="visitor", cascade="all, delete-orphan")

class VisitorLog(Base, TenantMixin):
    __tablename__ = "visitor_logs"
    
    id = Column(Integer, primary_key=True, index=True)
    visitor_id = Column(Integer, ForeignKey("visitors.id", ondelete="CASCADE"), nullable=False)
    unit_id = Column(Integer, ForeignKey("units.id", ondelete="CASCADE"), nullable=False)
    host_resident_id = Column(Integer, ForeignKey("residents.id", ondelete="SET NULL"), nullable=True)
    entry_time = Column(DateTime, nullable=False)
    exit_time = Column(DateTime, nullable=True)
    status = Column(String(50), default="WAITING", index=True)  # WAITING, APPROVED, DENIED, INSIDE, EXITED
    approval_source = Column(String(50), default="APP")  # APP, CALL, PRE_APPROVED, MANUAL
    gate_name = Column(String(50), default="Main Gate")
    security_guard_id = Column(Integer, ForeignKey("users.id", ondelete="SET NULL"), nullable=True)
    
    visitor = relationship("Visitor", back_populates="logs")

class Delivery(Base, TenantMixin):
    __tablename__ = "deliveries"
    
    id = Column(Integer, primary_key=True, index=True)
    unit_id = Column(Integer, ForeignKey("units.id", ondelete="CASCADE"), nullable=False)
    delivery_partner = Column(String(100), nullable=False)  # Amazon, Flipkart, Swiggy, Zomato, etc.
    delivery_person_name = Column(String(255))
    delivery_person_phone = Column(String(50))
    status = Column(String(50), default="RECEIVED", index=True)  # RECEIVED, PENDING, COLLECTED
    received_at = Column(DateTime, nullable=False)
    collected_at = Column(DateTime, nullable=True)
    passcode = Column(String(10))

class EmergencyAlert(Base, TenantMixin):
    __tablename__ = "emergency_alerts"
    
    id = Column(Integer, primary_key=True, index=True)
    triggered_by_user_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    alert_type = Column(String(50), nullable=False)  # FIRE, MEDICAL, SECURITY, LIFT_ENTRAPMENT, OTHER
    location = Column(String(255))
    description = Column(Text)
    status = Column(String(50), default="ACTIVE")  # ACTIVE, RESOLVED, FALSE_ALARM
    resolved_at = Column(DateTime, nullable=True)
