import { Schema, model } from "mongoose";

export interface LogT {
  _id: string;
  message: string;
  level: string;
}

const logSchema = new Schema(
  {
    message: {
      type: String,
      required: true,
    },
    level: {
      type: String,
      enum: ["info", "error"],
      default: "info",
    },
  },
  { timestamps: true }
);

const Log = model<LogT>("log", logSchema);

export default Log;
