import { useEffect } from "react";
import { useNavigate, useRoutes } from "react-router-dom";
import auth from "@/utils/auth";
import privateRoute from "./private";
import publicRoute from "./public";

const Routes = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.authenticated) navigate("/");
    else navigate("/auth");

    // eslint-disable-next-line
  }, []);

  const router = auth.authenticated ? privateRoute : publicRoute;

  return useRoutes(router);
};

export default Routes;
