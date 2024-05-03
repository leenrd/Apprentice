import { Schema, model } from "mongoose";

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
  warehouse: string | null;
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
    warehouse: {
      type: Schema.Types.ObjectId,
      ref: "warehouse",
    },
  },
  { timestamps: true }
);

const Item = model<Item>("item", ItemSchema);

export default Item;
