const mongoose = require("mongoose");

const cropSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    farm: { type: mongoose.Schema.Types.ObjectId, ref: "Farm", required: true },
    image: { type: String },
    plantedDate: { type: Date, required: true, default: Date.now() },
    harvestDate: { type: Date },
    growthStage: {
      type: String,
      enum: ["Planted", "Growing", "Ready to Harvest"],
      default: "Planted",
    },
    healthStatus: { type: String, default: "Healthy" },
  },
  { timestamps: true }
);

const Crop = mongoose.model("Crop", cropSchema);

module.exports = Crop;
