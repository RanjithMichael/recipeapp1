# Recipe CRUD API

A RESTful API for managing recipes, built with **Node.js**, **Express.js**, and **MongoDB** (via Mongoose). This project follows the **MVC architecture** and is fully documented using **Postman**.

---

## Live Demo

Render Deployment: [https://your-render-url.onrender.com](#)

Postman Collection: [Link to Postman](#)

---

##  Folder Structure (MVC Pattern)
recipe-app1/
├── config/ # MongoDB connection
├── controllers/ # Logic for handling recipe routes
├── models/ # Mongoose schema for Recipe
├── routes/ # All recipe API endpoints
├── .env # Environment variables
├── server.js # Main app entry point
├── README.md

## API Endpoints

| Method | Endpoint            | Description             |
|--------|---------------------|-------------------------|
| POST   | `/api/recipes`      | Create a new recipe     |
| GET    | `/api/recipes`      | Get all recipes         |
| GET    | `/api/recipes/:id`  | Get a recipe by ID      |
| PUT    | `/api/recipes/:id`  | Update recipe by ID     |
| DELETE | `/api/recipes/:id`  | Delete recipe by ID     |

> Use Postman to test each endpoint. Make sure to send `application/json` in the request body for POST/PUT.

## Technologies Used

- Node.js
- Express.js
- MongoDB & Mongoose
- dotenv
- Postman

---
