import { AuthContextProvider } from "./hooks/useAuth";
import { QueryClientProvider } from "@tanstack/react-query";
import queryProvider from "./utils/queryProvider";
import AppRoutes from "./routes";

export default function App() {
  return (
    <QueryClientProvider client={queryProvider}>
      <AuthContextProvider>
        <AppRoutes />
      </AuthContextProvider>
    </QueryClientProvider>
  );
}
