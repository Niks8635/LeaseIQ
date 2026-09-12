import logging
from contextlib import asynccontextmanager
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from backend.app.core.config import settings
from backend.app.api.v1.api import api_router
from backend.app.seed import seed_database

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("leaseiq")

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup: seed database if empty
    try:
        seed_database()
    except Exception as e:
        logger.error(f"Startup database initialization error: {e}")
    yield
    # Shutdown

app = FastAPI(
    title=settings.PROJECT_NAME,
    version=settings.VERSION,
    openapi_url=f"{settings.API_V1_STR}/openapi.json",
    docs_url="/docs",
    redoc_url="/redoc",
    lifespan=lifespan
)

# CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Custom Global Exception Handler
@app.exception_handler(Exception)
async def global_exception_handler(request: Request, exc: Exception):
    logger.error(f"Unhandled server error on {request.url}: {exc}")
    return JSONResponse(
        status_code=500,
        content={"detail": "Internal server error occurred. Please contact system support."}
    )

@app.get("/health", tags=["System"])
def health_check():
    return {
        "status": "healthy",
        "service": "LeaseIQ Societies Backend",
        "version": settings.VERSION
    }

@app.get("/", tags=["System"])
def root():
    return {
        "message": "Welcome to LeaseIQ Societies API",
        "tagline": "The Smarter Way to Run Your Society",
        "docs_url": "/docs",
        "api_v1": settings.API_V1_STR
    }

# Include API v1 Router
app.include_router(api_router, prefix=settings.API_V1_STR)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("backend.app.main:app", host="0.0.0.0", port=8000, reload=True)
