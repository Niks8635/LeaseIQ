from typing import Optional, List, Dict, Any
from datetime import datetime
from pydantic import BaseModel

class NoticeCreate(BaseModel):
    title: str
    content: str
    category: str = "GENERAL"
    target_audience: str = "ALL"
    is_pinned: bool = False

class NoticeOut(BaseModel):
    id: int
    title: str
    content: str
    category: str
    target_audience: str
    is_pinned: bool
    published_at: datetime

    class Config:
        from_attributes = True

class PollCreate(BaseModel):
    question: str
    description: Optional[str] = None
    options: List[str]
    expires_at: datetime
    is_anonymous: bool = False

class PollOptionOut(BaseModel):
    id: int
    option_text: str
    vote_count: int

    class Config:
        from_attributes = True

class PollOut(BaseModel):
    id: int
    question: str
    description: Optional[str] = None
    expires_at: datetime
    is_closed: bool
    options: List[PollOptionOut] = []

    class Config:
        from_attributes = True

class PollVoteCreate(BaseModel):
    poll_id: int
    option_id: int

class HealthScoreResponse(BaseModel):
    overall_score: int
    rating_label: str
    dimensions: Dict[str, int]
    insights: List[str]

class AskAIRequest(BaseModel):
    prompt: str

class AskAIResponse(BaseModel):
    answer: str
    sources: List[str] = []
    relevant_metrics: Optional[Dict[str, Any]] = None
