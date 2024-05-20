import ApiResponse, { HTTP_STATUS } from "@/utils/responseHandler";
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import User from "@/models/userModel";

export const ADMIN_ROLE_GATEWAY =
  () => (req: Request, res: Response, next: NextFunction) => {
    const acToken = req.headers["authorization" || "Authorization"];

    try {
      const decoded: any = jwt.verify(
        acToken as string,
        process.env.ACCESS_TOKEN as string
      );

      User.findOne({ _id: decoded.userId })
        .exec()
        .then((user) => {
          if (!user) {
            return new ApiResponse(res).error(
              HTTP_STATUS.NOT_FOUND,
              "User not found"
            );
          }
          if (user.role !== "admin") {
            return new ApiResponse(res).error(
              HTTP_STATUS.FORBIDDEN,
              "You are not authorized to perform this action"
            );
          }
          return next();
        });
    } catch (err) {
      return new ApiResponse(res).error(HTTP_STATUS.FORBIDDEN, "Invalid token");
    }
  };

export const STAFF_ROLE_GATEWAY =
  () => (req: Request, res: Response, next: NextFunction) => {
    const acToken = req.headers["authorization" || "Authorization"];

    try {
      const decoded: any = jwt.verify(
        acToken as string,
        process.env.ACCESS_TOKEN as string
      );

      User.findOne({ _id: decoded.userId })
        .exec()
        .then((user) => {
          if (!user) {
            return new ApiResponse(res).error(
              HTTP_STATUS.NOT_FOUND,
              "User not found"
            );
          }
          if (user.role !== "staff") {
            return new ApiResponse(res).error(
              HTTP_STATUS.FORBIDDEN,
              "You are not authorized to perform this action"
            );
          }
          return next();
        });
    } catch (err) {
      return new ApiResponse(res).error(HTTP_STATUS.FORBIDDEN, "Invalid token");
    }
  };
