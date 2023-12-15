import { createBrowserRouter } from "react-router-dom";
import MainPage from "../../layout/MainPage/MainPage";
import Home from "../../pages/Home/Home";

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
        element: <Home />,
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
    path: "*",
    element: <h1>404 not found</h1>,
  }
]);
