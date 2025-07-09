import mongoose from "mongoose";
import express from "express";
import userRouter from "./user.route.js";
const app = express();

mongoose.connect("mongodb://localhost:27017/lpu").then(() => {
  console.log("Connected to MongoDB");
  app.listen(8080, () => {
    console.log("Server started at Port 8080");
  });
});


app.use(express.json());
app.use("/api/users", userRouter);