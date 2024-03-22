import express, { Request, Response } from "express";
import { check, validationResult } from "express-validator";
import User from "../models/userModel";
import {
  bakeCookies,
  createJWT,
  errorValidator,
  hashPassword,
} from "./userUtils";

const router = express.Router();

const VALIDATORS = [
  check("username", "Username is required").isString(),
  check("password", "Password should be at least 8 characters").isLength({
    min: 8,
    max: 20,
  }),
];

router.post("/signup", VALIDATORS, async (req: Request, res: Response) => {
  errorValidator(req, res);

  try {
    let user = await User.findOne({
      username: req.body.username,
    });

    if (user) {
      return res.status(401).send({ msg: "Username already exists" });
    }

    user = new User({
      ...req.body,
      password: await hashPassword(req.body.password),
    });

    const token = createJWT(user);
    bakeCookies(res, token);
  } catch (error) {
    res.status(401).send({ error: error });
  }
});

export default router;
