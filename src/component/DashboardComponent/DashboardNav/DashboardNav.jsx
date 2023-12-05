import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import { AiOutlineMenu } from "react-icons/ai";

const DashboardNav = () => {
  const [open, setOpen] = useState(false);
  const { sideBarOn, setSideBarOn } = useContext(AuthContext);
  return (
    <div>
      <nav className="bg-white border-gray-200  border-b">
        <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex gap-2 items-center">
            <button
              onClick={() => setSideBarOn(!sideBarOn)}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm p-2  focus:outline-none "
            >
              <AiOutlineMenu className="text-xl font-bold" />
            </button>
            <Link to="/" className="flex items-center">
              <span className="self-center text-3xl font-semibold whitespace-nowrap text-black">
                Logo
              </span>
            </Link>
          </div>
          <ul className="flex text-black gap-4 items-center md:order-2">
            <li>
              <Link
                to="/"
                className="btn text-white bg-[blue] px-4 py-2 rounded-md"
              >
                Home
              </Link>
            </li>
            <li>
              <button
                type="button"
                className="flex mr-3 text-sm bg-white rounded-full md:mr-0 focus:ring-4  "
                id="user-menu-button"
                aria-expanded="false"
                data-dropdown-toggle="user-dropdown"
                data-dropdown-placement="bottom"
              >
                <span className="sr-only">Open user menu</span>
                <img
                  onClick={() => setOpen(!open)}
                  className="w-10 h-10 rounded-full border-2 border-[#00aeff]"
                  src="https://avatars.githubusercontent.com/u/76812306?v=4"
                  alt="user photo"
                />
              </button>
              <div
                className={`${
                  open ? "block" : "hidden"
                } z-50 absolute top-[48px] w-[200px] right-[1%] my-4 text-base  bg-white divide-y divide-gray-100 rounded-lg shadow-lg border  "
              id="user-dropdown`}
              >
                <div className="px-4 py-3">
                  <span className="block text-sm text-gray-900 ">
                    Bonnie Green
                  </span>
                  <span className="block text-sm  text-gray-500 truncate ">
                    name@flowbite.com
                  </span>
                </div>
                <ul className="py-2" aria-labelledby="user-menu-button">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                    >
                      Earnings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default DashboardNav;
