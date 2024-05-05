import ApiResponse, { HTTP_STATUS } from "@/utils/responseHandler";
import { rateLimit } from "express-rate-limit";

const LOGIN_LIMITER = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  message: { message: "Too many login attempts, please try again later" },
  handler: (_, res) => {
    new ApiResponse(res).error(
      HTTP_STATUS.FORBIDDEN,
      "Too many login attempts, please try again later"
    );
  },
  standardHeaders: true,
  legacyHeaders: false,
});

export default LOGIN_LIMITER;
