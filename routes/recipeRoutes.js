// routes/recipeRoutes.js
import express from "express";
import {
  createRecipe,
  getAllRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
} from "../controllers/recipeController.js";

const router = express.Router();

// Create a recipe
router.post("/", createRecipe);

// Get all recipes
router.get("/", getAllRecipes);

// Get single recipe by ID
router.get("/:id", getRecipeById);

// Update recipe
router.put("/:id", updateRecipe);

// Delete recipe
router.delete("/:id", deleteRecipe);

export default router;

