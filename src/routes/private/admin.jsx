import Dashboard from "@/pages/admin/outlets/Dashboard";
import Logs from "@/pages/admin/outlets/Logs";
import Users from "@/pages/admin/outlets/Users";
import Settings from "@/pages/admin/Settings";
import RootPage from "@pages/admin/RootPage";
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
