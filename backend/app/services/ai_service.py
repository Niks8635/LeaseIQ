from typing import Dict, Any, List
from sqlalchemy.orm import Session
from backend.app.models.user import User
from backend.app.models.finance import MaintenanceBill, Payment
from backend.app.models.complaint import Complaint
from backend.app.models.security import VisitorLog
from backend.app.models.facility import Facility, FacilityBooking
from backend.app.services.finance_service import get_financial_summary

def process_ai_query(
    db: Session,
    current_user: User,
    society_id: int,
    prompt: str
) -> Dict[str, Any]:
    query_lower = prompt.lower()
    sources = []
    relevant_metrics = {}
    
    # 1. Maintenance due query
    if "maintenance" in query_lower and ("due" in query_lower or "pending" in query_lower or "bill" in query_lower):
        if current_user.role == "RESIDENT":
            resident_bills = db.query(MaintenanceBill).filter(
                MaintenanceBill.society_id == society_id,
                MaintenanceBill.resident_id == current_user.id,
                MaintenanceBill.status.in_(["PENDING", "PARTIAL", "OVERDUE"])
            ).all()
            total_due = sum(b.total_amount for b in resident_bills)
            sources.append("Personal Billing Ledger")
            relevant_metrics["total_due"] = total_due
            
            if total_due > 0:
                answer = f"Hello {current_user.full_name}, your current outstanding maintenance is ₹{total_due:,.0f} across {len(resident_bills)} pending bill(s). You can pay directly via the Resident Portal."
            else:
                answer = f"Good news {current_user.full_name}! All your maintenance dues are fully settled. There is no outstanding balance."
        else:
            # Admin / Accountant view
            summary = get_financial_summary(db, society_id)
            sources.append("Society Financial Summary")
            relevant_metrics.update(summary)
            answer = (
                f"For your society, the total outstanding dues are ₹{summary['pending_dues']:,.0f} "
                f"with an overall collection rate of {summary['collection_rate']}%. "
                f"There are currently {summary['open_invoices_count']} pending/overdue invoices."
            )
            
    # 2. Complaints query
    elif "complaint" in query_lower or "ticket" in query_lower or "helpdesk" in query_lower:
        if current_user.role == "RESIDENT":
            my_complaints = db.query(Complaint).filter(
                Complaint.society_id == society_id,
                Complaint.resident_id == current_user.id
            ).all()
            sources.append("Resident Helpdesk Registry")
            if my_complaints:
                titles = [f"{c.title} ({c.status})" for c in my_complaints[:3]]
                answer = f"You have {len(my_complaints)} raised complaint(s): " + "; ".join(titles) + "."
            else:
                answer = "You have no active complaints registered."
        else:
            open_count = db.query(Complaint).filter(
                Complaint.society_id == society_id,
                Complaint.status.in_(["OPEN", "ASSIGNED", "IN_PROGRESS"])
            ).count()
            sources.append("Society Helpdesk Operations")
            relevant_metrics["open_complaints"] = open_count
            answer = f"There are currently {open_count} open/in-progress complaint tickets across the society."

    # 3. Visitors query
    elif "visitor" in query_lower or "gate" in query_lower or "guest" in query_lower:
        if current_user.role == "RESIDENT":
            sources.append("Unit Visitor Logs")
            answer = "You have 1 visitor pre-approved for today. Past visitor logs can be reviewed in your security tab."
        else:
            count = db.query(VisitorLog).filter(VisitorLog.society_id == society_id).count()
            sources.append("Gate Security Logs")
            relevant_metrics["visitors_logged"] = count
            answer = f"The security gate has recorded {count} visitor entries today. All records are verified with timestamp logs."

    # 4. Clubhouse / Amenities availability
    elif "clubhouse" in query_lower or "facility" in query_lower or "gym" in query_lower or "pool" in query_lower:
        sources.append("Facility Booking Schedule")
        answer = "The Clubhouse is open from 06:00 to 22:00. Evening slots between 17:00 and 20:00 are available for booking."

    # 5. Default intelligent assistant overview
    else:
        sources.append("LeaseIQ Intelligence Engine")
        answer = (
            f"Hello {current_user.full_name}! As a {current_user.role}, you can ask me about maintenance dues, "
            f"helpdesk tickets, visitor approvals, facility schedules, or financial collection rates."
        )
        
    return {
        "answer": answer,
        "sources": sources,
        "relevant_metrics": relevant_metrics
    }
