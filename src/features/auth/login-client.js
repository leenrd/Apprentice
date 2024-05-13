import axios from "axios";
import { useMutation } from "@tanstack/react-query";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useLoginUser = async () => {
  const { data } = useMutation({
    mutationFn: async () => {
      const { data } = axios.post(`${API_BASE_URL}/auth/login`);
      return data;
    },
  });

  return data;
};

export const useLoginHelperFn = async (data) => {
  const res = axios.post(`${API_BASE_URL}/auth/login`, data);

  return res;
};

//  axios.interceptors.request.use(
//    (config) => {
//      // Add authorization header with access token
//      if (accessToken) {
//        config.headers.Authorization = `Bearer ${accessToken}`;
//      }
//      return config;
//    },
//    (error) => {
//      return Promise.reject(error);
//    }
//  );
