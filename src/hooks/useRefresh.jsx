import { useQuery } from "@tanstack/react-query";
import { refreshAccessToken } from "@/utils/axiosInstance";
import queryProvider from "@/utils/queryProvider";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";

const useRefresh = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  useQuery("refreshToken", refreshAccessToken, {
    refetchOnWindowFocus: false,
    staleTime: Infinity, // The refresh token query doesn't need to refetch
    retry: false,
    onSuccess: (data) => {
      queryProvider.setQueryData("accessToken", data.accessToken);
    },
    onError: (error) => {
      console.error("Failed to refresh token", error);
      logout();
      navigate("/", { replace: true });
    },
  });
};

export default useRefresh;
