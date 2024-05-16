import { createBrowserRouter, RouterProvider } from "react-router-dom";
import publicRoute from "./public";
import { useAuth } from "@/hooks/useAuth";
import adminRoute from "./private/admin";
import staffRoute from "./private/staff";
import AccountType from "@/utils/authRoleConstant";
import NotAuthorized from "./private/unauthorized";

const AppRoutes = () => {
  const { userAuth } = useAuth();

  const commonRoutes = [
    {
      path: "/not-authorized",
      element: <NotAuthorized />,
    },
  ];

  const routes = createBrowserRouter([
    ...commonRoutes,
    ...(userAuth?.authenticated
      ? userAuth?.role === AccountType.Admin
        ? adminRoute
        : staffRoute
      : publicRoute),
  ]);

  return <RouterProvider router={routes} />;
};

export default AppRoutes;
