import { Schema, model } from "mongoose";
import { string } from "prop-types";

interface WarehouseType {
  _id: string;
  name: string;
  unitLoad: number;
}

const WarehouseSchema = new Schema<WarehouseType>({
  name: {
    type: String,
    required: true,
    index: true,
  },
  unitLoad: {
    type: Number,
    required: true,
    unitClass: {
      type: String,
      enum: ["dry", "wet", "other"],
    },
  },
});

const Warehouse = model<WarehouseType>("warehouse", WarehouseSchema);

export default Warehouse;