import { Request, Response, NextFunction } from "express";
import ApiResponse, { HTTP_STATUS } from "@/utils/responseHandler";
import * as y from "yup";

export const SIGNUP_VALIDATOR =
  (schema: y.AnyObjectSchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate(req.body);
      return next();
    } catch (error: any) {
      const response = new ApiResponse(res);
      response.error(HTTP_STATUS.BAD_REQUEST, error.message);
    }
  };

export const LOGIN_VALIDATOR =
  (schema: y.AnyObjectSchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate(req.body);
      return next();
    } catch (error: any) {
      const response = new ApiResponse(res);
      response.error(HTTP_STATUS.BAD_REQUEST, error.message);
    }
  };

export const UPDATE_USER_VALIDATOR =
  (schema: y.AnyObjectSchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate(req.body);
      return next();
    } catch (error: any) {
      const response = new ApiResponse(res);
      response.error(HTTP_STATUS.BAD_REQUEST, error.message);
    }
  };

export const WAREHOUSE_VALIDATOR =
  (schema: y.AnyObjectSchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate(req.body);
      return next();
    } catch (error: any) {
      const response = new ApiResponse(res);
      response.error(HTTP_STATUS.BAD_REQUEST, error.message);
    }
  };
