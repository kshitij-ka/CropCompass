import Task from "../models/taskModel.js";
import Farm from "../models/farmModel.js";
import Crop from "../models/cropModel.js";

// Create a new task
export const createTask = async (req, res) => {
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
export const getTasksByFarm = async (req, res) => {
  try {
    const tasks = await Task.find({ farm: req.params.farmId }).populate("crop");

    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single task by ID
export const getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.taskId).populate("farm crop");

    if (!task) return res.status(404).json({ message: "Task not found" });

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update task details
export const updateTask = async (req, res) => {
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
export const deleteTask = async (req, res) => {
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
export const updateTaskStatus = async (req, res) => {
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
