import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home/Home";
import MainPage from "../../layout/MainLayout/MainLayout";
import RegistrationLayout from "../../layout/DashboardLayout/RegistrationLayout";
import CommonRegistrationForm from "../../component/CommonComponents/commonRegistrationForm";
import ManageMealList from "../../component/CommonComponents/admin/manageMealList/manageMealList";

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
        element: <ManageMealList />,
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
      <CommonRegistrationForm />
    </RegistrationLayout>
  },
  {
    path: "*",
    element: <h1>404 not found</h1>,
  }
]);
