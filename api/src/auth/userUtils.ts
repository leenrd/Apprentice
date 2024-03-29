import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { validationResult } from "express-validator";

export const hashPassword = (password: string) => {
  return bcrypt.hash(password, 10);
};

export const comparePassword = (password: string, hashedFromDb: string) => {
  return bcrypt.compare(password, hashedFromDb);
};

export const errorValidator = (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(401).send({ error: errors.array() });
  }
};

type User = {
  id?: string;
};

export const createJWT = (user: User) => {
  const token = jwt.sign(
    { userId: user.id },
    process.env.JWT_SECRET as string,
    {
      expiresIn: "1d",
    }
  );
  return token;
};

export const bakeCookies = (res: Response, token: string) => {
  res.cookie("auth_token", token, {
    httpOnly: true,
    maxAge: 86400000,
    secure: process.env.NODE_ENV === "production",
  });
};
