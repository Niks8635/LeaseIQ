from typing import List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from backend.app.api.deps import get_db, get_current_user, require_role
from backend.app.models.resident import Resident, FamilyMember
from backend.app.models.user import User
from backend.app.models.society import Unit
from backend.app.schemas.resident import ResidentOut, ResidentCreate, FamilyMemberOut, FamilyMemberCreate
from backend.app.core.security import get_password_hash

router = APIRouter()

@router.get("/{society_id}", response_model=List[ResidentOut])
def list_residents(
    society_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    return db.query(Resident).filter(Resident.society_id == society_id).all()

@router.post("/{society_id}", response_model=ResidentOut)
def add_resident(
    society_id: int,
    res_in: ResidentCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(require_role(["SOCIETY_ADMIN", "COMMITTEE_MEMBER", "SOCIETY_MANAGER"]))
):
    # Create associated user account
    user = User(
        society_id=society_id,
        email=res_in.email,
        full_name=res_in.full_name,
        phone=res_in.phone,
        hashed_password=get_password_hash("Password@123"),  # default welcome password
        role="RESIDENT"
    )
    db.add(user)
    db.flush()
    
    resident = Resident(
        society_id=society_id,
        user_id=user.id,
        unit_id=res_in.unit_id,
        resident_type=res_in.resident_type,
        emergency_contact_name=res_in.emergency_contact_name,
        emergency_contact_phone=res_in.emergency_contact_phone
    )
    db.add(resident)
    db.commit()
    db.refresh(resident)
    return resident

@router.get("/{society_id}/{resident_id}/family", response_model=List[FamilyMemberOut])
def list_family_members(society_id: int, resident_id: int, db: Session = Depends(get_db)):
    return db.query(FamilyMember).filter(
        FamilyMember.society_id == society_id,
        FamilyMember.resident_id == resident_id
    ).all()

@router.post("/{society_id}/{resident_id}/family", response_model=FamilyMemberOut)
def add_family_member(
    society_id: int,
    resident_id: int,
    fam_in: FamilyMemberCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    fm = FamilyMember(society_id=society_id, resident_id=resident_id, **fam_in.dict())
    db.add(fm)
    db.commit()
    db.refresh(fm)
    return fm
