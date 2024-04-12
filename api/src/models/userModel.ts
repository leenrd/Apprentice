import { Schema, model } from "mongoose";

export interface User {
  _id: string;
  username: string;
  password: string;
  role: string;
}

const BaseSchema = new Schema<User>(
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

const StaffSchema = new Schema(
  {
    warehouse: {
      type: Schema.Types.ObjectId,
      ref: "warehouse",
    },
  },
  { discriminatorKey: "role" }
);

const Admin = model<User>("user", BaseSchema);
const Staff = Admin.discriminator("staff", StaffSchema);

export default { Admin, Staff };
