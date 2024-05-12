import { useEffect } from "react";
import { useNavigate, useRoutes } from "react-router-dom";
import publicRoute from "./public";
import { useAuth } from "@/hooks/useAuth";
import adminRoute from "./private/admin";
import staffRoute from "./private/staff";
import AccountType from "@/utils/authRoleConstant";

const Routes = () => {
  const navigate = useNavigate();
  const { userAuth } = useAuth();

  useEffect(() => {
    if (userAuth.authenticated) navigate("/");
    else navigate("/auth");

    // eslint-disable-next-line
  }, []);

  const privateRoute =
    userAuth.accountType === AccountType.Admin ? adminRoute : staffRoute;

  const router = userAuth.authenticated ? privateRoute : publicRoute;
  return useRoutes(router);
};

export default Routes;
