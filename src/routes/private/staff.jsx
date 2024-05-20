import Dashboard from "@/pages/staff/outlets/Dashboard";
import Logs from "@/pages/staff/outlets/Logs";
import RootPage from "@pages/staff/RootPage";
import StockAlerts from "@/pages/staff/outlets/StockAlerts";
import Items from "@/pages/staff/outlets/Items";
import ErrorPage from "@/components/ui/shared/ErrorPage";

const staffRoute = [
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
        path: "logs",
        element: <Logs />,
      },
      {
        path: "stock-alerts",
        element: <StockAlerts />,
      },
      {
        path: "items",
        element: <Items />,
      },
    ],
  },
];

export default staffRoute;
