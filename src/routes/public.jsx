import FormLogIn from "@/components/(auth)/FormLogIn";
import FormSignUp from "@/components/(auth)/FormSignUp";
import AuthPage from "@/pages/AuthPage";

const publicRoute = [
  {
    path: "/auth",
    element: <AuthPage />,
    children: [
      {
        index: true,
        element: <FormLogIn />,
      },
      {
        path: "signup",
        element: <FormSignUp />,
      },
    ],
  },
];

export default publicRoute;
