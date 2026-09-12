import uuid
from datetime import datetime
from typing import List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from backend.app.api.deps import get_db, get_current_user
from backend.app.models.complaint import Complaint, ComplaintComment
from backend.app.models.user import User
from backend.app.models.resident import Resident
from backend.app.schemas.complaint import ComplaintOut, ComplaintCreate, ComplaintUpdate

router = APIRouter()

@router.get("/{society_id}", response_model=List[ComplaintOut])
def list_complaints(society_id: int, db: Session = Depends(get_db)):
    return db.query(Complaint).filter(Complaint.society_id == society_id).order_by(Complaint.created_at.desc()).all()

@router.post("/{society_id}", response_model=ComplaintOut)
def raise_complaint(
    society_id: int,
    comp_in: ComplaintCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    resident = db.query(Resident).filter(Resident.user_id == current_user.id).first()
    unit_id = comp_in.unit_id or (resident.unit_id if resident else 1)
    
    t_num = f"TKT-{uuid.uuid4().hex[:6].upper()}"
    complaint = Complaint(
        society_id=society_id,
        ticket_number=t_num,
        unit_id=unit_id,
        resident_id=resident.id if resident else 1,
        category=comp_in.category,
        title=comp_in.title,
        description=comp_in.description,
        priority=comp_in.priority,
        status="OPEN"
    )
    db.add(complaint)
    db.commit()
    db.refresh(complaint)
    return complaint

@router.patch("/{society_id}/{complaint_id}", response_model=ComplaintOut)
def update_complaint(
    society_id: int,
    complaint_id: int,
    comp_update: ComplaintUpdate,
    db: Session = Depends(get_db)
):
    c = db.query(Complaint).filter(Complaint.id == complaint_id, Complaint.society_id == society_id).first()
    if not c:
        raise HTTPException(status_code=404, detail="Complaint not found")
        
    for k, v in comp_update.dict(exclude_unset=True).items():
        setattr(c, k, v)
        
    if comp_update.status in ["RESOLVED", "CLOSED"]:
        c.resolved_at = datetime.utcnow()
        
    db.commit()
    db.refresh(c)
    return c
