from sqlalchemy import Column, Integer, String, Text, Float, DateTime, ForeignKey, Boolean
from backend.app.core.database import Base
from backend.app.models.base import TenantMixin

class AIInsight(Base, TenantMixin):
    __tablename__ = "ai_insights"
    
    id = Column(Integer, primary_key=True, index=True)
    insight_type = Column(String(50), nullable=False)  # IMPROVEMENT, WARNING, ANOMALY, PREDICTION
    title = Column(String(255), nullable=False)
    description = Column(Text, nullable=False)
    metric = Column(String(100))
    source = Column(String(100))
    confidence = Column(Float, default=0.90)
    is_dismissed = Column(Boolean, default=False)

class AuditLog(Base, TenantMixin):
    __tablename__ = "audit_logs"
    
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id", ondelete="SET NULL"), nullable=True)
    action = Column(String(100), nullable=False, index=True)  # LOGIN, PAYMENT_RECORDED, COMPLAINT_ASSIGNED, etc.
    entity_name = Column(String(100), nullable=False)
    entity_id = Column(String(100))
    details = Column(Text)
    ip_address = Column(String(50))

class Notification(Base, TenantMixin):
    __tablename__ = "notifications"
    
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"), nullable=False, index=True)
    title = Column(String(255), nullable=False)
    message = Column(Text, nullable=False)
    category = Column(String(50), default="GENERAL")  # VISITOR, PAYMENT, COMPLAINT, NOTICE, AI_INSIGHT
    link = Column(String(255))
    is_read = Column(Boolean, default=False, index=True)
