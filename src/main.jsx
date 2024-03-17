import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Routes from "@/routes/index";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes />
    </Router>
  </React.StrictMode>
);
