import Dashboard from "@/pages/admin/outlets/Dashboard";
import Logs from "@/pages/admin/outlets/Logs";
import Users from "@/pages/admin/outlets/Users";
import Settings from "@/pages/admin/Settings";
import RootPage from "@pages/admin/RootPage";
import ErrorPage from "@/components/ui/shared/ErrorPage";

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
    ],
  },
];

export default adminRoute;
