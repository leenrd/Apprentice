import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

const axiosInit = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
});

axiosInit.interceptors.response.use(
  (config) => {
    const token = sessionStorage.getItem("auth_token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInit;

// export const useQueryFn = (url, options) => {
//   const { accessToken } = useAuth();

//   return useQuery(
//     url,
//     async () => {
//       const { data } = await axiosInit.get(url, {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//       });

//       return data;
//     },
//     options
//   );
// };

// export const useMutationFn = (url, options) => {
//   const { accessToken } = useAuth();

//   return useMutation(
//     url,
//     async () => {
//       const { data } = await axiosInit.get(url, {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//       });

//       return data;
//     },
//     options
//   );
// };
