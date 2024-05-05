import express, { Request, Response } from "express";
import User from "@/models/userModel";
import ApiResponse, { HTTP_STATUS } from "@/utils/responseHandler";

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find({}, { _id: 0, password: 0, __v: 0 }).exec();

    return new ApiResponse(res).send(users);
  } catch (e: any) {
    return new ApiResponse(res).error(HTTP_STATUS.BAD_REQUEST, e.message);
  }
};

export default {
  getAllUsers,
};
