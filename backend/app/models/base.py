from datetime import datetime
from sqlalchemy import Column, Integer, DateTime, ForeignKey
from sqlalchemy.orm import declared_attr

class TimestampMixin:
    created_at = Column(DateTime, default=datetime.utcnow, nullable=False)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow, nullable=False)

class TenantMixin(TimestampMixin):
    @declared_attr
    def society_id(cls):
        return Column(Integer, ForeignKey("societies.id", ondelete="CASCADE"), nullable=False, index=True)
