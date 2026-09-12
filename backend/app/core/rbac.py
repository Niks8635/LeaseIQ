from enum import Enum
from typing import List, Set

class RoleType(str, Enum):
    SUPER_ADMIN = "SUPER_ADMIN"
    SOCIETY_ADMIN = "SOCIETY_ADMIN"
    COMMITTEE_MEMBER = "COMMITTEE_MEMBER"
    ACCOUNTANT = "ACCOUNTANT"
    SOCIETY_MANAGER = "SOCIETY_MANAGER"
    RESIDENT = "RESIDENT"
    SECURITY_GUARD = "SECURITY_GUARD"
    STAFF = "STAFF"
    VENDOR = "VENDOR"

class Permission(str, Enum):
    # Society Management
    SOCIETY_READ = "society:read"
    SOCIETY_WRITE = "society:write"
    
    # Resident Management
    RESIDENT_READ = "resident:read"
    RESIDENT_WRITE = "resident:write"
    
    # Finance & Accounting
    FINANCE_READ = "finance:read"
    FINANCE_WRITE = "finance:write"
    FINANCE_APPROVE = "finance:approve"
    
    # Security & Gate
    SECURITY_READ = "security:read"
    SECURITY_WRITE = "security:write"
    
    # Helpdesk
    COMPLAINT_READ = "complaint:read"
    COMPLAINT_WRITE = "complaint:write"
    COMPLAINT_ASSIGN = "complaint:assign"
    
    # Facilities
    FACILITY_READ = "facility:read"
    FACILITY_WRITE = "facility:write"
    FACILITY_BOOK = "facility:book"
    
    # Vendors & Staff
    VENDOR_READ = "vendor:read"
    VENDOR_WRITE = "vendor:write"
    STAFF_READ = "staff:read"
    STAFF_WRITE = "staff:write"
    
    # Community
    NOTICE_READ = "notice:read"
    NOTICE_WRITE = "notice:write"
    POLL_VOTE = "poll:vote"
    
    # AI & Analytics
    ANALYTICS_READ = "analytics:read"
    AI_READ = "ai:read"
    
    # Audit
    AUDIT_READ = "audit:read"

ROLE_PERMISSIONS = {
    RoleType.SUPER_ADMIN: set(Permission),
    RoleType.SOCIETY_ADMIN: set(Permission) - {Permission.SOCIETY_WRITE},
    RoleType.COMMITTEE_MEMBER: {
        Permission.SOCIETY_READ, Permission.RESIDENT_READ, Permission.FINANCE_READ, 
        Permission.FINANCE_APPROVE, Permission.SECURITY_READ, Permission.COMPLAINT_READ,
        Permission.COMPLAINT_ASSIGN, Permission.FACILITY_READ, Permission.FACILITY_BOOK,
        Permission.VENDOR_READ, Permission.STAFF_READ, Permission.NOTICE_READ,
        Permission.NOTICE_WRITE, Permission.POLL_VOTE, Permission.ANALYTICS_READ,
        Permission.AI_READ, Permission.AUDIT_READ
    },
    RoleType.ACCOUNTANT: {
        Permission.SOCIETY_READ, Permission.RESIDENT_READ, Permission.FINANCE_READ,
        Permission.FINANCE_WRITE, Permission.VENDOR_READ, Permission.VENDOR_WRITE,
        Permission.ANALYTICS_READ, Permission.AI_READ, Permission.AUDIT_READ
    },
    RoleType.SOCIETY_MANAGER: {
        Permission.SOCIETY_READ, Permission.RESIDENT_READ, Permission.SECURITY_READ,
        Permission.SECURITY_WRITE, Permission.COMPLAINT_READ, Permission.COMPLAINT_WRITE,
        Permission.COMPLAINT_ASSIGN, Permission.FACILITY_READ, Permission.FACILITY_WRITE,
        Permission.FACILITY_BOOK, Permission.VENDOR_READ, Permission.STAFF_READ,
        Permission.STAFF_WRITE, Permission.NOTICE_READ, Permission.NOTICE_WRITE,
        Permission.POLL_VOTE, Permission.ANALYTICS_READ
    },
    RoleType.RESIDENT: {
        Permission.SOCIETY_READ, Permission.COMPLAINT_READ, Permission.COMPLAINT_WRITE,
        Permission.FACILITY_READ, Permission.FACILITY_BOOK, Permission.NOTICE_READ,
        Permission.POLL_VOTE, Permission.SECURITY_READ, Permission.SECURITY_WRITE
    },
    RoleType.SECURITY_GUARD: {
        Permission.SECURITY_READ, Permission.SECURITY_WRITE, Permission.STAFF_READ,
        Permission.NOTICE_READ
    },
    RoleType.STAFF: {
        Permission.COMPLAINT_READ, Permission.COMPLAINT_WRITE, Permission.STAFF_READ,
        Permission.NOTICE_READ
    },
    RoleType.VENDOR: {
        Permission.VENDOR_READ, Permission.COMPLAINT_READ
    }
}

def has_permission(user_role: str, permission: Permission) -> bool:
    try:
        role_enum = RoleType(user_role)
        return permission in ROLE_PERMISSIONS.get(role_enum, set())
    except ValueError:
        return False
