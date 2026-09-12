from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from backend.app.api.deps import get_db, get_current_user
from backend.app.models.user import User
from backend.app.schemas.community import HealthScoreResponse, AskAIRequest, AskAIResponse
from backend.app.services.health_score_service import calculate_society_health_score
from backend.app.services.ai_service import process_ai_query

router = APIRouter()

@router.get("/{society_id}/health-score", response_model=HealthScoreResponse)
def get_health_score(society_id: int, db: Session = Depends(get_db)):
    """Computes the explainable Society Health Score (0-100) based on collections, complaints, and operations."""
    return calculate_society_health_score(db, society_id)

@router.post("/{society_id}/ask", response_model=AskAIResponse)
def ask_leaseiq(
    society_id: int,
    req: AskAIRequest,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    """Processes natural language queries regarding dues, complaints, visitors, and society metrics with RBAC."""
    data = process_ai_query(db, current_user, society_id, req.prompt)
    return AskAIResponse(**data)
