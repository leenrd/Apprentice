import Dashboard from "@/pages/admin/outlets/Dashboard";
import Logs from "@/pages/admin/outlets/Logs";
import Users from "@/pages/admin/outlets/Users";
import Settings from "@/pages/admin/Settings";
import RootPage from "@pages/admin/RootPage";
import ErrorPage from "@/components/ui/shared/ErrorPage";
import Warehouse from "@/pages/admin/outlets/Warehouse";

const adminRoute = [
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <RootPage />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "global-logs",
        element: <Logs />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "warehouse/:id",
        element: <Warehouse />,
      },
    ],
  },
];

export default adminRoute;
