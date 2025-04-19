# Book Search Engine

A full-stack MERN application that allows users to search for books using the Google Books API, save their favorite books, and manage their collection. The app uses a React front end, a Node.js/Express.js/Apollo Server backend, and a MongoDB database. Authentication is handled with JWT.

## Features

- Search for books via the Google Books API
- User authentication (signup/login) with JWT
- Save and remove books to a personal collection
- Responsive UI with React and Bootstrap
- GraphQL API with Apollo Server

## Technologies Used

- MongoDB & Mongoose
- Express.js
- React.js
- Node.js
- Apollo Server & GraphQL
- JWT Authentication
- Bootstrap

## Installation

1. Clone the repository:
   ```
   git clone git@github.com:pingJustin/mernBookSearch.git
   cd mernBookSearch
   ```

2. Install dependencies for both client and server:
   ```
   npm install
   ```

3. Create a `.env` file in the root or set the following environment variable:
   ```
   MONGODB_URI=<your-mongodb-connection-string>
   ```
   If not set, the app defaults to a local MongoDB instance.

4. To run locally in development:
   ```
   cd client
   npm start
   ```
   In a separate terminal:
   ```
   cd server
   npm run watch
   ```

## Deployment

This app is ready to deploy on [Render](https://render.com):

- **Build Command:**  
  `npm run build`
- **Start Command:**  
  `npm start`
- **Environment Variables:**  
  - `MONGODB_URI` (your MongoDB Atlas or Render-provided connection string)
  - (Optional) `NODE_OPTIONS=--openssl-legacy-provider` if you encounter build errors

The server will serve the built React client in production.

[Live Demo on Render](https://mernbooksearch-emrb.onrender.com)

## Demo

![](./client/public/demo.gif)


