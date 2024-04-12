import express, { Request, Response } from "express";
import User from "../models/userModel";
import {
  bakeCookies,
  createJWT,
  errorValidator,
  hashPassword,
} from "./userUtils";
import { SIGNUP_VALIDATORS } from "./validationSchema";
const router = express.Router();

router.post(
  "/signup",
  SIGNUP_VALIDATORS,
  async (req: Request, res: Response) => {
    errorValidator(req, res);

    try {
      let user = await User.Admin.findOne({
        username: req.body.username,
      });

      if (user) {
        return res.status(401).send({ msg: "Username already exists" });
      }

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
    } catch (error) {
      res.status(401).send({ error: error });
    }
  }
);

export default router;
