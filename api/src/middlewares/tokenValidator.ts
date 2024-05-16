import { Request, Response, NextFunction } from "express";
import ApiResponse, { HTTP_STATUS } from "@/utils/responseHandler";
import { verifyAccessToken } from "@/auth/userUtils";

const TOKEN_VALIDATOR = (req: Request, res: Response, next: NextFunction) => {
  const AuthHeader = req.headers["authorization" || "Authorization"];

  if (!AuthHeader?.startsWith("Bearer ")) {
    return new ApiResponse(res).error(HTTP_STATUS.UNAUTHORIZED, "No token");
  }

  const access_token = AuthHeader.split(" ")[1];
  verifyAccessToken(req, res, access_token);
  next();
};

export default TOKEN_VALIDATOR;
