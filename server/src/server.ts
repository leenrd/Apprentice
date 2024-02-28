import express, { Request, Response } from "express";
import mongoose from "mongoose";
import morgan from "morgan";

const app = express();
app.use(morgan("dev"));

mongoose.connect("mongodb://localhost:27017/test");

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Hello World!" });
});

export default app;
