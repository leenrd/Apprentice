import { Response } from "express";

export enum HTTP_STATUS {
  OK = 200,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
  BAD_GATEWAY = 502,
}

class ApiResponse {
  res: Response;
  constructor(res: Response) {
    this.res = res;
  }

  send(data: any, status = HTTP_STATUS.OK) {
    return this.res.status(status).json(data);
  }

  error(status: HTTP_STATUS, message?: string) {
    if (status !== undefined) {
      return this.res
        .status(status)
        .json({ message: HTTP_STATUS[status].replace(/_/g, " ") })
        .send({ desc: message });
    } else {
      return this.res
        .status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
        .json({ message: "Internal Server Error" });
    }
  }
}

export default ApiResponse;
