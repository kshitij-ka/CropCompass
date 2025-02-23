const Task = require("../Models/task.model.js");
const Farm = require("../Models/farm.model.js");
const Crop = require("../Models/crop.model.js");

// Create a new task
const createTask = async (req, res) => {
  try {
    const { farm, crop, taskType, description, assignedDate, status } =
      req.body;

    // Validate farm existence
    const existingFarm = await Farm.findById(farm);
    if (!existingFarm)
      return res.status(404).json({ message: "Farm not found" });

    // Validate crop if provided
    if (crop) {
      const existingCrop = await Crop.findById(crop);
      if (!existingCrop)
        return res.status(404).json({ message: "Crop not found" });
    }

    const task = new Task({
      farm,
      crop,
      taskType,
      description,
      assignedDate,
      status,
    });

    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all tasks for a specific farm
const getTasksByFarm = async (req, res) => {
  try {
    const tasks = await Task.find({ farm: req.params.farmId }).populate("crop");

    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single task by ID
const getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.taskId).populate("farm crop");

    if (!task) return res.status(404).json({ message: "Task not found" });

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update task details
const updateTask = async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.taskId,
      req.body,
      { new: true }
    );

    if (!updatedTask)
      return res.status(404).json({ message: "Task not found" });

    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a task
const deleteTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.taskId);

    if (!task) return res.status(404).json({ message: "Task not found" });

    await task.deleteOne();

    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update task status (Pending → Completed)
const updateTaskStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const task = await Task.findById(req.params.taskId);
    if (!task) return res.status(404).json({ message: "Task not found" });

    task.status = status;
    await task.save();

    res.status(200).json({ message: "Task status updated", task });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createTask,
  getTasksByFarm,
  getTaskById,
  updateTask,
  deleteTask,
  updateTaskStatus,
};
