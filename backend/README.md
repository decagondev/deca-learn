# Learning Platform API

This project is a backend API for a Learning Platform. It is built using **FastAPI** and uses **SQLAlchemy** for ORM with a **PostgreSQL** database. The API provides endpoints to manage users, learning modules, achievements, challenges, and more.

## Features

- **User management**: CRUD operations for users, including user registration, updates, and deletion.
- **Learning Modules**: Create, update, retrieve, and delete learning modules.
- **User Achievements**: Track user achievements for completing modules or challenges.
- **Challenges and Progress**: Manage interactive challenges and track user progress.
- **Leaderboard**: Keep track of user rankings based on XP and challenges solved.
- **Learning Resources**: Manage learning resources related to modules.
- **Notifications**: Send notifications to users about achievements, module unlocks, or challenges.

## Requirements

- **Python 3.8+**
- **PostgreSQL**: Ensure that PostgreSQL is installed and running on your local machine or on a Docker container.
- **Docker** (optional, for local development using Docker)

## Installation

### 1. Clone the repository
```bash
git clone https://github.com/your-username/learning-platform-api.git
cd learning-platform-api
```

### 2. Create Virtual Environment
```bash
python -m venv venv
source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
```

### 3. Install dependencies
```bash
pip install -r requirements.txt
```

### 4. Set environment variables
Create a `.env` file in the project root directory and add your database connection URL. Example:
```bash
DATABASE_URL=postgresql://user:password@localhost/db_name
```

### 5. Run the Application
```bash
uvicorn main:app --reload
```
The API will be available at `http://127.0.0.1:8000`. The Swagger UI documentation will be available at `http://127.0.0.1:8000/docs`.




