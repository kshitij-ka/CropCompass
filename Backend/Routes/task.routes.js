const { checkAuthenticated } = require("../Middlewares/authentication.js");

const express = require("express");
const {
  createTask,
  getTasksByFarm,
  getTaskById,
  updateTask,
  deleteTask,
  updateTaskStatus,
} = require("../Controllers/task.controller.js");

const router = express.Router();

// Routes for task management
router.post("/", checkAuthenticated, createTask); // Create a new task
router.get("/farm/:farmId", checkAuthenticated, getTasksByFarm); // Get all tasks for a specific farm
router.get("/:taskId", checkAuthenticated, getTaskById); // Get a task by ID
router.put("/:taskId", checkAuthenticated, updateTask); // Update task details
router.delete("/:taskId", checkAuthenticated, deleteTask); // Delete a task

// Update task status (Pending → Completed)
router.patch("/:taskId/status", checkAuthenticated, updateTaskStatus);

module.exports = router;
