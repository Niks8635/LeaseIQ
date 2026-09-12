from typing import Optional
from sqlalchemy.orm import Session
from fastapi import HTTPException, status
from backend.app.models.user import User
from backend.app.schemas.auth import RegisterRequest, LoginRequest, TokenResponse
from backend.app.core.security import verify_password, get_password_hash, create_access_token, create_refresh_token

def authenticate_user(db: Session, request: LoginRequest) -> TokenResponse:
    user = db.query(User).filter(User.email == request.email).first()
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    if not verify_password(request.password, user.hashed_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    if not user.is_active:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="User account is deactivated"
        )
    
    access_token = create_access_token(
        subject=user.id,
        role=user.role,
        society_id=user.society_id
    )
    refresh_token = create_refresh_token(subject=user.id)
    
    return TokenResponse(
        access_token=access_token,
        refresh_token=refresh_token,
        role=user.role,
        full_name=user.full_name,
        email=user.email,
        society_id=user.society_id
    )

def register_user(db: Session, request: RegisterRequest) -> TokenResponse:
    existing = db.query(User).filter(User.email == request.email).first()
    if existing:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="User with this email already exists"
        )
        
    user = User(
        email=request.email,
        full_name=request.full_name,
        phone=request.phone,
        hashed_password=get_password_hash(request.password),
        role=request.role or "RESIDENT",
        society_id=request.society_id
    )
    db.add(user)
    db.commit()
    db.refresh(user)
    
    access_token = create_access_token(
        subject=user.id,
        role=user.role,
        society_id=user.society_id
    )
    refresh_token = create_refresh_token(subject=user.id)
    
    return TokenResponse(
        access_token=access_token,
        refresh_token=refresh_token,
        role=user.role,
        full_name=user.full_name,
        email=user.email,
        society_id=user.society_id
    )
