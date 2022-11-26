const dotenv = require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connectDB");
const Task = require("./models/taskModel");
const app = express();
const taskRoutes = require("./routes/taskRoute");
const cors = require("cors");

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://mern-task-app-br18.onrender.com",
    ],
  })
);
app.use("/api/tasks", taskRoutes);

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log("Server is running now on " + PORT);
    });
  } catch (error) {
    console.log(error);
  }
};
startServer();
