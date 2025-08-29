// app.js
import express from "express";
import cors from "cors";
import recipeRoutes from "./routes/recipeRoutes.js";
import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON request bodies

// Routes
app.get("/", (req, res) => {
  res.send("API is running...");
});
app.use("/api/recipes", recipeRoutes);

// Error Handling Middlewares
app.use(notFound);
app.use(errorHandler);

export default app;
