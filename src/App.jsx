import Routes from "@/routes/index";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContextProvider } from "./hooks/useAuth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryProvider = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryProvider}>
      <AuthContextProvider>
        <Router>
          <Routes />
        </Router>
      </AuthContextProvider>
    </QueryClientProvider>
  );
}
