import { Schema, model } from "mongoose";
import { string } from "prop-types";

interface Item {
  _id: string;
  description: string;
  category: string;
  itemType: string;
  vendorName: string;
  shelfLife: Date;
  purchaseUnit: string;
  quantityPerPurchaseUnit: number;
  costPerPurchaseUnit: number;
  costPerSingleItem: number;
  unitLoad: string;
}

const ItemSchema = new Schema(
  {
    description: {
      type: String,
      required: true,
      index: true,
    },
    category: String,
    itemType: {
      type: String,
      hierarchy1: String,
      hierarchy2: String,
      hierarchy3: String,
    },
    vendorName: String,
    shelfLife: Date,
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
    unitLoad: {
      type: Schema.Types.ObjectId,
      ref: "warehouse",
    },
  },
  { timestamps: true }
);

const Item = model("item", ItemSchema);

export default Item;
