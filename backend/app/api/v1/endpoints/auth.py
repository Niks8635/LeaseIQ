from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session
from backend.app.api.deps import get_db, get_current_user
from backend.app.schemas.auth import LoginRequest, RegisterRequest, TokenResponse, UserOut
from backend.app.services.auth_service import authenticate_user, register_user
from backend.app.models.user import User

router = APIRouter()

@router.post("/login", response_model=TokenResponse)
def login(request: LoginRequest, db: Session = Depends(get_db)):
    """Authenticate a user and return JWT access and refresh tokens."""
    return authenticate_user(db, request)

@router.post("/register", response_model=TokenResponse, status_code=status.HTTP_201_CREATED)
def register(request: RegisterRequest, db: Session = Depends(get_db)):
    """Register a new user in the platform."""
    return register_user(db, request)

@router.get("/me", response_model=UserOut)
def get_current_user_profile(current_user: User = Depends(get_current_user)):
    """Get the current authenticated user's profile."""
    return current_user
