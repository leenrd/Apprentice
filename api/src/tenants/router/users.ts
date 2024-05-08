import express from "express";
import userHandlers from "../controller/userHandlers";
import {
  SIGNUP_VALIDATOR,
  UPDATE_USER_VALIDATOR,
} from "@/middlewares/validations";
import { SIGNUP_SCHEMA, UPDATE_USER_SCHEMA } from "@/utils/validationSchema";
import TOKEN_VERIFIER from "@/middlewares/tokenValidator";

const { getAllUsers, getUser, postUser, deleteUser, updateUser } = userHandlers;
const router = express.Router();
// @Desc: User management routes for admin

router.use(TOKEN_VERIFIER);

/**
 * @openapi
 * /users:
 *   get:
 *     summary: Retrieve all users
 *     description: Retrieve a list of all users.
 *     responses:
 *       '200':
 *         description: A list of users
  *     '400':
  *        description: Bad request

 *   post:
 *     summary: Create a new user
 *     description: Create a new user.
 *     requestBody:
 *       required: true
 *     responses:
 *       '201':
 *         description: User created successfully
 *       '400':
 *         description: Bad request

 * /users/{id}:
 *   get:
 *     summary: Get user by ID
 *     description: Get a user by their ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: User details retrieved successfully

 *   patch:
 *     summary: Update user by ID
 *     description: Update a user's details by their ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *     responses:
 *       '200':
 *         description: User updated successfully
 *       '400':
 *         description: Bad request
 *       '404':
 *         description: User not found

 *   delete:
 *     summary: Delete user by ID
 *     description: Delete a user by their ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user
 *         schema:
 *           type: string
 *     responses:
 *       '204':
 *         description: User deleted successfully
 *       '404':
 *         description: User not found
 */
router
  .route("/users")
  .get(getAllUsers)
  .post(SIGNUP_VALIDATOR(SIGNUP_SCHEMA), postUser);

router
  .route("/users/:id")
  .get(getUser)
  .patch(UPDATE_USER_VALIDATOR(UPDATE_USER_SCHEMA), updateUser)
  .delete(deleteUser);

export default router;
