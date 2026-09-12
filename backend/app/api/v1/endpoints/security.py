from datetime import datetime
from typing import List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from backend.app.api.deps import get_db, get_current_user
from backend.app.models.security import Visitor, VisitorLog, Delivery
from backend.app.models.society import Unit
from backend.app.models.user import User
from backend.app.schemas.security import VisitorCreate, VisitorLogOut, DeliveryCreate, DeliveryOut

router = APIRouter()

@router.get("/{society_id}/visitors", response_model=List[VisitorLogOut])
def list_visitor_logs(society_id: int, db: Session = Depends(get_db)):
    logs = db.query(VisitorLog).filter(VisitorLog.society_id == society_id).order_by(VisitorLog.entry_time.desc()).all()
    results = []
    for log in logs:
        unit = db.query(Unit).filter(Unit.id == log.unit_id).first()
        results.append(VisitorLogOut(
            id=log.id,
            visitor_name=log.visitor.name,
            visitor_phone=log.visitor.phone,
            visitor_type=log.visitor.visitor_type,
            unit_number=unit.unit_number if unit else "N/A",
            entry_time=log.entry_time,
            exit_time=log.exit_time,
            status=log.status,
            gate_name=log.gate_name
        ))
    return results

@router.post("/{society_id}/visitors", response_model=VisitorLogOut)
def register_visitor(
    society_id: int,
    vis_in: VisitorCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    visitor = Visitor(
        society_id=society_id,
        name=vis_in.name,
        phone=vis_in.phone,
        visitor_type=vis_in.visitor_type,
        vehicle_number=vis_in.vehicle_number,
        purpose=vis_in.purpose
    )
    db.add(visitor)
    db.flush()
    
    log = VisitorLog(
        society_id=society_id,
        visitor_id=visitor.id,
        unit_id=vis_in.unit_id,
        entry_time=datetime.utcnow(),
        status="APPROVED" if current_user.role == "RESIDENT" else "WAITING",
        approval_source="APP",
        gate_name="Main Gate",
        security_guard_id=current_user.id if current_user.role == "SECURITY_GUARD" else None
    )
    db.add(log)
    db.commit()
    db.refresh(log)
    
    unit = db.query(Unit).filter(Unit.id == vis_in.unit_id).first()
    return VisitorLogOut(
        id=log.id,
        visitor_name=visitor.name,
        visitor_phone=visitor.phone,
        visitor_type=visitor.visitor_type,
        unit_number=unit.unit_number if unit else "N/A",
        entry_time=log.entry_time,
        exit_time=log.exit_time,
        status=log.status,
        gate_name=log.gate_name
    )

@router.put("/{society_id}/visitors/{log_id}/approve")
def approve_visitor(society_id: int, log_id: int, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    log = db.query(VisitorLog).filter(VisitorLog.id == log_id, VisitorLog.society_id == society_id).first()
    if not log:
        raise HTTPException(status_code=404, detail="Visitor log not found")
    log.status = "APPROVED"
    db.commit()
    return {"status": "success", "message": "Visitor entry approved"}

@router.put("/{society_id}/visitors/{log_id}/exit")
def log_visitor_exit(society_id: int, log_id: int, db: Session = Depends(get_db)):
    log = db.query(VisitorLog).filter(VisitorLog.id == log_id, VisitorLog.society_id == society_id).first()
    if not log:
        raise HTTPException(status_code=404, detail="Visitor log not found")
    log.exit_time = datetime.utcnow()
    log.status = "EXITED"
    db.commit()
    return {"status": "success", "message": "Visitor exit recorded"}

@router.get("/{society_id}/deliveries", response_model=List[DeliveryOut])
def list_deliveries(society_id: int, db: Session = Depends(get_db)):
    return db.query(Delivery).filter(Delivery.society_id == society_id).all()

@router.post("/{society_id}/deliveries", response_model=DeliveryOut)
def record_delivery(society_id: int, del_in: DeliveryCreate, db: Session = Depends(get_db)):
    d = Delivery(society_id=society_id, received_at=datetime.utcnow(), status="RECEIVED", **del_in.dict())
    db.add(d)
    db.commit()
    db.refresh(d)
    return d
