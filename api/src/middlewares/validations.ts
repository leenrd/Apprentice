import { Request, Response, NextFunction } from "express";
import * as y from "yup";

export const SIGNUP_VALIDATOR =
  (schema: y.AnyObjectSchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate(req.body);
      return next();
    } catch (error) {
      return res.status(400).send({ error: error });
    }
  };

export const LOGIN_VALIDATOR =
  (schema: y.AnyObjectSchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate(req.body);
      return next();
    } catch (error) {
      return res.status(400).send({ error: error });
    }
  };
