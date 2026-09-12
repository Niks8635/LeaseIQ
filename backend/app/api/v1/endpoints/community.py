from datetime import datetime
from typing import List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from backend.app.api.deps import get_db, get_current_user
from backend.app.models.community import Notice, Poll, PollOption, PollVote, Event
from backend.app.models.user import User
from backend.app.schemas.community import NoticeOut, NoticeCreate, PollOut, PollCreate, PollVoteCreate, PollOptionOut

router = APIRouter()

@router.get("/{society_id}/notices", response_model=List[NoticeOut])
def list_notices(society_id: int, db: Session = Depends(get_db)):
    return db.query(Notice).filter(Notice.society_id == society_id).order_by(Notice.published_at.desc()).all()

@router.post("/{society_id}/notices", response_model=NoticeOut)
def create_notice(society_id: int, n_in: NoticeCreate, db: Session = Depends(get_db)):
    n = Notice(society_id=society_id, published_at=datetime.utcnow(), **n_in.dict())
    db.add(n)
    db.commit()
    db.refresh(n)
    return n

@router.get("/{society_id}/polls", response_model=List[PollOut])
def list_polls(society_id: int, db: Session = Depends(get_db)):
    polls = db.query(Poll).filter(Poll.society_id == society_id).all()
    results = []
    for p in polls:
        opts = [PollOptionOut(id=o.id, option_text=o.option_text, vote_count=o.vote_count) for o in p.options]
        results.append(PollOut(
            id=p.id,
            question=p.question,
            description=p.description,
            expires_at=p.expires_at,
            is_closed=p.is_closed,
            options=opts
        ))
    return results

@router.post("/{society_id}/polls/vote")
def cast_poll_vote(
    society_id: int,
    vote_in: PollVoteCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    # Check if user already voted
    voted = db.query(PollVote).filter(
        PollVote.poll_id == vote_in.poll_id,
        PollVote.user_id == current_user.id
    ).first()
    if voted:
        raise HTTPException(status_code=400, detail="You have already cast your vote in this poll")
        
    opt = db.query(PollOption).filter(PollOption.id == vote_in.option_id).first()
    if not opt:
        raise HTTPException(status_code=404, detail="Option not found")
        
    vote = PollVote(
        society_id=society_id,
        poll_id=vote_in.poll_id,
        option_id=vote_in.option_id,
        user_id=current_user.id
    )
    db.add(vote)
    opt.vote_count += 1
    db.commit()
    return {"status": "success", "message": "Vote recorded successfully"}
