import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.json({ message: "niggas in paris" });
});

app.listen(5000, () => {
  console.log("listen on port http://localhost:5000");
});
