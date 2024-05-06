import { Schema, model, Document } from "mongoose";

export interface UserT extends Document {
  _id: string;
  username: string;
  password: string;
  role: string;
}

export const UserSchema = new Schema<UserT>(
  {
    username: {
      type: String,
      required: true,
      index: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "staff"],
      default: "staff",
    },
  },
  { timestamps: true }
);

const User = model<UserT>("user", UserSchema);
export default User;
