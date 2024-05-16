import express, { Request, Response } from "express";
import {
  bakeCookies,
  comparePassword,
  accessToken,
  refreshToken,
  getNewAccessTByRefreshT,
} from "./userUtils";
import User from "@/models/userModel";
import ApiResponse, { HTTP_STATUS } from "@/utils/responseHandler";
import { LOGIN_VALIDATOR } from "@/middlewares/validations";
import { LOGIN_SCHEMA } from "@/utils/validationSchema";
import LOGIN_LIMITER from "@/middlewares/loginLimiter";

const router = express.Router();

router.post(
  "/login",
  LOGIN_VALIDATOR(LOGIN_SCHEMA),
  // LOGIN_LIMITER,
  async (req: Request, res: Response) => {
    const { username, password } = req.body;

    try {
      let user = await User.findOne({
        username: username,
      }).exec();

      if (!user)
        return new ApiResponse(res).error(
          HTTP_STATUS.NOT_FOUND,
          "User not found"
        );

      const userIsValid = await comparePassword(password, user.password);
      if (!userIsValid)
        return new ApiResponse(res).error(
          HTTP_STATUS.UNAUTHORIZED,
          "Invalid password"
        );

      const access_token = accessToken(user);
      const refresh_token = refreshToken(user);
      bakeCookies(res, refresh_token);

      return new ApiResponse(res).send(access_token);
    } catch (error: any) {
      return new ApiResponse(res).error(
        HTTP_STATUS.INTERNAL_SERVER_ERROR,
        error.message
      );
    }
  }
);

router.post("/refresh", async (req: Request, res: Response) => {
  const { ref_token } = req.cookies;

  if (!ref_token)
    return new ApiResponse(res).error(
      HTTP_STATUS.UNAUTHORIZED,
      "No refresh token found"
    );

  const refreshToken = getNewAccessTByRefreshT(res, ref_token);
  return new ApiResponse(res).send(refreshToken);
});

router.post("/logout", async (req: Request, res: Response) => {
  res.clearCookie("ref_token", {
    httpOnly: true,
    maxAge: 86400000,
    secure: process.env.NODE_ENV === "production",
  });
  return new ApiResponse(res).send("Logged out");
});

export default router;
