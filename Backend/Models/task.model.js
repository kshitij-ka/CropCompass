const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    farm: { type: mongoose.Schema.Types.ObjectId, ref: "Farm", required: true },
    crop: { type: mongoose.Schema.Types.ObjectId, ref: "Crop" },
    taskType: {
      type: String,
      enum: [
        "Sowing",
        "Watering",
        "Fertilization",
        "Pest Control",
        "Harvesting",
      ],
      required: true,
    },
    description: { type: String },
    assignedDate: { type: Date, required: true, default: Date.now },
    status: {
      type: String,
      enum: ["Pending", "Completed"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
