import FormLogIn from "@/components/(auth-outlets)/FormLogIn";
import FormSignUp from "@/components/(auth-outlets)/FormSignUp";
import AuthPage from "@/pages/public/AuthPage";

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
