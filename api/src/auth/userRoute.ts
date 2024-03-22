import express, { Request, Response } from "express";
import { check, validationResult } from "express-validator";
import UserModel from "@/models/userModel";

const router = express.Router();

const VALIDATORS = [
  check("username", "Username is required").isString(),
  check("password", "Password should be at least 8 characters").isLength({
    min: 8,
    max: 20,
  }),
];

router.post("signup", VALIDATORS, (req: Request, res: Response) => {
  const errors = validationResult(req);

  if (errors) {
    return res.status(401).send({ error: errors.array() });
  }
});
