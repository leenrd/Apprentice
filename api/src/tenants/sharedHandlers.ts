import express, { Request, Response } from "express";
import ApiResponse, { HTTP_STATUS } from "@/utils/responseHandler";
import User from "@/models/userModel";

const getMe = async (req: Request, res: Response) => {
  const { auth_token } = req.cookies;

  //  TODO: Implement the logic to get the user details from the database

  try {
    // const user = await User.findById(id);
    // return new ApiResponse(res).send(user);
  } catch (error: any) {
    return new ApiResponse(res).error(HTTP_STATUS.BAD_REQUEST, error.message);
  }
};

export default { getMe };
