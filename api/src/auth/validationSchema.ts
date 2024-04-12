import { check } from "express-validator";

// change to yup
export const LOGIN_VALIDATIONS = [
  check("username", "Username is required").isString(),
  check("password", "Password should be at least 8 characters").isLength({
    min: 8,
    max: 20,
  }),
];

export const SIGNUP_VALIDATORS = [
  check("username", "Username is required").isString(),
  check("password", "Password should be at least 8 characters").isLength({
    min: 8,
    max: 20,
  }),
  check("role", "Role is required").isIn(["admin", "staff"]),
];
