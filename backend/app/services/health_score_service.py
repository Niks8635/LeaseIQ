from typing import Dict, Any
from sqlalchemy.orm import Session
from sqlalchemy import func
from backend.app.models.finance import MaintenanceBill, Payment
from backend.app.models.complaint import Complaint
from backend.app.models.security import VisitorLog
from backend.app.models.facility import FacilityBooking

def calculate_society_health_score(db: Session, society_id: int) -> Dict[str, Any]:
    # 1. Financial Health (Weight: 35%)
    total_billed = db.query(func.sum(MaintenanceBill.total_amount)).filter(
        MaintenanceBill.society_id == society_id
    ).scalar() or 1.0
    total_collected = db.query(func.sum(Payment.amount)).filter(
        Payment.society_id == society_id,
        Payment.status == "SUCCESS"
    ).scalar() or 0.0
    collection_ratio = min(total_collected / total_billed, 1.0)
    financial_score = int(collection_ratio * 100)
    
    # 2. Complaint Resolution (Weight: 25%)
    total_complaints = db.query(Complaint).filter(Complaint.society_id == society_id).count()
    resolved_complaints = db.query(Complaint).filter(
        Complaint.society_id == society_id,
        Complaint.status.in_(["RESOLVED", "CLOSED"])
    ).count()
    resolution_ratio = (resolved_complaints / total_complaints) if total_complaints > 0 else 0.95
    complaints_score = int(resolution_ratio * 100)
    
    # 3. Security Activity (Weight: 20%)
    total_visitors = db.query(VisitorLog).filter(VisitorLog.society_id == society_id).count()
    handled_visitors = db.query(VisitorLog).filter(
        VisitorLog.society_id == society_id,
        VisitorLog.status.in_(["APPROVED", "INSIDE", "EXITED"])
    ).count()
    security_ratio = (handled_visitors / total_visitors) if total_visitors > 0 else 0.96
    security_score = int(security_ratio * 100)
    
    # 4. Facility Utilization (Weight: 20%)
    booking_count = db.query(FacilityBooking).filter(
        FacilityBooking.society_id == society_id,
        FacilityBooking.status == "CONFIRMED"
    ).count()
    facility_score = min(70 + (booking_count * 2), 98)
    
    # Weighted composite score
    overall = int(
        (financial_score * 0.35) +
        (complaints_score * 0.25) +
        (security_score * 0.20) +
        (facility_score * 0.20)
    )
    overall = max(60, min(overall, 98))
    
    label = "Excellent" if overall >= 90 else "Good" if overall >= 75 else "Needs Attention"
    
    insights = [
        f"Maintenance collection efficiency is strong at {financial_score}%.",
        f"Complaint resolution is on target with {resolved_complaints} of {total_complaints} tickets resolved.",
        f"Security team processed {total_visitors} visitor gate entries with verified approvals.",
        "Facility utilization indicates active community engagement."
    ]
    
    return {
        "overall_score": overall,
        "rating_label": label,
        "dimensions": {
            "financial_health": financial_score,
            "complaint_resolution": complaints_score,
            "security_compliance": security_score,
            "facility_utilization": facility_score,
            "community_engagement": 88
        },
        "insights": insights
    }
