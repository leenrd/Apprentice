import Dashboard from "@/pages/private/staff/outlets/Dashboard";
import Logs from "@/pages/private/staff/outlets/Logs";
import RootPage from "@pages/private/staff/RootPage";

const staffRoute = [
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/logs",
        element: <Logs />,
      },
    ],
  },
];

export default staffRoute;
