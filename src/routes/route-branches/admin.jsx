import RootPage from "@pages/private/admin/RootPage";

const adminRoute = [
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        index: true,
        element: <h1>Admin Dashboard</h1>,
      },
    ],
  },
];

export default adminRoute;
