import { AuthContextProvider } from "./hooks/useAuth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppRoutes from "./routes";

const queryProvider = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryProvider}>
      <AuthContextProvider>
        <AppRoutes />
      </AuthContextProvider>
    </QueryClientProvider>
  );
}
