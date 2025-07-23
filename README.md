# interview_task

Project Overview

This is a full-stack login system built from scratch using React (with Vite) on the frontend and Node.js + Express on the backend. The goal was to simulate a basic, secure authentication flow using JWT tokens. When a user logs in with valid credentials, they get a token they can use to access protected routes like /api/items. That route is locked behind middleware that checks for a valid, unexpired token before returning data. Everything was tested with Postman to make sure authentication, token handling, and access control actually work the way they should. 