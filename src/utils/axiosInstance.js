import axios from "axios";
import queryProvider from "@/utils/queryProvider";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

const callAPI = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

callAPI.interceptors.response.use(
  (config) => {
    const acc_token = queryProvider.getQueryData("accessToken");

    if (acc_token) {
      config.headers["Authorization"] = `Bearer ${acc_token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

callAPI.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (originalRequest.url.includes("/auth/login")) {
      return Promise.reject(error);
    }

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const response = await callAPI.get("/auth/refresh");
        const newAccessToken = response.data;

        queryProvider.setQueryData("accessToken", newAccessToken);
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
        return callAPI(originalRequest);
      } catch (err) {
        console.error("Refresh token failed", err);
        return Promise.reject(err);
      }
    }
    return Promise.reject(error);
  }
);

export default callAPI;
