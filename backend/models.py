from sqlalchemy import Column, Integer, String, Text, Boolean, ForeignKey, TIMESTAMP, Numeric, JSON
from sqlalchemy.orm import relationship
from database import Base

class User(Base):
    __tablename__ = "users"
    user_id = Column(Integer, primary_key=True, index=True)
    username = Column(String(50), unique=True, nullable=False)
    email = Column(String(100), unique=True, nullable=False)
    password_hash = Column(String(255), nullable=False)
    created_at = Column(TIMESTAMP, nullable=False)
    last_login = Column(TIMESTAMP)
    profile_picture_url = Column(Text)
    total_xp = Column(Integer, default=0)
    current_level = Column(Integer, default=1)

    achievements = relationship("UserAchievement", back_populates="user")
    module_progress = relationship("UserModuleProgress", back_populates="user")
    notifications = relationship("UserNotification", back_populates="user")
    leaderboard = relationship("Leaderboard", uselist=False, back_populates="user")


class UserAchievement(Base):
    __tablename__ = "user_achievements"
    achievement_id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.user_id"), nullable=False)
    module_name = Column(String(100), nullable=False)
    achievement_type = Column(String(50), nullable=False)
    achieved_at = Column(TIMESTAMP, nullable=False)
    xp_earned = Column(Integer, nullable=False)

    user = relationship("User", back_populates="achievements")


class LearningModule(Base):
    __tablename__ = "learning_modules"
    module_id = Column(Integer, primary_key=True, index=True)
    module_name = Column(String(100), nullable=False)
    module_category = Column(String(50), nullable=False)
    description = Column(Text)
    difficulty_level = Column(Integer, nullable=False)
    estimated_time_hours = Column(Numeric(5, 2))
    is_active = Column(Boolean, default=True)

    progress = relationship("UserModuleProgress", back_populates="module")
    challenges = relationship("Challenge", back_populates="module")
    resources = relationship("LearningResource", back_populates="module")


class UserModuleProgress(Base):
    __tablename__ = "user_module_progress"
    progress_id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.user_id"), nullable=False)
    module_id = Column(Integer, ForeignKey("learning_modules.module_id"), nullable=False)
    started_at = Column(TIMESTAMP, nullable=False)
    completed_at = Column(TIMESTAMP)
    current_section = Column(String(100))
    progress_percentage = Column(Numeric(5, 2), default=0)

    user = relationship("User", back_populates="module_progress")
    module = relationship("LearningModule", back_populates="progress")


class Challenge(Base):
    __tablename__ = "challenges"
    challenge_id = Column(Integer, primary_key=True, index=True)
    module_id = Column(Integer, ForeignKey("learning_modules.module_id"), nullable=False)
    challenge_name = Column(String(100), nullable=False)
    description = Column(Text)
    difficulty = Column(Integer, nullable=False)
    points_reward = Column(Integer, nullable=False)
    type = Column(String(50), nullable=False)
    solution_method = Column(Text)
    is_active = Column(Boolean, default=True)

    module = relationship("LearningModule", back_populates="challenges")
    attempts = relationship("ChallengeAttempt", back_populates="challenge")


class ChallengeAttempt(Base):
    __tablename__ = "challenge_attempts"
    attempt_id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.user_id"), nullable=False)
    challenge_id = Column(Integer, ForeignKey("challenges.challenge_id"), nullable=False)
    attempted_at = Column(TIMESTAMP, nullable=False)
    is_successful = Column(Boolean, default=False)
    time_taken = Column(Text)
    submission_details = Column(JSON)

    challenge = relationship("Challenge", back_populates="attempts")


class Leaderboard(Base):
    __tablename__ = "leaderboard"
    leaderboard_id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.user_id"), nullable=False)
    total_xp = Column(Integer, nullable=False)
    total_challenges_solved = Column(Integer, default=0)
    rank = Column(Integer)
    last_updated = Column(TIMESTAMP, nullable=False)

    user = relationship("User", back_populates="leaderboard")


class LearningResource(Base):
    __tablename__ = "learning_resources"
    resource_id = Column(Integer, primary_key=True, index=True)
    module_id = Column(Integer, ForeignKey("learning_modules.module_id"), nullable=False)
    title = Column(String(200), nullable=False)
    resource_type = Column(String(50), nullable=False)
    url = Column(Text)
    description = Column(Text)
    difficulty_level = Column(Integer, nullable=False)

    module = relationship("LearningModule", back_populates="resources")


class UserNotification(Base):
    __tablename__ = "user_notifications"
    notification_id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.user_id"), nullable=False)
    message = Column(Text, nullable=False)
    notification_type = Column(String(50), nullable=False)
    is_read = Column(Boolean, default=False)
    created_at = Column(TIMESTAMP, nullable=False)

    user = relationship("User", back_populates="notifications")
