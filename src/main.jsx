import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routers/Route/Route.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <RouterProvider router={router}>
        <App />
      </RouterProvider>
      </ThemeProvider>
      
    </AuthProvider>
  </React.StrictMode>
);
