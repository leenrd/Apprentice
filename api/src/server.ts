import express, { Request, Response } from "express";

const server = express();

server.get("/", (req: Request, res: Response) => {
  res.status(200).send({ msg: "connected to express" });
});

server.use("/user", () => {});

export default server;
