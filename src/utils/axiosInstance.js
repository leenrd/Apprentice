import axios from "axios";
import queryProvider from "@/utils/queryProvider";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

const callAPI = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
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

// @Desc: interceptor to refresh token if expired
callAPI.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        await queryProvider.fetchQuery("refreshToken"); // @Desc: Trigger refresh token fetch
        const accessToken = queryProvider.getQueryData("accessToken");
        originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;
        return callAPI(originalRequest);
      } catch (err) {
        console.error("Refresh token failed", err);
        return Promise.reject(err);
      }
    }
    return Promise.reject(error);
  }
);

export const refreshAccessToken = async () => {
  const response = await callAPI.post(
    `${API_BASE_URL}/auth/refresh-token`,
    {},
    { withCredentials: true }
  );
  return response.data;
};

export default callAPI;
