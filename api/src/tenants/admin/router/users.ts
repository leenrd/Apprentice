import express from "express";
import userHandlers from "../controller/userHandlers";
import {
  SIGNUP_VALIDATOR,
  UPDATE_USER_VALIDATOR,
} from "@/middlewares/validations";
import { SIGNUP_SCHEMA, UPDATE_USER_SCHEMA } from "@/utils/validationSchema";
import LOGGER from "@/middlewares/logger";

const { getAllUsers, getUser, postUser, deleteUser, updateUser } = userHandlers;
const router = express.Router();
// @Desc: User management routes for admin
// @Path: /api/users

router
  .route("/users")
  .get(getAllUsers)
  .post(SIGNUP_VALIDATOR(SIGNUP_SCHEMA), LOGGER, postUser);

router
  .route("/users/:id")
  .get(getUser)
  .patch(UPDATE_USER_VALIDATOR(UPDATE_USER_SCHEMA), updateUser)
  .delete(deleteUser);

export default router;
