import express from "express";
import userHandlers from "../controller/userHandlers";

const { getAllUsers } = userHandlers;
const router = express.Router();
// @Desc: Get all users
// @Access: Private
// @Path: /api/users

router.route("/users").get(getAllUsers);

router.route("/users/:id").get().post().patch().delete();

export default router;
