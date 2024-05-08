import Log from "@/models/logModel";
import { UserT } from "@/models/userModel";
import { Request, Response, NextFunction } from "express";

// const LOGGER = async (req: Request, res: Response) => {
//   const { method, url, path } = req;
//   const { auth_token } = req.cookies;

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

const LOGGER = async (
  req: Request,
  // res: Response | any,
  next: NextFunction | any,
  doc: UserT
) => {
  if (!doc) {
    if (req.method === "POST") {
      const logEntry = await Log.create({
        message: `Created: ${req.url}`,
        level: "error",
      });
    }
    return;
  }

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
