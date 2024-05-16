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

export const LoginHelperFn = (data) => {
  return axios.post(`${API_BASE_URL}/auth/login`, data);
};
