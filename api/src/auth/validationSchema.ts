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
