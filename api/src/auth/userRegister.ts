import express, { Request, Response } from "express";
import User, { UserT } from "@/models/userModel";
import ApiResponse, { HTTP_STATUS } from "@/utils/responseHandler";
import { bakeCookies, createJWT, hashPassword } from "./userUtils";
import { SIGNUP_VALIDATOR } from "@/middlewares/validations";
import { SIGNUP_SCHEMA } from "./validationSchema";

const router = express.Router();

router.post(
  "/signup",
  SIGNUP_VALIDATOR(SIGNUP_SCHEMA),
  async (req: Request, res: Response) => {
    const { username, password } = req.body;

    try {
      let user = await User.findOne({
        username: username,
      }).exec();

      if (user)
        return new ApiResponse(res).error(
          HTTP_STATUS.BAD_REQUEST,
          "User already exists"
        );

      const newUser: UserT = await User.create({
        ...req.body,
        password: await hashPassword(password),
      });

      const token = createJWT(newUser);
      bakeCookies(res, token);

      return new ApiResponse(res).send({ userId: newUser._id });
    } catch (error: any) {
      return new ApiResponse(res).error(
        HTTP_STATUS.INTERNAL_SERVER_ERROR,
        error.message
      );
    }
  }
);

export default router;
