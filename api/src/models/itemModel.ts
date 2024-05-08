import LOGGER from "@/middlewares/logger";
import { NextFunction } from "express";
import { Schema, model } from "mongoose";

interface Item {
  _id: string;
  description: string;
  category: string;
  itemType: string;
  vendorName: string;
  expiry: Date;
  purchaseUnit: string;
  quantityPerPurchaseUnit: number;
  costPerPurchaseUnit: number;
  costPerSingleItem: number;
  warehouse: Schema.Types.ObjectId;
}

const ItemSchema = new Schema<Item>(
  {
    description: {
      type: String,
      required: true,
    },
    category: String,
    itemType: String,
    vendorName: String,
    expiry: Date,
    purchaseUnit: {
      type: String,
      enum: ["case", "pack", "box"],
      required: true,
    },
    quantityPerPurchaseUnit: {
      type: Number,
      required: true,
    },
    costPerPurchaseUnit: {
      type: Number,
      required: true,
    },
    costPerSingleItem: {
      type: Number,
      required: true,
    },
    warehouse: {
      type: Schema.Types.ObjectId,
      ref: "warehouse",
    },
  },
  { timestamps: true }
);

// ItemSchema.post("save", function (next: NextFunction | any, doc: Item) {
//   LOGGER(this, "info", "Item saved");
//   next();
// });

const Item = model<Item>("item", ItemSchema);

export default Item;
