const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const userRoute = require("./Routes/user.routes.js");
const farmRoute = require("./Routes/farm.routes.js");
const cropRoute = require("./Routes/crop.routes.js");
const financeRoute = require("./Routes/finance.routes.js");
const taskRoute = require("./Routes/task.routes.js");
const { checkAuthenticated } = require("./Middlewares/authentication.js");
const dotenv = require("dotenv");
const { run } = require("./Utils/model.js");

dotenv.config({
  path: "./.env",
});

const app = express();

const corsOptions = {
  origin: process.env.FRONTEND_URI,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

app.get("/", (req, res) => {
  return res.send("Server is running...");
});

app.use("/api/v1", userRoute);

app.use("/api/v1/farm", farmRoute);

app.use("/api/v1/crop", cropRoute);

app.use("/api/v1/finance", financeRoute);

app.use("/api/v1/task", taskRoute);

module.exports = app;
