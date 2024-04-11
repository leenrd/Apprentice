import { Schema, model } from "mongoose";

interface WarehouseType {
  _id: string;
  name: string;
  unitLoad: [];
}

const WarehouseSchema = new Schema<WarehouseType>({
  name: {
    type: String,
    required: true,
    index: true,
  },
  unitLoad: {
    type: [
      {
        unitClass: {
          type: String,
          enum: ["dry", "wet", "other"],
          capacity: Number,
        },
      },
    ],
    required: true,
  },
});

const Warehouse = model<WarehouseType>("warehouse", WarehouseSchema);

export default Warehouse;
