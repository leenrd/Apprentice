import express, { Response } from "express";
import userRoute from "./auth/userRegister";
import authRoute from "./auth/userAuth";
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
server.use("/auth", authRoute);

// error handler
server.all("*", () => {
  throw new Error("Resource not found.");
});

export default server;
