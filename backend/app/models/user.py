from sqlalchemy import Column, Integer, String, Boolean, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from backend.app.core.database import Base
from backend.app.models.base import TimestampMixin

class User(Base, TimestampMixin):
    __tablename__ = "users"
    
    id = Column(Integer, primary_key=True, index=True)
    society_id = Column(Integer, ForeignKey("societies.id", ondelete="SET NULL"), nullable=True, index=True)
    email = Column(String(255), unique=True, index=True, nullable=False)
    phone = Column(String(50), index=True)
    full_name = Column(String(255), nullable=False)
    hashed_password = Column(String(255), nullable=False)
    role = Column(String(50), nullable=False, default="RESIDENT", index=True)  # SUPER_ADMIN, SOCIETY_ADMIN, etc.
    is_active = Column(Boolean, default=True)
    is_verified = Column(Boolean, default=True)
    avatar_url = Column(String(500))
    last_login = Column(DateTime, nullable=True)
    
    society = relationship("Society", back_populates="users")
    resident_profile = relationship("Resident", back_populates="user", uselist=False)

class Role(Base, TimestampMixin):
    __tablename__ = "roles"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(50), unique=True, nullable=False)
    description = Column(String(255))

class UserRole(Base, TimestampMixin):
    __tablename__ = "user_roles"
    
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    role_id = Column(Integer, ForeignKey("roles.id", ondelete="CASCADE"), nullable=False)
