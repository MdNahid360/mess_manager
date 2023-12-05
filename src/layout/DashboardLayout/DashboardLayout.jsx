import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import DashboardNav from "../../component/DashboardComponent/DashboardNav/DashboardNav";
import { AuthContext } from "../../context/AuthProvider";

const DashboardLayout = () => {
  const { sideBarOn, setSideBarOn } = useContext(AuthContext);
  console.log(sideBarOn);
  return (
    <div>
      <DashboardNav />
      <div className="min-h-screen bg-gray-100 flex">
        {/* Sidebar */}
        <div
          className={`${
            sideBarOn
              ? "md:w-[0px] w-[80%] md:px-0 px-4 md:relative absolute"
              : "md:w-[300px] w-[0px] md:px-4 px-0"
          } bg-white text-black h-[100vh] w-1/5 py-4 duration-300 overflow-hidden`}
        >
          <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
          <ul>
            <li className="mb-2">
              <Link to="/dashboard" className="hover:underline">
                Dashboard
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/dashboard/users" className="hover:underline">
                Users
              </Link>
            </li>
          </ul>
        </div>

        <div className="bg-gray-100 p-4 text-black">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
