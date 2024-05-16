import Dashboard from "@/pages/private/staff/outlets/Dashboard";
import Logs from "@/pages/private/staff/outlets/Logs";
import RootPage from "@pages/private/staff/RootPage";
import RouteHook from "@/components/(auth)/RouteHook";
import StockAlerts from "@/pages/private/staff/outlets/StockAlerts";
import Items from "@/pages/private/staff/outlets/Items";

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
      {
        path: "stock-alerts",
        element: (
          <RouteHook allowedRoles={["staff"]}>
            <StockAlerts />
          </RouteHook>
        ),
      },
      {
        path: "items",
        element: (
          <RouteHook allowedRoles={["staff"]}>
            <Items />
          </RouteHook>
        ),
      },
    ],
  },
];

export default staffRoute;
