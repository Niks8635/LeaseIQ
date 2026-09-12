from fastapi import APIRouter
from backend.app.api.v1.endpoints import (
    auth, societies, residents, security, finance, ai_finance,
    complaints, facilities, community, ai
)

api_router = APIRouter()

api_router.include_router(auth.router, prefix="/auth", tags=["Authentication"])
api_router.include_router(societies.router, prefix="/societies", tags=["Societies & Units"])
api_router.include_router(residents.router, prefix="/residents", tags=["Residents"])
api_router.include_router(security.router, prefix="/security", tags=["Security & Visitors"])
api_router.include_router(finance.router, prefix="/finance", tags=["Finance & Accounting"])
api_router.include_router(ai_finance.router, prefix="/ai-finance", tags=["AI Finance Hub"])
api_router.include_router(complaints.router, prefix="/complaints", tags=["Helpdesk & Complaints"])
api_router.include_router(facilities.router, prefix="/facilities", tags=["Amenities & Bookings"])
api_router.include_router(community.router, prefix="/community", tags=["Community & Polls"])
api_router.include_router(ai.router, prefix="/ai", tags=["LeaseIQ Intelligence"])
