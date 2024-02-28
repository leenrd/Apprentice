import mongoose from "mongoose";
import { UserType, UserRoles } from "../utils/types";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: UserRoles,
    required: true,
  },
});

const User = mongoose.model<UserType>("User", userSchema);

export default User;
