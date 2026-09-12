from typing import List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from backend.app.api.deps import get_db, get_current_user
from backend.app.models.complaint import Facility, FacilityBooking
from backend.app.models.user import User
from backend.app.models.resident import Resident
from backend.app.schemas.complaint import FacilityOut, FacilityBookingOut, FacilityBookingCreate

router = APIRouter()

@router.get("/{society_id}", response_model=List[FacilityOut])
def list_facilities(society_id: int, db: Session = Depends(get_db)):
    return db.query(Facility).filter(Facility.society_id == society_id, Facility.is_active == True).all()

@router.get("/{society_id}/bookings", response_model=List[FacilityBookingOut])
def list_facility_bookings(society_id: int, db: Session = Depends(get_db)):
    bookings = db.query(FacilityBooking).filter(FacilityBooking.society_id == society_id).all()
    results = []
    for b in bookings:
        results.append(FacilityBookingOut(
            id=b.id,
            facility_id=b.facility_id,
            facility_name=b.facility.name if b.facility else "Amenity",
            booking_date=b.booking_date,
            start_time=b.start_time,
            end_time=b.end_time,
            status=b.status,
            amount_paid=b.amount_paid
        ))
    return results

@router.post("/{society_id}/bookings", response_model=FacilityBookingOut)
def book_facility(
    society_id: int,
    b_in: FacilityBookingCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    # Check availability
    conflict = db.query(FacilityBooking).filter(
        FacilityBooking.society_id == society_id,
        FacilityBooking.facility_id == b_in.facility_id,
        FacilityBooking.booking_date == b_in.booking_date,
        FacilityBooking.start_time == b_in.start_time,
        FacilityBooking.status == "CONFIRMED"
    ).first()
    if conflict:
        raise HTTPException(status_code=400, detail="This time slot is already booked for this amenity")
        
    res = db.query(Resident).filter(Resident.user_id == current_user.id).first()
    facility = db.query(Facility).filter(Facility.id == b_in.facility_id).first()
    
    booking = FacilityBooking(
        society_id=society_id,
        facility_id=b_in.facility_id,
        resident_id=res.id if res else 1,
        booking_date=b_in.booking_date,
        start_time=b_in.start_time,
        end_time=b_in.end_time,
        number_of_guests=b_in.number_of_guests,
        status="CONFIRMED",
        amount_paid=facility.booking_charge if facility else 0.0
    )
    db.add(booking)
    db.commit()
    db.refresh(booking)
    
    return FacilityBookingOut(
        id=booking.id,
        facility_id=booking.facility_id,
        facility_name=facility.name if facility else "Amenity",
        booking_date=booking.booking_date,
        start_time=booking.start_time,
        end_time=booking.end_time,
        status=booking.status,
        amount_paid=booking.amount_paid
    )
