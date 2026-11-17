# Create Post and Feed Web App

This is a small web app I built while learning backend development. It lets a user create a post with an image and caption, then view posts in a feed.

The project helped me connect a frontend to a backend and understand how data and uploaded files move through a web application. It is a basic learning project, but it gave me hands-on practice with tools and concepts I can build on.

## What I learned

- Building API routes with Node.js and Express.
- Connecting an application to MongoDB with Mongoose and saving post data.
- Handling image uploads in the backend and uploading images to ImageKit.
- Sending requests from a React frontend to a backend API.
- Testing API endpoints and request data with Postman.
- Using MongoDB Compass to connect to MongoDB and inspect the database and saved documents.
- Keeping credentials and other environment-specific settings in a local `.env` file rather than committing them to GitHub.

## Features

- Create a post with an image and caption.
- Upload images to ImageKit.
- Save post details in MongoDB.
- View saved posts in a feed.

## Tech used

- **Frontend:** React, Vite, Axios, React Router
- **Backend:** Node.js, Express, Multer
- **Database:** MongoDB with Mongoose
- **Image storage:** ImageKit
- **API testing:** Postman
- **Database inspection:** MongoDB Compass

## Run locally

You will need Node.js, MongoDB, and an ImageKit account.

1. Configure the backend environment:

   ```text
   cd Backend
   ```

   Copy `.env.example` to `.env`, then set `MONGO_URI` and `IMAGEKIT_PRIVATE_KEY` to your own values. Keep `.env` private; it is ignored by Git.

2. Install and start the backend:

   ```text
   npm install
   npm run dev
   ```

   The backend runs on `http://localhost:3000` by default.

3. In a separate terminal, install and start the frontend:

   ```text
   cd Frontend/complete-frontend-react
   npm install
   npm run dev
   ```

   Open the local URL printed by Vite. The frontend uses `http://localhost:3000` for the API by default. To use a different backend URL, set `VITE_API_URL` in the frontend environment.

## API routes

- `GET /posts` — returns saved posts.
- `POST /create-post` — creates a post using multipart form data with an `image` file and a `caption`.
