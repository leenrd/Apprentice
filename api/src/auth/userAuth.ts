import express, { Request, Response } from "express";
import { bakeCookies, comparePassword, createJWT } from "./userUtils";
import User from "@/models/userModel";
import { LOGIN_VALIDATOR } from "@/middlewares/validations";
import { LOGIN_SCHEMA } from "./validationSchema";

const router = express.Router();

router.post(
  "/login",
  LOGIN_VALIDATOR(LOGIN_SCHEMA),
  async (req: Request, res: Response) => {
    const { email, password } = req.body;

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
