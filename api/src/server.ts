import express, { Response } from "express";
import bodyParser from "body-parser";
import userRoute from "@/auth/userRegister";
import authRoute from "@/auth/userAuth";
import userHandler from "@/tenants/router/users";
import swaggerOptions from "@/utils/swaggerOptions";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import cors from "cors";
import cookieParser from "cookie-parser";

// @Global: Config
require("dotenv").config();
const server = express();
const swaggerSpec = swaggerJSDoc(swaggerOptions);

server.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  })
);

server.use(cookieParser());
server.use(bodyParser.json());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// @Access: Documentation
server.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// @Access: Private
server.use("/api", userHandler);

// @Desc: Auth routes
server.use("/user", userRoute);
server.use("/auth", authRoute);

// @Desc: Not Found handler
server.all("*", () => {
  throw new Error("Resource not found.");
});

export default server;
