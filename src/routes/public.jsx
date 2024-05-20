import FormLogIn from "@/components/(auth)/FormLogIn";
import FormSignUp from "@/components/(auth)/FormSignUp";
import AuthPage from "@/pages/AuthPage";
import ErrorPage from "@/components/ui/shared/ErrorPage";

const publicRoute = [
  {
    path: "/",
    element: <AuthPage />,
    errorElement: <ErrorPage />,
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
