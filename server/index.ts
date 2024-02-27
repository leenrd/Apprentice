import express from "express";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  return res.json({ message: "niggas in paris" });
});

app.listen(5000, () => {
  console.log("listen on port http://localhost:5000");
});
