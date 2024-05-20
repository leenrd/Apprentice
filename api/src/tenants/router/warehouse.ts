import express from "express";
import warehouseHandlers from "@/tenants/controller/warehouseHandlers";
import TOKEN_VALIDATOR from "@/middlewares/tokenValidator";
import { ADMIN_ROLE_GATEWAY } from "@/middlewares/roleValidator";
import { WAREHOUSE_VALIDATOR } from "@/middlewares/validations";
import { WAREHOUSE_SCHEMA } from "@/utils/validationSchema";

const { getAllWarehouse, getWarehouseById, postWarehouse } = warehouseHandlers;
const router = express.Router();
// @Desc: Warehouse management routes for admin

// router.use(TOKEN_VALIDATOR);
// router.use(ADMIN_ROLE_GATEWAY);

router
  .route("/warehouse")
  .get(getAllWarehouse)
  .post(WAREHOUSE_VALIDATOR(WAREHOUSE_SCHEMA), postWarehouse);

export default router;
