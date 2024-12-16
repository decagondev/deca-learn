from fastapi import FastAPI, HTTPException, Depends
from sqlalchemy.orm import Session
from database import SessionLocal, engine
from models import Base, User, UserAchievement, LearningModule, UserModuleProgress, Challenge, ChallengeAttempt, Leaderboard, LearningResource, UserNotification
from schemas import (
    UserCreate, UserResponse,
    UserAchievementCreate, UserAchievementResponse,
    LearningModuleCreate, LearningModuleResponse,
    UserModuleProgressCreate, UserModuleProgressResponse,
    ChallengeCreate, ChallengeResponse,
    ChallengeAttemptCreate, ChallengeAttemptResponse,
    LeaderboardResponse,
    LearningResourceCreate, LearningResourceResponse,
    UserNotificationCreate, UserNotificationResponse
)

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Learning Platform API", description="API for managing users, modules, and challenges", version="1.0.0")

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.post("/users/", response_model=UserResponse)
def create_user(user: UserCreate, db: Session = Depends(get_db)):
    db_user = db.query(User).filter((User.email == user.email) | (User.username == user.username)).first()
    if db_user:
        raise HTTPException(status_code=400, detail="Email or username already registered")
    new_user = User(**user.dict())
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user


@app.get("/users/{user_id}", response_model=UserResponse)
def get_user(user_id: int, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.user_id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user


@app.post("/user-achievements/", response_model=UserAchievementResponse)
def create_user_achievement(achievement: UserAchievementCreate, db: Session = Depends(get_db)):
    new_achievement = UserAchievement(**achievement.dict())
    db.add(new_achievement)
    db.commit()
    db.refresh(new_achievement)
    return new_achievement


@app.get("/user-achievements/{achievement_id}", response_model=UserAchievementResponse)
def get_user_achievement(achievement_id: int, db: Session = Depends(get_db)):
    achievement = db.query(UserAchievement).filter(UserAchievement.achievement_id == achievement_id).first()
    if not achievement:
        raise HTTPException(status_code=404, detail="Achievement not found")
    return achievement


@app.post("/learning-modules/", response_model=LearningModuleResponse)
def create_learning_module(module: LearningModuleCreate, db: Session = Depends(get_db)):
    new_module = LearningModule(**module.dict())
    db.add(new_module)
    db.commit()
    db.refresh(new_module)
    return new_module


@app.get("/learning-modules/{module_id}", response_model=LearningModuleResponse)
def get_learning_module(module_id: int, db: Session = Depends(get_db)):
    module = db.query(LearningModule).filter(LearningModule.module_id == module_id).first()
    if not module:
        raise HTTPException(status_code=404, detail="Learning module not found")
    return module


@app.post("/user-module-progress/", response_model=UserModuleProgressResponse)
def create_user_module_progress(progress: UserModuleProgressCreate, db: Session = Depends(get_db)):
    new_progress = UserModuleProgress(**progress.dict())
    db.add(new_progress)
    db.commit()
    db.refresh(new_progress)
    return new_progress


@app.get("/user-module-progress/{progress_id}", response_model=UserModuleProgressResponse)
def get_user_module_progress(progress_id: int, db: Session = Depends(get_db)):
    progress = db.query(UserModuleProgress).filter(UserModuleProgress.progress_id == progress_id).first()
    if not progress:
        raise HTTPException(status_code=404, detail="Progress not found")
    return progress


@app.post("/challenges/", response_model=ChallengeResponse)
def create_challenge(challenge: ChallengeCreate, db: Session = Depends(get_db)):
    new_challenge = Challenge(**challenge.dict())
    db.add(new_challenge)
    db.commit()
    db.refresh(new_challenge)
    return new_challenge


@app.get("/challenges/{challenge_id}", response_model=ChallengeResponse)
def get_challenge(challenge_id: int, db: Session = Depends(get_db)):
    challenge = db.query(Challenge).filter(Challenge.challenge_id == challenge_id).first()
    if not challenge:
        raise HTTPException(status_code=404, detail="Challenge not found")
    return challenge


@app.post("/challenge-attempts/", response_model=ChallengeAttemptResponse)
def create_challenge_attempt(attempt: ChallengeAttemptCreate, db: Session = Depends(get_db)):
    new_attempt = ChallengeAttempt(**attempt.dict())
    db.add(new_attempt)
    db.commit()
    db.refresh(new_attempt)
    return new_attempt


@app.get("/challenge-attempts/{attempt_id}", response_model=ChallengeAttemptResponse)
def get_challenge_attempt(attempt_id: int, db: Session = Depends(get_db)):
    attempt = db.query(ChallengeAttempt).filter(ChallengeAttempt.attempt_id == attempt_id).first()
    if not attempt:
        raise HTTPException(status_code=404, detail="Attempt not found")
    return attempt


@app.get("/leaderboard/", response_model=List[LeaderboardResponse])
def get_leaderboard(db: Session = Depends(get_db)):
    leaderboard = db.query(Leaderboard).order_by(Leaderboard.total_xp.desc()).all()
    return leaderboard


@app.post("/learning-resources/", response_model=LearningResourceResponse)
def create_learning_resource(resource: LearningResourceCreate, db: Session = Depends(get_db)):
    new_resource = LearningResource(**resource.dict())
    db.add(new_resource)
    db.commit()
    db.refresh(new_resource)
    return new_resource


@app.get("/learning-resources/{resource_id}", response_model=LearningResourceResponse)
def get_learning_resource(resource_id: int, db: Session = Depends(get_db)):
    resource = db.query(LearningResource).filter(LearningResource.resource_id == resource_id).first()
    if not resource:
        raise HTTPException(status_code=404, detail="Resource not found")
    return resource


@app.post("/user-notifications/", response_model=UserNotificationResponse)
def create_user_notification(notification: UserNotificationCreate, db: Session = Depends(get_db)):
    new_notification = UserNotification(**notification.dict())
    db.add(new_notification)
    db.commit()
    db.refresh(new_notification)
    return new_notification


@app.get("/user-notifications/{notification_id}", response_model=UserNotificationResponse)
def get_user_notification(notification_id: int, db: Session = Depends(get_db)):
    notification = db.query(UserNotification).filter(UserNotification.notification_id == notification_id).first()
    if not notification:
        raise HTTPException(status_code=404, detail="Notification not found")
    return notification
