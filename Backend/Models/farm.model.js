const mongoose = require("mongoose");

const farmSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    size: { type: String },
    waterContent: { type: String, required: true },
    soilType: { type: String, required: true },
    fertilizer: [
      {
        name: { type: String },
        quantity: { type: Number },
        addedAt: { type: Date, default: Date.now },
      },
    ],
    pestisides: [
      {
        name: { type: String },
        quantity: { type: Number },
        addedAt: { type: Date, default: Date.now },
      },
    ],
    crops: [{ type: mongoose.Schema.Types.ObjectId, ref: "Crop" }],
    finances: { type: mongoose.Schema.Types.ObjectId, ref: "Finance" },
  },
  { timestamps: true }
);

const Farm = mongoose.model("Farm", farmSchema);

module.exports = Farm;
