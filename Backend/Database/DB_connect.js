const mongoose = require("mongoose");
const catchAsyncErrors = require("../Middlewares/catchAsyncErrors.js");

const DB_connect = catchAsyncErrors(async () => {
  try {
    const dbUri = `${process.env.MONGODB_URI}/${process.env.DATABASE_NAME}?authSource=admin`;
    const connectionInstance = await mongoose.connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    if (!connectionInstance) {
      console.log("MongoDB connection failed");
    } else {
      console.log(
        "MongoDB connected Successfully to:",
        connectionInstance.connection.host
      );
    }
  } catch (error) {
    console.log("MongoDB connection failed due to some error :", error);
  }
});

module.exports = DB_connect;
