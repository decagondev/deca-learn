-- Users Table
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP WITH TIME ZONE,
    profile_picture_url TEXT,
    total_xp INTEGER DEFAULT 0,
    current_level INTEGER DEFAULT 1
);

-- User Achievements Table
CREATE TABLE user_achievements (
    achievement_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(user_id),
    module_name VARCHAR(100) NOT NULL,
    achievement_type VARCHAR(50) NOT NULL, -- e.g., 'module_complete', 'challenge_solved'
    achieved_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    xp_earned INTEGER NOT NULL
);

-- Learning Modules Table
CREATE TABLE learning_modules (
    module_id SERIAL PRIMARY KEY,
    module_name VARCHAR(100) NOT NULL,
    module_category VARCHAR(50) NOT NULL, -- e.g., 'computer_architecture', 'os', 'compilation'
    description TEXT,
    difficulty_level INTEGER NOT NULL, -- 1-5 scale
    estimated_time_hours NUMERIC(5,2),
    is_active BOOLEAN DEFAULT TRUE
);

-- Module Progress Tracking
CREATE TABLE user_module_progress (
    progress_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(user_id),
    module_id INTEGER REFERENCES learning_modules(module_id),
    started_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    completed_at TIMESTAMP WITH TIME ZONE,
    current_section VARCHAR(100),
    progress_percentage NUMERIC(5,2) DEFAULT 0,
    UNIQUE(user_id, module_id)
);

-- Interactive Challenges Table
CREATE TABLE challenges (
    challenge_id SERIAL PRIMARY KEY,
    module_id INTEGER REFERENCES learning_modules(module_id),
    challenge_name VARCHAR(100) NOT NULL,
    description TEXT,
    difficulty INTEGER NOT NULL, -- 1-5 scale
    points_reward INTEGER NOT NULL,
    type VARCHAR(50) NOT NULL, -- e.g., 'binary_analysis', 'buffer_overflow', 'ctf'
    solution_method TEXT, -- Encrypted or hashed solution details
    is_active BOOLEAN DEFAULT TRUE
);

-- User Challenge Attempts
CREATE TABLE challenge_attempts (
    attempt_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(user_id),
    challenge_id INTEGER REFERENCES challenges(challenge_id),
    attempted_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    is_successful BOOLEAN DEFAULT FALSE,
    time_taken INTERVAL,
    submission_details JSONB
);

-- Leaderboard Table
CREATE TABLE leaderboard (
    leaderboard_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(user_id),
    total_xp INTEGER NOT NULL,
    total_challenges_solved INTEGER DEFAULT 0,
    rank INTEGER,
    last_updated TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Resources and References Table
CREATE TABLE learning_resources (
    resource_id SERIAL PRIMARY KEY,
    module_id INTEGER REFERENCES learning_modules(module_id),
    title VARCHAR(200) NOT NULL,
    resource_type VARCHAR(50) NOT NULL, -- 'video', 'article', 'tutorial', 'documentation'
    url TEXT,
    description TEXT,
    difficulty_level INTEGER NOT NULL
);

-- Notifications Table
CREATE TABLE user_notifications (
    notification_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(user_id),
    message TEXT NOT NULL,
    notification_type VARCHAR(50) NOT NULL, -- 'achievement', 'module_unlock', 'challenge_available'
    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for performance
CREATE INDEX idx_user_achievements ON user_achievements(user_id);
CREATE INDEX idx_user_module_progress ON user_module_progress(user_id);
CREATE INDEX idx_challenge_attempts ON challenge_attempts(user_id);
CREATE INDEX idx_leaderboard_xp ON leaderboard(total_xp DESC);
