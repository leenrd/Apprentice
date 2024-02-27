import express, { Request, Response } from "express";
import morgan from "morgan";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("combined"));

app.get("/", (req: Request, res: Response) => {
  res.status(200);
  return res.json({ message: "niggas in paris" });
});

app.listen(5000, () => {
  console.log("listen on port http://localhost:5000");
});
