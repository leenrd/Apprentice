import { Request, Response } from "express";
import User, { UserT } from "@/models/userModel";
import ApiResponse, { HTTP_STATUS } from "@/utils/responseHandler";
import { hashPassword } from "@/auth/userUtils";

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find({}, { password: 0, __v: 0 }).lean().exec();

    if (!users) {
      return new ApiResponse(res).error(
        HTTP_STATUS.NOT_FOUND,
        "No users found"
      );
    }

    return new ApiResponse(res).send(users);
  } catch (e: any) {
    return new ApiResponse(res).error(HTTP_STATUS.BAD_REQUEST, e.message);
  }
};

const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id, {
      password: 0,
      __v: 0,
    })
      .lean()
      .exec();

    if (!user) {
      return new ApiResponse(res).error(
        HTTP_STATUS.NOT_FOUND,
        "User not found"
      );
    }

    return new ApiResponse(res).send(user);
  } catch (e: any) {
    return new ApiResponse(res).error(HTTP_STATUS.BAD_REQUEST, e.message);
  }
};

const postUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username: username }).lean().exec();

    if (user) {
      return new ApiResponse(res).error(
        HTTP_STATUS.BAD_REQUEST,
        "User already exists"
      );
    }

    const newUser: UserT = await User.create({
      ...req.body,
      password: await hashPassword(password),
    });

    return new ApiResponse(res).send({ userId: newUser._id });
  } catch (error: any) {
    return new ApiResponse(res).error(HTTP_STATUS.BAD_REQUEST, error.message);
  }
};

const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const user = await User.findByIdAndDelete(id).lean().exec();

    if (!user) {
      return new ApiResponse(res).error(
        HTTP_STATUS.NOT_FOUND,
        "User not found"
      );
    }

    return new ApiResponse(res).send("User deleted successfully");
  } catch (error: any) {
    return new ApiResponse(res).error(HTTP_STATUS.BAD_REQUEST, error.message);
  }
};

const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const updateValid = await User.findById(id).lean().exec();

    if (req.body === updateValid) {
      return new ApiResponse(res).error(
        HTTP_STATUS.BAD_REQUEST,
        "No changes made"
      );
    }

    const user = await User.findByIdAndUpdate(id, req.body);

    if (!user) {
      return new ApiResponse(res).error(
        HTTP_STATUS.NOT_FOUND,
        "User not found"
      );
    }

    return new ApiResponse(res).send("User updated successfully");
  } catch (error: any) {
    return new ApiResponse(res).error(HTTP_STATUS.BAD_REQUEST, error.message);
  }
};

export default {
  getAllUsers,
  getUser,
  postUser,
  deleteUser,
  updateUser,
};
