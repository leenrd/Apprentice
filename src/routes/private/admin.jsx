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
        element: (
          <RouteHook allowedRoles={["admin"]}>
            <Users />
          </RouteHook>
        ),
      },
      {
        path: "logs",
        element: (
          <RouteHook allowedRoles={["admin"]}>
            <Logs />
          </RouteHook>
        ),
      },
      {
        path: "settings",
        element: (
          <RouteHook allowedRoles={["admin"]}>
            <Settings />
          </RouteHook>
        ),
      },
    ],
  },
];

export default adminRoute;
