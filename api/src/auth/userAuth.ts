import express, { Request, Response } from "express";
import {
  bakeCookies,
  comparePassword,
  createJWT,
  errorValidator,
} from "./userUtils";
import { check } from "express-validator";
import User from "@/models/userModel";

const router = express.Router();

const VALIDATIONS = [
  check("username", "Username is required").isString(),
  check("password", "Password should be at least 8 characters").isLength({
    min: 8,
    max: 20,
  }),
];

router.post("/login", VALIDATIONS, async (req: Request, res: Response) => {
  const { email, password } = req.body;
  errorValidator(req, res);

  try {
    let user = await User.findOne({
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
});
