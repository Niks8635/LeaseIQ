from typing import List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from backend.app.api.deps import get_db, get_current_user, require_role
from backend.app.models.society import Society, Building, Unit
from backend.app.models.user import User
from backend.app.schemas.society import SocietyOut, SocietyCreate, BuildingOut, BuildingCreate, UnitOut, UnitCreate

router = APIRouter()

@router.get("/", response_model=List[SocietyOut])
def list_societies(db: Session = Depends(get_db)):
    """List societies."""
    return db.query(Society).filter(Society.is_active == True).all()

@router.get("/{society_id}", response_model=SocietyOut)
def get_society(society_id: int, db: Session = Depends(get_db)):
    soc = db.query(Society).filter(Society.id == society_id).first()
    if not soc:
        raise HTTPException(status_code=404, detail="Society not found")
    return soc

@router.get("/{society_id}/buildings", response_model=List[BuildingOut])
def list_buildings(society_id: int, db: Session = Depends(get_db)):
    return db.query(Building).filter(Building.society_id == society_id).all()

@router.post("/{society_id}/buildings", response_model=BuildingOut)
def create_building(
    society_id: int,
    building_in: BuildingCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(require_role(["SOCIETY_ADMIN", "COMMITTEE_MEMBER", "SOCIETY_MANAGER"]))
):
    b = Building(society_id=society_id, **building_in.dict())
    db.add(b)
    db.commit()
    db.refresh(b)
    return b

@router.get("/{society_id}/units", response_model=List[UnitOut])
def list_units(society_id: int, db: Session = Depends(get_db)):
    return db.query(Unit).filter(Unit.society_id == society_id).all()

@router.post("/{society_id}/units", response_model=UnitOut)
def create_unit(
    society_id: int,
    unit_in: UnitCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(require_role(["SOCIETY_ADMIN", "COMMITTEE_MEMBER", "SOCIETY_MANAGER"]))
):
    u = Unit(society_id=society_id, **unit_in.dict())
    db.add(u)
    db.commit()
    db.refresh(u)
    return u
