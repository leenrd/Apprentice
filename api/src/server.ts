import express, { Request, Response } from "express";
import userRoute from "./auth/userRoute";
import cors from "cors";

require("dotenv").config();

const server = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.get("/", (req: Request, res: Response) => {
  res.status(200).send({ msg: "server started" });
});

server.use("/user", userRoute);

export default server;
