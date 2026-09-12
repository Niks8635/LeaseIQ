import logging
from datetime import datetime, date, timedelta
from sqlalchemy.orm import Session
from backend.app.core.database import SessionLocal, Base, engine
from backend.app.core.security import get_password_hash
import backend.app.models as models

logger = logging.getLogger(__name__)

def seed_database(db: Session = None):
    # Ensure tables exist
    Base.metadata.create_all(bind=engine)
    
    close_session = False
    if db is None:
        db = SessionLocal()
        close_session = True
        
    try:
        # Check if already seeded
        existing_society = db.query(models.Society).first()
        if existing_society:
            logger.info("Database already contains data. Skipping seed.")
            return existing_society.id

        logger.info("Seeding realistic demo data for Green Valley Residency...")
        
        # 1. Create Society
        society = models.Society(
            name="Green Valley Residency",
            registration_number="GVR/MAH/2021/789",
            address="Plot 42, Sector 18, Palm Beach Road",
            city="Navi Mumbai",
            state="Maharashtra",
            pincode="400705",
            contact_email="committee@greenvalley.org",
            contact_phone="+91 22 2789 4500",
            total_units=450,
            is_active=True
        )
        db.add(society)
        db.flush()
        society_id = society.id

        # 2. Create Users for all roles
        default_pwd = get_password_hash("Password@123")
        
        users_data = [
            ("admin@leaseiq.in", "Rajesh Singhania", "SOCIETY_ADMIN", "+91 98200 11111"),
            ("accountant@leaseiq.in", "Suresh Iyer", "ACCOUNTANT", "+91 98200 22222"),
            ("manager@leaseiq.in", "Vikram Rathore", "SOCIETY_MANAGER", "+91 98200 33333"),
            ("resident@leaseiq.in", "Priya Sharma", "RESIDENT", "+91 98200 44444"),
            ("security@leaseiq.in", "Ramesh Yadav", "SECURITY_GUARD", "+91 98200 55555"),
            ("vendor@leaseiq.in", "Anil Mehta", "VENDOR", "+91 98200 66666"),
            ("committee@leaseiq.in", "Dr. Anita Desai", "COMMITTEE_MEMBER", "+91 98200 77777"),
        ]
        
        created_users = {}
        for email, name, role, phone in users_data:
            user = models.User(
                society_id=society_id,
                email=email,
                full_name=name,
                phone=phone,
                hashed_password=default_pwd,
                role=role,
                is_active=True
            )
            db.add(user)
            db.flush()
            created_users[role] = user

        # 3. Create Buildings & Units
        towers = ["Tower A", "Tower B", "Tower C"]
        created_units = []
        
        for tower_name in towers:
            bldg = models.Building(society_id=society_id, name=tower_name, total_floors=10)
            db.add(bldg)
            db.flush()
            
            for floor_num in range(1, 6):
                floor = models.Floor(society_id=society_id, building_id=bldg.id, floor_number=floor_num, name=f"Floor {floor_num}")
                db.add(floor)
                db.flush()
                
                for unit_idx in [1, 2, 3, 4]:
                    unit_no = f"{tower_name[-1]}-{floor_num}0{unit_idx}"
                    u = models.Unit(
                        society_id=society_id,
                        building_id=bldg.id,
                        floor_id=floor.id,
                        unit_number=unit_no,
                        unit_type="3BHK" if unit_idx % 2 == 0 else "2BHK",
                        area_sqft=1450.0 if unit_idx % 2 == 0 else 1050.0,
                        occupancy_status="OCCUPIED"
                    )
                    db.add(u)
                    db.flush()
                    created_units.append(u)

        # 4. Create Resident Profile for demo resident (Priya Sharma in A-402)
        unit_a402 = next((u for u in created_units if u.unit_number == "A-402"), created_units[0])
        resident = models.Resident(
            society_id=society_id,
            user_id=created_users["RESIDENT"].id,
            unit_id=unit_a402.id,
            resident_type="OWNER",
            move_in_date=date(2022, 4, 1),
            emergency_contact_name="Amit Sharma",
            emergency_contact_phone="+91 98200 99999",
            is_primary=True
        )
        db.add(resident)
        db.flush()
        
        # Family members
        fam = models.FamilyMember(
            society_id=society_id,
            resident_id=resident.id,
            name="Amit Sharma",
            relationship_type="Spouse",
            phone="+91 98200 99999"
        )
        db.add(fam)

        # 5. Create Maintenance Bills
        bills_data = [
            (unit_a402.id, resident.id, "September 2025", 4500.0, "PENDING", date.today() + timedelta(days=5)),
            (created_units[1].id, None, "September 2025", 4500.0, "PAID", date.today() - timedelta(days=10)),
            (created_units[2].id, None, "September 2025", 5200.0, "OVERDUE", date.today() - timedelta(days=2)),
            (created_units[3].id, None, "September 2025", 4500.0, "PAID", date.today() - timedelta(days=12)),
        ]
        
        created_bills = []
        for idx, (uid, rid, month, amt, status, due) in enumerate(bills_data):
            bill = models.MaintenanceBill(
                society_id=society_id,
                unit_id=uid,
                resident_id=rid,
                bill_number=f"BILL-2025-{idx+1:04d}",
                billing_month=month,
                base_charge=amt - 500,
                water_charge=300.0,
                sinking_fund=200.0,
                total_amount=amt,
                due_date=due,
                status=status
            )
            db.add(bill)
            db.flush()
            created_bills.append(bill)

        # 6. Create Paid Payment and Receipt
        payment = models.Payment(
            society_id=society_id,
            bill_id=created_bills[1].id,
            resident_id=resident.id,
            amount=4500.0,
            payment_date=datetime.utcnow() - timedelta(days=3),
            payment_method="UPI",
            status="SUCCESS",
            transaction_reference="PAY-UPI-GVR849204"
        )
        db.add(payment)
        db.flush()
        
        receipt = models.Receipt(
            society_id=society_id,
            payment_id=payment.id,
            receipt_number="RCP-202509-0001",
            issued_date=datetime.utcnow() - timedelta(days=3),
            receipt_url="/receipts/RCP-202509-0001.pdf"
        )
        db.add(receipt)

        # 7. Create Bank Transactions for AI Reconciliation
        bank_txs = [
            ("HDFC-9482019482", date.today() - timedelta(days=1), "NEFT-AXIS-A402-PRIYA SHARMA-MAINTENANCE", "TXN948201", "CREDIT", 4500.0),
            ("HDFC-9482019482", date.today() - timedelta(days=2), "UPI-9820011111-FLAT A101-MAINT", "TXN948202", "CREDIT", 4500.0),
            ("HDFC-9482019482", date.today() - timedelta(days=3), "RTGS-ABC SECURITY SERVICES-SEPTEMBER", "TXN948203", "DEBIT", 125000.0),
            ("HDFC-9482019482", date.today() - timedelta(days=4), "UNKNOWN DEPOSIT BY CASH BR-149", "TXN948204", "CREDIT", 3000.0),
        ]
        for acct, dt, narr, ref, tx_type, amt in bank_txs:
            btx = models.BankTransaction(
                society_id=society_id,
                bank_account_number=acct,
                transaction_date=dt,
                narration=narr,
                reference_number=ref,
                transaction_type=tx_type,
                amount=amt,
                reconciliation_status="UNMATCHED"
            )
            db.add(btx)

        # 8. Create Vendors & Invoices
        v1 = models.Vendor(
            society_id=society_id,
            name="ABC Security Services Pvt Ltd",
            service_category="Security",
            phone="+91 22 2840 9900",
            email="billing@abcsecurity.in",
            gst_number="27AAACA1234A1Z5",
            rating=4.8
        )
        v2 = models.Vendor(
            society_id=society_id,
            name="Sparkle Clean Facility Solutions",
            service_category="Cleaning",
            phone="+91 22 2840 8800",
            email="support@sparkleclean.in",
            gst_number="27AAACB5678B1Z6",
            rating=4.5
        )
        db.add_all([v1, v2])
        db.flush()

        inv1 = models.VendorInvoice(
            society_id=society_id,
            vendor_id=v1.id,
            invoice_number="INV-2025-089",
            amount=125000.0,
            gst_amount=22500.0,
            invoice_date=date.today() - timedelta(days=10),
            due_date=date.today() + timedelta(days=5),
            status="APPROVED"
        )
        # Duplicate test invoice
        inv2 = models.VendorInvoice(
            society_id=society_id,
            vendor_id=v1.id,
            invoice_number="INV-2025-089-DUP",
            amount=125000.0,
            gst_amount=22500.0,
            invoice_date=date.today() - timedelta(days=2),
            due_date=date.today() + timedelta(days=12),
            status="DUPLICATE_FLAGGED",
            is_potential_duplicate=True,
            duplicate_reason="Potential duplicate: Matches invoice #INV-2025-089 for ₹125,000"
        )
        db.add_all([inv1, inv2])

        # 9. Create Helpdesk Complaints
        c1 = models.Complaint(
            society_id=society_id,
            ticket_number="TKT-489201",
            unit_id=unit_a402.id,
            resident_id=resident.id,
            category="Plumbing",
            title="Bathroom water pipe leakage",
            description="Continuous dripping from the main inlet valve under the washbasin.",
            priority="HIGH",
            status="IN_PROGRESS",
            sla_hours=24
        )
        c2 = models.Complaint(
            society_id=society_id,
            ticket_number="TKT-489202",
            unit_id=created_units[1].id,
            resident_id=resident.id,
            category="Electrical",
            title="Corridor light flickering",
            description="4th floor lobby light is blinking intermittently.",
            priority="LOW",
            status="RESOLVED",
            resolved_at=datetime.utcnow() - timedelta(hours=4),
            resolution_summary="Replaced faulty LED starter"
        )
        db.add_all([c1, c2])

        # 10. Create Amenities & Facility Bookings
        f1 = models.Facility(society_id=society_id, name="Clubhouse & Community Hall", capacity=100, booking_charge=2500.0)
        f2 = models.Facility(society_id=society_id, name="Swimming Pool", capacity=30, booking_charge=0.0)
        f3 = models.Facility(society_id=society_id, name="Badminton Court", capacity=4, booking_charge=100.0)
        f4 = models.Facility(society_id=society_id, name="Fitness Center / Gym", capacity=25, booking_charge=0.0)
        db.add_all([f1, f2, f3, f4])
        db.flush()

        fb1 = models.FacilityBooking(
            society_id=society_id,
            facility_id=f1.id,
            resident_id=resident.id,
            booking_date=date.today() + timedelta(days=3),
            start_time="18:00",
            end_time="21:00",
            number_of_guests=25,
            status="CONFIRMED",
            amount_paid=2500.0
        )
        db.add(fb1)

        # 11. Create Visitors & Gate Logs
        v_person = models.Visitor(
            society_id=society_id,
            name="Rahul Verma",
            phone="+91 98111 22334",
            visitor_type="GUEST",
            vehicle_number="MH04-AB-1234",
            purpose="Family visit"
        )
        db.add(v_person)
        db.flush()
        
        vlog = models.VisitorLog(
            society_id=society_id,
            visitor_id=v_person.id,
            unit_id=unit_a402.id,
            entry_time=datetime.utcnow() - timedelta(minutes=45),
            status="APPROVED",
            gate_name="Main Gate"
        )
        db.add(vlog)

        # 12. Create Community Notice & Poll
        notice = models.Notice(
            society_id=society_id,
            title="Quarterly Society AGM & Budget Review",
            content="The Annual General Body Meeting will be held this Sunday at 10:30 AM in the Clubhouse.",
            category="GENERAL",
            target_audience="ALL",
            is_pinned=True,
            published_at=datetime.utcnow() - timedelta(days=1)
        )
        db.add(notice)
        
        poll = models.Poll(
            society_id=society_id,
            question="Should we install EV charging stations in Basement 2?",
            description="Proposed installation of 8 dual-gun AC fast chargers with smart billing.",
            expires_at=datetime.utcnow() + timedelta(days=14),
            is_closed=False
        )
        db.add(poll)
        db.flush()
        
        o1 = models.PollOption(society_id=society_id, poll_id=poll.id, option_text="Yes, approve installation", vote_count=42)
        o2 = models.PollOption(society_id=society_id, poll_id=poll.id, option_text="No, defer to next AGM", vote_count=8)
        o3 = models.PollOption(society_id=society_id, poll_id=poll.id, option_text="Need more cost estimates", vote_count=14)
        db.add_all([o1, o2, o3])

        # Commit all seeded data
        db.commit()
        logger.info("Successfully seeded Green Valley Residency with full database records!")
        return society_id

    except Exception as e:
        db.rollback()
        logger.error(f"Error seeding database: {e}")
        raise e
    finally:
        if close_session:
            db.close()

if __name__ == "__main__":
    seed_database()
