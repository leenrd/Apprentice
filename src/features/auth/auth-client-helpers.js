import callAPI from "@/utils/axiosInstance";

export const LogoutHelperFn = () => {
  return callAPI.post("/auth/logout");
};

export const LoginHelperFn = (data) => {
  return callAPI.post("/auth/login", data);
};

export const RegisterHelperFn = (data) => {
  return callAPI.post("/user/signup", data);
};
