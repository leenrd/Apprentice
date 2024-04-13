import Dashboard from "@/pages/private/admin/outlets/Dashboard";
import Reports from "@/pages/private/admin/outlets/Reports";
import Users from "@/pages/private/admin/outlets/Users";
import Settings from "@/pages/private/admin/Settings";
import RootPage from "@pages/private/admin/RootPage";

const adminRoute = [
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/reports",
        element: <Reports />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
  },
];

export default adminRoute;
