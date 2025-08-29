import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import recipeRoutes from "./routes/recipeRoutes.js";
import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";
import app from "./app.js";

dotenv.config();
connectDB();

const app = express();

// Enable CORS
app.use(cors());

// Middleware to parse JSON request body
app.use(express.json());

// Routes
app.use("/api/recipes", recipeRoutes);

// Base route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Error Handling Middlewares (must come after routes)
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

