import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import ApiResponse, { HTTP_STATUS } from "@/utils/responseHandler";
import User from "@/models/userModel";

export const hashPassword = (password: string) => {
  return bcrypt.hash(password, 10);
};

export const comparePassword = (password: string, hashedFromDb: string) => {
  return bcrypt.compare(password, hashedFromDb);
};

type User = {
  id?: string;
};

export const accessToken = (user: User | any) => {
  const token = jwt.sign(
    {
      user: {
        id: user.id,
        username: user.username,
        role: user.role,
      },
    },
    process.env.ACCESS_TOKEN as string,
    {
      expiresIn: "10min",
    }
  );
  return token;
};

export const refreshToken = (user: User | any) => {
  const token = jwt.sign(
    {
      user: {
        id: user.id,
      },
    },
    process.env.REFRESH_TOKEN as string,
    {
      expiresIn: "1d",
    }
  );
  return token;
};

export const bakeCookies = (res: Response, refreshToken: string) => {
  res.cookie("ref_token", refreshToken, {
    httpOnly: true,
    maxAge: 86400000,
    secure: process.env.NODE_ENV === "production",
  });
};

export const getNewAccessTByRefreshT = (
  res: Response,
  refresh_token: string
) => {
  const payload = jwt.verify(
    refresh_token,
    process.env.REFRESH_TOKEN as string,
    async (err, decoded: any) => {
      if (err) {
        return new ApiResponse(res).error(
          HTTP_STATUS.FORBIDDEN,
          "Invalid token"
        );
      }

      const user = await User.findOne({ _id: decoded.user.id }).exec();

      if (!user)
        return new ApiResponse(res).error(
          HTTP_STATUS.NOT_FOUND,
          "User not found"
        );

      try {
        const access_token = accessToken(user);

        return new ApiResponse(res).send(access_token);
      } catch (error: any) {
        return new ApiResponse(res).error(
          HTTP_STATUS.INTERNAL_SERVER_ERROR,
          error.message
        );
      }
    }
  );
  return payload;
};

declare global {
  namespace Express {
    interface Request {
      user: String;
      role: String;
    }
  }
}

export const verifyAccessToken = (
  req: Request,
  res: Response,
  access_token: string
) => {
  const payload = jwt.verify(
    access_token,
    process.env.ACCESS_TOKEN as string,
    async (err, decoded: any) => {
      if (err) {
        return new ApiResponse(res).error(
          HTTP_STATUS.FORBIDDEN,
          "Invalid token"
        );
      }

      req.user = decoded.user.id;
      req.role = decoded.user.role;
    }
  );
  return payload;
};
