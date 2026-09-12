from sqlalchemy import Column, Integer, String, Text, Float, Date, DateTime, ForeignKey, Boolean
from sqlalchemy.orm import relationship
from backend.app.core.database import Base
from backend.app.models.base import TenantMixin

class Staff(Base, TenantMixin):
    __tablename__ = "staff"
    
    id = Column(Integer, primary_key=True, index=True)
    full_name = Column(String(255), nullable=False)
    role = Column(String(100), nullable=False)  # Security, Cleaning, Electrician, Plumber, Gardener
    phone = Column(String(50), nullable=False)
    shift = Column(String(50), default="MORNING")  # MORNING, EVENING, NIGHT
    is_active = Column(Boolean, default=True)
    joined_date = Column(Date, nullable=False)

class StaffAttendance(Base, TenantMixin):
    __tablename__ = "staff_attendance"
    
    id = Column(Integer, primary_key=True, index=True)
    staff_id = Column(Integer, ForeignKey("staff.id", ondelete="CASCADE"), nullable=False)
    attendance_date = Column(Date, nullable=False, index=True)
    check_in = Column(DateTime)
    check_out = Column(DateTime)
    status = Column(String(20), default="PRESENT")  # PRESENT, ABSENT, LEAVE, HALF_DAY

class Asset(Base, TenantMixin):
    __tablename__ = "assets"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(255), nullable=False)  # e.g., Diesel Generator 250KVA, Lift #1
    category = Column(String(100), nullable=False)  # Electrical, Elevators, Pumps, Fire Safety, Gym
    location = Column(String(255), nullable=False)
    purchase_date = Column(Date, nullable=False)
    purchase_cost = Column(Float, default=0.0)
    warranty_expiry = Column(Date)
    condition = Column(String(50), default="GOOD")  # EXCELLENT, GOOD, FAIR, NEEDS_MAINTENANCE
    last_serviced_date = Column(Date)

class InventoryItem(Base, TenantMixin):
    __tablename__ = "inventory_items"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(255), nullable=False)  # LED Tube lights, Water pump valves, Sanitizer
    category = Column(String(100), nullable=False)  # Electrical, Plumbing, Cleaning
    quantity = Column(Integer, default=0)
    unit_of_measure = Column(String(20), default="units")  # units, liters, boxes
    minimum_stock_alert = Column(Integer, default=5)
    unit_price = Column(Float, default=0.0)

class WorkOrder(Base, TenantMixin):
    __tablename__ = "work_orders"
    
    id = Column(Integer, primary_key=True, index=True)
    order_number = Column(String(50), unique=True, index=True, nullable=False)
    title = Column(String(255), nullable=False)
    description = Column(Text)
    assigned_staff_id = Column(Integer, ForeignKey("staff.id", ondelete="SET NULL"), nullable=True)
    assigned_vendor_id = Column(Integer, ForeignKey("vendors.id", ondelete="SET NULL"), nullable=True)
    priority = Column(String(50), default="MEDIUM")
    status = Column(String(50), default="OPEN")  # OPEN, IN_PROGRESS, COMPLETED, CANCELLED
    due_date = Column(Date, nullable=False)
    completed_at = Column(DateTime)
