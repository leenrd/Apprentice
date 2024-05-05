import server from "./src/server";
import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => {
    console.log("Connected to MongoDB 🍏");
    server.listen(3000, () => {
      console.log(
        `+------------------Server is running on port ${
          process.env.PORT || 3000
        } ------------------+`
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });
