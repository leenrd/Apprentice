import RootPage from "@pages/private/staff/RootPage";

const staffRoute = [
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        index: true,
        element: <h1>Staff Dashboard</h1>,
      },
    ],
  },
];

export default staffRoute;
