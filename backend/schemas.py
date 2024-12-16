from pydantic import BaseModel, Field
from typing import Optional, List
from datetime import datetime

class UserBase(BaseModel):
    username: str
    email: str
    profile_picture_url: Optional[str] = None

class UserCreate(UserBase):
    password_hash: str

class UserResponse(UserBase):
    user_id: int
    total_xp: int
    current_level: int
    created_at: datetime
    last_login: Optional[datetime]

    class Config:
        orm_mode = True

class UserAchievementBase(BaseModel):
    module_name: str
    achievement_type: str
    xp_earned: int

class UserAchievementCreate(UserAchievementBase):
    pass

class UserAchievementResponse(UserAchievementBase):
    achievement_id: int
    user_id: int
    achieved_at: datetime

    class Config:
        orm_mode = True

class LearningModuleBase(BaseModel):
    module_name: str
    module_category: str
    description: Optional[str] = None
    difficulty_level: int
    estimated_time_hours: Optional[float] = None

class LearningModuleCreate(LearningModuleBase):
    pass

class LearningModuleResponse(LearningModuleBase):
    module_id: int
    is_active: bool

    class Config:
        orm_mode = True

class UserModuleProgressBase(BaseModel):
    current_section: Optional[str] = None
    progress_percentage: Optional[float] = 0

class UserModuleProgressCreate(UserModuleProgressBase):
    pass

class UserModuleProgressResponse(UserModuleProgressBase):
    progress_id: int
    user_id: int
    module_id: int
    started_at: datetime
    completed_at: Optional[datetime] = None

    class Config:
        orm_mode = True

class ChallengeBase(BaseModel):
    challenge_name: str
    description: Optional[str] = None
    difficulty: int
    points_reward: int
    type: str
    solution_method: Optional[str] = None

class ChallengeCreate(ChallengeBase):
    pass

class ChallengeResponse(ChallengeBase):
    challenge_id: int
    module_id: int
    is_active: bool

    class Config:
        orm_mode = True

class ChallengeAttemptBase(BaseModel):
    is_successful: bool
    time_taken: Optional[str] = None
    submission_details: Optional[dict] = None

class ChallengeAttemptCreate(ChallengeAttemptBase):
    pass

class ChallengeAttemptResponse(ChallengeAttemptBase):
    attempt_id: int
    user_id: int
    challenge_id: int
    attempted_at: datetime

    class Config:
        orm_mode = True

class LeaderboardBase(BaseModel):
    total_xp: int
    total_challenges_solved: Optional[int] = 0
    rank: Optional[int] = None

class LeaderboardResponse(LeaderboardBase):
    leaderboard_id: int
    user_id: int
    last_updated: datetime

    class Config:
        orm_mode = True

class LearningResourceBase(BaseModel):
    title: str
    resource_type: str
    url: Optional[str] = None
    description: Optional[str] = None
    difficulty_level: int

class LearningResourceCreate(LearningResourceBase):
    pass

class LearningResourceResponse(LearningResourceBase):
    resource_id: int
    module_id: int

    class Config:
        orm_mode = True

class UserNotificationBase(BaseModel):
    message: str
    notification_type: str
    is_read: Optional[bool] = False

class UserNotificationCreate(UserNotificationBase):
    pass

class UserNotificationResponse(UserNotificationBase):
    notification_id: int
    user_id: int
    created_at: datetime

    class Config:
        orm_mode = True
