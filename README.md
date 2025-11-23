# Portify – Portfolio Builder API 💻

<div align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express">
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB">
  <img src="https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white" alt="Mongoose">
  <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
</div>

![Current Progress Screenshot](./images/portify1.PNG)
![Current Progress Screenshot](./images/portify2.PNG)

---

## Current Implementation Status

**✅ Completed Features**

* Basic Node.js + Express server setup
* MongoDB connection using Mongoose
* Folder structure: `models`, `controllers`, `routes`, `middleware`, `config`


**⚙ Features In Progress**

* JWT authentication & middleware
* Profile CRUD (update profile, skills, experience, projects)
* Template settings & portfolio public endpoint
* Basic routes for `User` endpoints
* Created **User model** with register and login functionality
File uploads (profile picture, project images)

Portfolio generation endpoint (/portfolio/:username)

Admin panel (view all users, manage accounts)

Getting Started
Prerequisites

Node.js v18+

MongoDB (Atlas recommended)

Git & GitHub account

Installation

Clone the repository

git clone https://github.com/khubaibjimoh/portify-backend.git
cd portify-backend


Install dependencies

npm install


Set up environment variables

cp .env.example .env
# Edit .env with your MongoDB credentials and JWT secret


Start the server

npm run dev

Folder Structure
src/
├── config/        # DB connection and environment setup
├── controllers/   # Request handlers for routes
├── middleware/    # Auth, error handling, logging, etc.
├── models/        # Mongoose models (User, Project, Template, etc.)
├── routes/        # API route definitions
├── utils/         # Helper functions
└── server.js      # App entry point

Team Collaboration Guide
Workflow Rules

Always create a new branch for your task:

git checkout -b feature/your-feature-name
# Example:
git checkout -b feature/user-auth


Commit frequently with clear messages:

git commit -m "feat: add user register endpoint with Mongoose"


Pull the latest changes before pushing:

git pull origin main


Test your code locally before opening a Pull Request (PR).

Request at least one team member review before merging.

Conflict Prevention

Communicate what you’re working on with the team.

Work on separate files whenever possible.

Sync daily:

git pull origin main


Resolve conflicts immediately if they appear.

Code Standards

Models (Mongoose)

Use PascalCase for model names

Define all relationships clearly in model files

Controllers

Always use async/await

Handle errors properly with try/catch

Environment

Never commit .env to GitHub

Use .env.example as a reference