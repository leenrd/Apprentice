import { Schema, model } from "mongoose";

export interface LogT {
  _id: string;
  from: string;
  message: string;
  type: string;
}

const logSchema = new Schema<LogT>(
  {
    from: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["added", "removed", "updated"],
      required: true,
    },
  },
  { timestamps: true }
);

const Log = model<LogT>("log", logSchema);

export default Log;
