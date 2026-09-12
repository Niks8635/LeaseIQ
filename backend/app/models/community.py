from sqlalchemy import Column, Integer, String, Text, DateTime, ForeignKey, Boolean, Date
from sqlalchemy.orm import relationship
from backend.app.core.database import Base
from backend.app.models.base import TenantMixin

class Notice(Base, TenantMixin):
    __tablename__ = "notices"
    
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(255), nullable=False)
    content = Column(Text, nullable=False)
    category = Column(String(50), default="GENERAL")  # GENERAL, MAINTENANCE, EMERGENCY, EVENT, RULES
    target_audience = Column(String(50), default="ALL")  # ALL, BUILDING, COMMITTEE, TENANTS, OWNERS
    target_building_id = Column(Integer, ForeignKey("buildings.id", ondelete="SET NULL"), nullable=True)
    is_pinned = Column(Boolean, default=False)
    published_at = Column(DateTime, nullable=False)
    attachment_url = Column(String(500))

class Event(Base, TenantMixin):
    __tablename__ = "events"
    
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(255), nullable=False)
    description = Column(Text)
    event_date = Column(DateTime, nullable=False)
    location = Column(String(255), default="Clubhouse")
    organizer_user_id = Column(Integer, ForeignKey("users.id", ondelete="SET NULL"), nullable=True)
    max_participants = Column(Integer, default=100)
    
    participants = relationship("EventParticipant", back_populates="event", cascade="all, delete-orphan")

class EventParticipant(Base, TenantMixin):
    __tablename__ = "event_participants"
    
    id = Column(Integer, primary_key=True, index=True)
    event_id = Column(Integer, ForeignKey("events.id", ondelete="CASCADE"), nullable=False)
    resident_id = Column(Integer, ForeignKey("residents.id", ondelete="CASCADE"), nullable=False)
    rsvp_status = Column(String(50), default="YES")  # YES, NO, MAYBE
    guest_count = Column(Integer, default=1)
    
    event = relationship("Event", back_populates="participants")

class Poll(Base, TenantMixin):
    __tablename__ = "polls"
    
    id = Column(Integer, primary_key=True, index=True)
    question = Column(String(500), nullable=False)
    description = Column(Text)
    expires_at = Column(DateTime, nullable=False)
    is_anonymous = Column(Boolean, default=False)
    is_closed = Column(Boolean, default=False)
    
    options = relationship("PollOption", back_populates="poll", cascade="all, delete-orphan")

class PollOption(Base, TenantMixin):
    __tablename__ = "poll_options"
    
    id = Column(Integer, primary_key=True, index=True)
    poll_id = Column(Integer, ForeignKey("polls.id", ondelete="CASCADE"), nullable=False)
    option_text = Column(String(255), nullable=False)
    vote_count = Column(Integer, default=0)
    
    poll = relationship("Poll", back_populates="options")
    votes = relationship("PollVote", back_populates="option", cascade="all, delete-orphan")

class PollVote(Base, TenantMixin):
    __tablename__ = "poll_votes"
    
    id = Column(Integer, primary_key=True, index=True)
    poll_id = Column(Integer, ForeignKey("polls.id", ondelete="CASCADE"), nullable=False)
    option_id = Column(Integer, ForeignKey("poll_options.id", ondelete="CASCADE"), nullable=False)
    user_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    
    option = relationship("PollOption", back_populates="votes")

class Document(Base, TenantMixin):
    __tablename__ = "documents"
    
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(255), nullable=False)
    category = Column(String(100), default="BYLAWS")  # BYLAWS, AUDIT, AGM_MINUTES, CONTRACT, CERTIFICATE
    file_url = Column(String(500), nullable=False)
    file_size_kb = Column(Integer, default=0)
    uploaded_by_user_id = Column(Integer, ForeignKey("users.id", ondelete="SET NULL"), nullable=True)
    access_level = Column(String(50), default="RESIDENTS")  # PUBLIC, RESIDENTS, COMMITTEE_ONLY, ADMIN_ONLY
