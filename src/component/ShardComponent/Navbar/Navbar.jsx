import React, { useState } from "react";
import {
  AiOutlineDashboard,
  AiOutlineHome,
  AiOutlineMenu,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <nav className="bg-white border-gray-200 border-b">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex gap-2 items-center">
            <Link to="/" className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">
                Logo
              </span>
            </Link>
          </div>
          <div className="flex items-center">
            <ul className="md:flex hidden text-black gap-4 items-center ">
              <li>
                <Link to="/" className="btn text-black text-lg px-4 py-2">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/" className="btn text-black text-lg px-4 py-2">
                  About
                </Link>
              </li>
              <li>
                <Link to="/" className="btn text-black text-lg px-4 py-2">
                  Blog
                </Link>
              </li>
            </ul>
            <button
              onClick={() => setOpen(!open)}
              className="text-black focus:ring-4 focus:ring-blue-300 md:hidden block font-medium md:ml-6 rounded-lg text-sm p-2  focus:outline-none "
            >
              <AiOutlineMenu className="text-2xl font-bold" />
            </button>
          </div>
        </div>
      </nav>
      <div
        className={`${
          open ? "h-[100vh]" : " h-0"
        } bg-[#00000032] fixed overflow-hidden duration-300 w-full`}
      >
        <div className={`bg-white text-black p-4`}>
          <ul>
            <li className="relative">
              <Link
                className=" pr-3 font-semibold py-2 rounded flex items-center gap-2"
                to="/"
              >
                <AiOutlineHome className="text-2xl " /> Home
              </Link>
            </li>
            <li className="relative mt-6">
              <Link
                className=" pr-3 font-semibold py-2 rounded flex items-center gap-2"
                to="/"
              >
                <AiOutlineDashboard className="text-2xl " /> Dashboard
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
