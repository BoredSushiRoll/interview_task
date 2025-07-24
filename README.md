# Interview Task

## Project Overview

This is a full-stack login system built from scratch using React (with Vite) on the frontend and Node.js + Express on the backend. The goal was to simulate a basic, secure authentication flow using JWT tokens. When a user logs in with valid credentials, they get a token they can use to access protected routes like `/items`. That route is locked behind middleware that checks for a valid, expiring token (1 hour) before returning data. 
Everything was tested with Postman to make sure authentication, token handling, and access control actually work the way they should.

The frontend also includes a simple UI for creating, editing, and deleting items of which all are protected operations requiring prior login.

---

## Technologies Used

### Frontend
- React (with Vite)
- Axios
- Cypress (for UI test automation)

### Backend
- Node.js + Express
- MongoDB + Mongoose
- JWT for authentication
- CORS for cross-origin access

### Testing Tools
- Cypress (UI tests)
- Postman (API tests)
- Newman (optional CLI for API automation)

---

## Setup Instructions

> Setup should take no more than 1-2 minutes.

1. Clone the repo:
   git clone https://github.com/BoredSushiRoll/interview_task.git
   cd interview_task

2. Install server dependencies:
   cd server
   npm install  

3. Create a .env file in /server:
    JWT_SECRET=secret_token
    JWT_EXPIRES_IN=1h
    MONGO_URI=mongodb+srv://<your_mongoDB_link>
    PORT=3001

4. Start backend server:
    npm run dev

5. Open a new terminal, install frontend dependencies:
    cd client
    npm install

6. Start fontend app:
    npm run dev
    (Server runs on: http://localhost:3001)
    (Client runs on: http://localhost:5173)


## How to Run the Tests
1. UI Automation – Cypress

Cypress tests are located in:
    /client/cypress/e2e

To run them:
    cd client
    npx cypress open

UI Test Coverage:

    - Login (valid + invalid credentials)

    - Create item

    - Edit item

    - Delete item

    - Assert presence of data after each action

2. API Automation – Postman

API requests are saved in:

    /Postman Scripts and Snippets/Postman Collection Tests/API_TEST_SCRIPTS.json

To run them manually:

    Open Postman

    Import the collection file

    Use your environment and test manually

To run with Newman (Postman CLI):

    newman run postman/API_TEST_SCRIPTS.json

API Test Coverage:

    - POST /login (200 + 401 invalid)

    - GET /items (with and without token)

    - POST /items (valid and invalid body)

    - PUT /items/:id (valid ID + broken ID)

    - DELETE /items/:id (existing ID + garbage ID)


Folder Structure (Simplified)

    /client                         # Frontend code (React + Cypress)
    /server                         # Backend code (Node + Express + Mongo)
    /Postman Scripts and Snippets   # Postman collection + screenshots
    /Tech Document                  # Location of technical documentation PDF
    /README.md                      # You're looking at it

Known Limitations
    - No user registration flow as login is hardcoded to admin / admin

    - UI is purely functional (no styling)

    - No advanced DB validations beyond schema

    - Requires .env for secrets and DB config 

## Final Note

    This was built from absolute zero experience in React, Node, Mongo, or JWT and it still works top to bottom. Auth is secured, routes are protected, and both UI and API are covered by automated tests. Everything is in place and can be extended from here. For more details refer to the technical documentation PDF present in "/Tech Document"