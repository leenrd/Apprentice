import express, { Request, Response } from "express";
import { bakeCookies, comparePassword, createJWT } from "./userUtils";
import User, { UserSchema } from "@/models/userModel";
import ApiResponse, { HTTP_STATUS } from "@/utils/responseHandler";
import { LOGIN_VALIDATOR } from "@/middlewares/validations";
import { LOGIN_SCHEMA } from "@/utils/validationSchema";
import LOGIN_LIMITER from "@/middlewares/loginLimiter";
import LOGGER from "@/middlewares/logger";

const router = express.Router();

router.post(
  "/login",
  LOGIN_VALIDATOR(LOGIN_SCHEMA),
  LOGIN_LIMITER,
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

      const token = createJWT(user);
      bakeCookies(res, token);

      return new ApiResponse(res).send({ userId: user._id });
    } catch (error: any) {
      return new ApiResponse(res).error(
        HTTP_STATUS.INTERNAL_SERVER_ERROR,
        error.message
      );
    }
  }
);

router.post("/refresh", async (req: Request, res: Response) => {});
router.post("/logout", async (req: Request, res: Response) => {});

export default router;
