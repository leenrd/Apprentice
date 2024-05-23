import * as y from "yup";

export const loginSchema = y.object().shape({
  username: y.string().required().min(3, "Invalid username"),
  password: y.string().required().min(8, "Must be at least 8 characters"),
});

export const signUpSchema = y.object().shape({
  username: y.string().required().min(3, "Invalid username"),
  password: y.string().required().min(8, "Must be at least 8 characters"),
  confirmPassword: y
    .string()
    .required()
    .oneOf([y.ref("password"), null]),
  role: y.string().required().oneOf(["admin", "staff"]),
});

export const warehouseSchema = y.object().shape({
  name: y.string().required(),
  capacity: y.number().required().min(1, "Invalid capacity"),
  status: y
    .string()
    .required()
    .oneOf(["operational", "downtime", "maintenance"]),
  manager: y.string().required(),
});
