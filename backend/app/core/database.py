import os
import logging
from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base, sessionmaker
from backend.app.core.config import settings

logger = logging.getLogger(__name__)

# Try PostgreSQL first, fallback to SQLite if connection fails
database_url = settings.DATABASE_URL
engine = None

try:
    if database_url.startswith("postgres"):
        # Test connecting to PostgreSQL
        test_engine = create_engine(database_url, pool_pre_ping=True, connect_args={"connect_timeout": 3})
        with test_engine.connect() as conn:
            pass
        engine = test_engine
        logger.info("Connected to PostgreSQL database.")
except Exception as e:
    logger.warning(f"Could not connect to PostgreSQL ({e}). Falling back to SQLite.")
    database_url = settings.SQLITE_FALLBACK_URL

if engine is None:
    engine = create_engine(
        database_url,
        connect_args={"check_same_thread": False} if database_url.startswith("sqlite") else {},
        pool_pre_ping=True
    )
    logger.info(f"Using database: {database_url}")

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
