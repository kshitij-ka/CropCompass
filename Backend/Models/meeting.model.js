const mongoose = require("mongoose");

const meetingSchema = new mongoose.Schema(
  {
    meetingDate: {
      type: Date,
      required: true,
    },
    meetingTime: {
      type: String,
      required: true,
    },
    mentorName: {
      type: String,
      required: true,
    },
    mentiName: {
      type: String,
      required: true,
    },
    mentorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    mentiId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      default: "Pending",
    },
    amount: {
      type: Number,
      required: true,
    },
    paymentStatus: {
      type: "Status",
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

const Meeting = mongoose.model("Meeting", meetingSchema);

module.exports = Meeting;
