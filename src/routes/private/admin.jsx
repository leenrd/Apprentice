import Dashboard from "@/pages/private/admin/outlets/Dashboard";
import Logs from "@/pages/private/admin/outlets/Logs";
import Users from "@/pages/private/admin/outlets/Users";
import Settings from "@/pages/private/admin/Settings";
import RootPage from "@pages/private/admin/RootPage";
import RouteHook from "@/components/(auth)/RouteHook";

const adminRoute = [
  {
    path: "/",
    element: (
      <RouteHook allowedRoles={["admin"]}>
        <RootPage />
      </RouteHook>
    ),
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
        path: "logs",
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
