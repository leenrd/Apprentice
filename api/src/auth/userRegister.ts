import express, { Request, Response } from "express";
import User from "../models/userModel";
import ApiResponse, { HTTP_STATUS } from "../utils/responseHandler";
import { bakeCookies, createJWT, hashPassword } from "./userUtils";
import { SIGNUP_VALIDATOR } from "../middlewares/validations";
import { SIGNUP_SCHEMA } from "./validationSchema";

const router = express.Router();

router.post(
  "/signup",
  SIGNUP_VALIDATOR(SIGNUP_SCHEMA),
  async (req: Request, res: Response) => {
    try {
      // User.Admin constitutes to base user schema
      let user = await User.Admin.findOne({
        username: req.body.username,
      });

      if (user)
        return new ApiResponse(res).error(
          HTTP_STATUS.BAD_REQUEST,
          "User already exists"
        );

      let newUser;
      if (req.body.role === "staff") {
        newUser = new User.Staff({
          ...req.body,
          password: await hashPassword(req.body.password),
        });
      } else {
        newUser = new User.Admin({
          ...req.body,
          password: await hashPassword(req.body.password),
        });
      }

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
