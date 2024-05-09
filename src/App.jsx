import Routes from "@/routes/index";
import { BrowserRouter as Router } from "react-router-dom";
import AuthContextProvider from "./hooks/useAuth";

export default function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Routes />
      </Router>
    </AuthContextProvider>
  );
}
