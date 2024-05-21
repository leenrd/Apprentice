import { Request, Response } from "express";
import ApiResponse, { HTTP_STATUS } from "@/utils/responseHandler";
import Warehouse from "@/models/warehouseModel";

const getAllWarehouse = async (req: Request, res: Response) => {
  try {
    let warehouse = await Warehouse.find({}, { __v: 0 }).lean().exec();

    if (!warehouse) {
      return new ApiResponse(res).error(
        HTTP_STATUS.NOT_FOUND,
        "No warehouse found"
      );
    }

    return new ApiResponse(res).send(warehouse);
  } catch (error: any) {
    return new ApiResponse(res).error(HTTP_STATUS.BAD_REQUEST, error.message);
  }
};

const getWarehouseById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    let warehouse = await Warehouse.findById(id, { __v: 0 }).lean().exec();

    if (!warehouse) {
      return new ApiResponse(res).error(
        HTTP_STATUS.NOT_FOUND,
        "Warehouse not found"
      );
    }

    return new ApiResponse(res).send(warehouse);
  } catch (error: any) {
    return new ApiResponse(res).error(HTTP_STATUS.BAD_REQUEST, error.message);
  }
};

const postWarehouse = async (req: Request, res: Response) => {
  const { name } = req.body;

  try {
    const warehouse = await Warehouse.findOne({ name: name }).lean().exec();

    if (warehouse) {
      return new ApiResponse(res).error(
        HTTP_STATUS.BAD_REQUEST,
        "Warehouse already exists"
      );
    }

    const newWarehouse = await Warehouse.create(req.body);

    return new ApiResponse(res).send(newWarehouse);
  } catch (error: any) {
    return new ApiResponse(res).error(HTTP_STATUS.BAD_REQUEST, error.message);
  }
};

export default { getAllWarehouse, getWarehouseById, postWarehouse };
