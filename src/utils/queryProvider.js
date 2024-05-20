import { QueryClient } from "@tanstack/react-query";

const queryProvider = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 300000,
    },
  },
});

export default queryProvider;
