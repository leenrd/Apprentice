import Log from "@/models/logModel";
import { Request, Response, NextFunction } from "express";

// const LOGGER = async (req: Request, res: Response) => {
//   const { method, url, path } = req;

//   try {
//     await Log.create({
//       message: `Requested ${method} in path ${url}`,
//       level: "info",
//     });
//   } catch (error: any) {
//     Log.create({
//       message: `Error in ${method} ${url}: ${error.message}`,
//       level: "error",
//     });
//   }

//   console.log(`${method} ${url} ${path}`);
// };

const LOGGER = async (req: Request, res: Response, next: NextFunction) => {
  if (req.method === "POST") {
    const logEntry = await Log.create({
      message: `Created: ${req.url}`,
      level: "info",
    });

    logEntry
      .save()
      .then(() => {
        console.log("Log entry saved");
      })
      .catch((err) => {
        console.error("Error saving log entry:", err);
      });
  }

  next();
};

export default LOGGER;
