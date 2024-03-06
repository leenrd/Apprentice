export enum UserRoles {
  STAFF,
  ADMIN,
}

export type UserType = {
  _id: string;
  username: string;
  password: string;
  role: UserRoles;
};

export type ItemType = {
  _id: string;
  fillUpDate: Date;
  deliveryType: string;
  storeGroup: string;
  storeName: string;
  description: string;
  itemCategory: string;
  orderQuantity: number;
  deliveredQuantity: number;
  packageType: string;
  quantityPerPackage: number;
  costPerPackage: number;
  costPerUnit: number;
};
