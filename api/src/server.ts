import express, { Request, Response } from "express";
import userRoute from "./auth/userRegister";
import cors from "cors";

require("dotenv").config();
const server = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.get("/", (_, res: Response) => {
  res.status(200).send({ msg: "server started" });
});

server.use("/user", userRoute);

// error handler
server.all("*", () => {
  throw new Error("Resource not found.");
});

export default server;
