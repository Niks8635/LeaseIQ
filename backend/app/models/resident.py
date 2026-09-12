from sqlalchemy import Column, Integer, String, Boolean, ForeignKey, Date
from sqlalchemy.orm import relationship
from backend.app.core.database import Base
from backend.app.models.base import TenantMixin

class Resident(Base, TenantMixin):
    __tablename__ = "residents"
    
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"), nullable=False, unique=True)
    unit_id = Column(Integer, ForeignKey("units.id", ondelete="SET NULL"), nullable=True, index=True)
    resident_type = Column(String(50), default="OWNER")  # OWNER, TENANT
    move_in_date = Column(Date, nullable=True)
    emergency_contact_name = Column(String(255))
    emergency_contact_phone = Column(String(50))
    is_primary = Column(Boolean, default=True)
    
    society = relationship("Society", back_populates="residents")
    user = relationship("User", back_populates="resident_profile")
    unit = relationship("Unit", back_populates="residents")
    family_members = relationship("FamilyMember", back_populates="resident", cascade="all, delete-orphan")

class FamilyMember(Base, TenantMixin):
    __tablename__ = "family_members"
    
    id = Column(Integer, primary_key=True, index=True)
    resident_id = Column(Integer, ForeignKey("residents.id", ondelete="CASCADE"), nullable=False)
    name = Column(String(255), nullable=False)
    relationship_type = Column(String(50), nullable=False)  # Spouse, Child, Parent, etc.
    phone = Column(String(50))
    
    resident = relationship("Resident", back_populates="family_members")

class CommitteeMember(Base, TenantMixin):
    __tablename__ = "committee_members"
    
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    designation = Column(String(100), nullable=False)  # President, Secretary, Treasurer, Member
    term_start = Column(Date, nullable=False)
    term_end = Column(Date, nullable=True)
    is_active = Column(Boolean, default=True)
