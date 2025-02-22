import express from "express";
import {
  createTask,
  getTasksByFarm,
  getTaskById,
  updateTask,
  deleteTask,
  updateTaskStatus,
} from "../controllers/taskController.js";
const { checkAuthenticated } = require("../Middlewares/authentication.js");

const router = express.Router();

// Routes for task management
router.post("/", checkAuthenticated, createTask); // Create a new task
router.get("/farm/:farmId", checkAuthenticated, getTasksByFarm); // Get all tasks for a specific farm
router.get("/:taskId", checkAuthenticated, getTaskById); // Get a task by ID
router.put("/:taskId", checkAuthenticated, updateTask); // Update task details
router.delete("/:taskId", checkAuthenticated, deleteTask); // Delete a task

// Update task status (Pending → Completed)
router.patch("/:taskId/status", protect, updateTaskStatus);

export default router;
