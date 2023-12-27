import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home/Home";
import MainPage from "../../layout/MainLayout/MainLayout";
import RegistrationLayout from "../../layout/DashboardLayout/RegistrationLayout";
import RegistrationForm from "../../component/DashboardComponent/registrationForm/registrationForm";
import ManageMeal from "../../component/DashboardComponent/manageMeal/manageMeal";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/manage_meal",
        element: <ManageMeal />,
      },
      {
        path: "/meal_calculation",
        element: <Home />,
      },
      {
        path: "/bazar_calculation",
        element: <Home />,
      },
      {
        path: "/change_manager",
        element: <Home />,
      },
      {
        path: "/manage_mess_member",
        element: <Home />,
      },
      {
        path: "/notice",
        element: <Home />,
      },
      {
        path: "/role",
        element: <Home />,
      },
    ],

  },
  {
    path: '/registration',
    element: <RegistrationLayout>
      <RegistrationForm />
    </RegistrationLayout>
  },
  {
    path: "*",
    element: <h1>404 not found</h1>,
  }
]);
