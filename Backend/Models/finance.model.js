const mongoose = require("mongoose");
const financeSchema = new mongoose.Schema(
  {
    farm: { type: mongoose.Schema.Types.ObjectId, ref: "Farm", required: true },
    transactions: [
      {
        type: { type: String, enum: ["Expense", "Revenue"], required: true },
        amount: { type: Number, required: true },
        description: { type: String },
        date: { type: Date, default: Date.now },
      },
    ],
    totalExpenses: { type: Number, default: 0 },
    totalRevenue: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Finance = mongoose.model("Finance", financeSchema);

module.exports = Finance;
