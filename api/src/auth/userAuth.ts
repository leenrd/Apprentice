import express, { Request, Response } from "express";
import {
  bakeCookies,
  comparePassword,
  createJWT,
  errorValidator,
} from "./userUtils";
import { LOGIN_VALIDATIONS } from "./validationSchema";
import User from "@/models/userModel";

const router = express.Router();

router.post(
  "/login",
  LOGIN_VALIDATIONS,
  async (req: Request, res: Response) => {
    const { email, password } = req.body;
    errorValidator(req, res);

    try {
      let user = await User.Admin.findOne({
        email,
      });

      if (!user) {
        return res.status(401).send({ message: "User not found!" });
      }

      const emailIsValid = await comparePassword(password, user.password);
      if (!emailIsValid) {
        return res.status(401).send({ message: "Wrong password!" });
      }

      const token = createJWT(user);
      bakeCookies(res, token);

      res.status(200).json({ userId: user._id });
    } catch (error) {
      res.status(400).send({ error: error });
    }
  }
);
