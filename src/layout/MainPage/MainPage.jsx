import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import Navbar from "../../component/ShardComponent/Navbar/Navbar";
import Footer from "../../component/ShardComponent/Footer/Footer";

const MainPage = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainPage;
