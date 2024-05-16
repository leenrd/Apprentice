import Dashboard from "@/pages/private/staff/outlets/Dashboard";
import Logs from "@/pages/private/staff/outlets/Logs";
import RootPage from "@pages/private/staff/RootPage";
import RouteHook from "@/components/(auth)/RouteHook";

const staffRoute = [
  {
    path: "/",
    element: (
      <RouteHook allowedRoles={["staff"]}>
        <RootPage />
      </RouteHook>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "logs",
        element: (
          <RouteHook allowedRoles={["staff"]}>
            <Logs />
          </RouteHook>
        ),
      },
    ],
  },
];

export default staffRoute;
