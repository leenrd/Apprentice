import * as y from "yup";

export const LOGIN_SCHEMA = y.object().shape({
  username: y.string().required(),
  password: y.string().min(8).max(20).required(),
});

export const SIGNUP_SCHEMA = y.object().shape({
  username: y.string().required(),
  password: y.string().min(8).max(20).required(),
  role: y.string().required().oneOf(["admin", "staff"]),
});

export const UPDATE_USER_SCHEMA = y.object().shape({
  username: y.string().required(),
  password: y.string().min(8).max(20).required(),
  role: y.string().required().oneOf(["admin", "staff"]),
});

export const WAREHOUSE_SCHEMA = y.object().shape({
  name: y.string().required(),
  capacity: y.number().required(),
  status: y
    .string()
    .required()
    .oneOf(["operational", "downtime", "maintenance"]),
  manager: y.string().required(),
});
