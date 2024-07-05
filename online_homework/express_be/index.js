const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const PORT = 11451;
const DB_URL = "mongodb://localhost:27017/SE_2024";
const app = express();
app.use(cors());
app.use(express.json());


mongoose
  .connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
    console.log("Server is running on port: " + PORT);
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });
