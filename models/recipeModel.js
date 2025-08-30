// models/recipeModel.js
import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Recipe title is required"],
    trim: true,
  },
  ingredients: {
    type: [String],
    required: [true, "Ingredients are required"],
  },
  instructions: {
    type: String,
    required: [true, "Instructions are required"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Export the model
const Recipe = mongoose.model("Recipe", recipeSchema);
export default Recipe;


