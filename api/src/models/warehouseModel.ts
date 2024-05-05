import { Schema, model } from "mongoose";

interface WarehouseType {
  _id: string;
  name: string;
  capacity: number;
  status: string;
  manager: Schema.Types.ObjectId;
}

const WarehouseSchema = new Schema<WarehouseType>({
  name: {
    type: String,
    required: true,
    index: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  manager: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
});

const Warehouse = model<WarehouseType>("warehouse", WarehouseSchema);

export default Warehouse;
