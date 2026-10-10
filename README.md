# Tech Quiz Master

A full-stack MERN quiz application where users sign up, take multiple-choice quizzes on popular technologies, and track their results over time.

**Live demo:** https://vercel.com/neelima-kancharanas-projects/tech-quiz-master/8gQWaTZYXKKPs8wtdcgQvmv6UVnm

> Note: the backend runs on a free Render plan, so the first request after a period of inactivity can take up to a minute while the server wakes up.

## Screenshots

<!-- Add 2-3 screenshots to a /screenshots folder and update the paths below -->
| Quiz | Results |
|------|---------|
| ![Quiz](/home/rgukt/Pictures/Screenshot from 2026-10-10 11-49-41.png) | ![Results](/home/rgukt/Pictures/Screenshot from 2026-10-10 11-50-22.png) |

## Features

- User registration and login with JWT authentication
- Passwords hashed with bcrypt
- 10 technologies: HTML, CSS, JavaScript, React, Node.js, MongoDB, Java, Python, C++, Bootstrap
- 3 difficulty levels: Basic, Intermediate, Advanced
- Instant answer feedback and a score summary at the end of each quiz
- Quiz results saved to MongoDB for each user
- "My Result" page with score percentage, performance badges (Excellent, Good, Average, Needs Work) and a filter by technology
- Protected routes and protected API endpoints
- Responsive UI

## Tech Stack

**Frontend:** React (Vite), React Router, Axios, Tailwind CSS, React Toastify, Lucide Icons

**Backend:** Node.js, Express, MongoDB with Mongoose, JSON Web Tokens, bcryptjs, validator, dotenv, CORS

**Deployment:** Vercel (frontend), Render (backend), MongoDB Atlas (database)

## API Endpoints

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/api/auth/register` | No | Create a new account |
| POST | `/api/auth/login` | No | Log in and receive a JWT |
| POST | `/api/results` | Yes | Save a quiz result |
| GET | `/api/results?technology=react` | Yes | List the logged-in user's results (optional filter) |

## Project Structure

```
Quiz_mern/
├── backend/
│   ├── config/         # database connection
│   ├── controllers/    # user and result logic
│   ├── middleware/     # JWT auth middleware
│   ├── models/         # Mongoose models
│   ├── routes/         # API routes
│   └── server.js
└── frontend/
    └── src/
        ├── assets/     # styles and quiz questions
        ├── components/ # Login, Signup, Navbar, Sidebar (quiz), MyResult
        └── pages/
```

## Running Locally

### Prerequisites
- Node.js 18 or higher
- A MongoDB Atlas database (or a local MongoDB)

### 1. Clone the repository
```bash
git clone https://github.com/NeelimaKancharana/tech-quiz-master.git
cd tech-quiz-master
```

### 2. Set up the backend
```bash
cd backend
npm install
```

Create a `backend/.env` file:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_long_random_secret
```

Start the server (runs on port 4000):
```bash
npm start
```

### 3. Set up the frontend
```bash
cd frontend
npm install
npm run dev
```

The app opens at `http://localhost:5173`. By default it calls the backend at `http://localhost:4000`. To use a different backend, create `frontend/.env`:
```
VITE_API_URL=https://tech-quiz-master-f081.onrender.com
```

## What I Learned

- Building a REST API with Express and connecting it to MongoDB with Mongoose
- Implementing JWT authentication and protecting routes on both the client and the server
- Debugging an authentication bug caused by mismatched JWT secrets and a typo in the Authorization header
- Keeping secrets out of source code with environment variables
- Deploying a full-stack app with Vercel, Render and MongoDB Atlas

## Acknowledgements

Built while following a MERN quiz tutorial by Hexagonal Digital Services, then extended and debugged on my own.

## Author

**Neelima Kancharana** - [GitHub](https://github.com/NeelimaKancharana)