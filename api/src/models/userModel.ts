import { Schema, model } from "mongoose";

interface User {
  _id: string;
  username: string;
  password: string;
  role: string;
  warehouse: string | null;
}

const UserSchema = new Schema<User>(
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
    },
    warehouse: {
      type: Schema.Types.ObjectId,
      ref: "warehouse",
      default: null,
    },
  },
  { timestamps: true }
);

const User = model<User>("user", UserSchema);

export default User;
