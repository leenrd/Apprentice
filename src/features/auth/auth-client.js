import axios from "axios";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const LogoutHelperFn = () => {
  return axios.post(`${API_BASE_URL}/auth/logout`);
};

export const LoginHelperFn = (data) => {
  return axios.post(`${API_BASE_URL}/auth/login`, data);
};

export const RegisterHelperFn = (data) => {
  return axios.post(`${API_BASE_URL}/user/signup`, data);
};
