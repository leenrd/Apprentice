import server from "./src/server";
import { Response } from "express";
import mongoose from "mongoose";
import path from "path";
import ApiResponse, { HTTP_STATUS } from "./src/utils/responseHandler";

server.get("/*", function (_, res: Response) {
  res.sendFile(path.join(__dirname, "../index.html"), function (err: any) {
    if (err) {
      new ApiResponse(res).error(HTTP_STATUS.NOT_FOUND, "Resource not found.");
    }
  });
});

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
