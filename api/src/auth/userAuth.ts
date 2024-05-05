import express, { Request, Response } from "express";
import { bakeCookies, comparePassword, createJWT } from "./userUtils";
import User from "@/models/userModel";
import ApiResponse, { HTTP_STATUS } from "@/utils/responseHandler";
import { LOGIN_VALIDATOR } from "@/middlewares/validations";
import { LOGIN_SCHEMA } from "@/utils/validationSchema";

const router = express.Router();

router.post(
  "/login",
  LOGIN_VALIDATOR(LOGIN_SCHEMA),
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

export default router;
