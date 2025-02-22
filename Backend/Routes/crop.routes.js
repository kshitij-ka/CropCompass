import express from "express";
import {
  createCrop,
  getCrops,
  getCropById,
  updateCrop,
  deleteCrop,
} from "../controllers/cropController.js";
import { checkAuthenticated } from "../Middlewares/authentication.js";

const router = express.Router();

// Routes for crop management
router.post("/", checkAuthenticated, createCrop); // Create a new crop
router.get("/", checkAuthenticated, getCrops); // Get all crops
router.get("/:cropId", checkAuthenticated, getCropById); // Get a crop by ID
router.put("/:cropId", checkAuthenticated, updateCrop); // Update crop details
router.delete("/:cropId", checkAuthenticated, deleteCrop); // Delete a crop

export default router;
