import express from "express";

import mongoose from "mongoose";
import cors from "cors";
import studentRoutes from "./routes/studentRoutes.js";

const app = express();

mongoose.set("strictQuery", true);
const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://MERN:ethnus@cluster0.lonmi8g.mongodb.net/MERN"
    );
    console.log("mongoose is connected");
  } catch (error) {
    console.log("error in connecting to MongoDB");
    console.log(error);
  }
};

app.get("/", (req, res) => {
  res.send("API is Working");
});
app.use(cors());
app.use(express.json());
app.use("/students", studentRoutes);

app.listen(8080, () => {
  connect();
  console.log("Server is listening");
});
