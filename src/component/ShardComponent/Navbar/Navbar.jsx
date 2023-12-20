import React, { useContext, useState } from "react";
import {
  AiOutlineMenu,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from '../../../assets/img/logo.png';
import logoLight from '../../../assets/img/Group 82.png';
import { IoMdClose } from "react-icons/io";
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { AuthContext } from "../../../context/AuthProvider";
import { FaRegUser } from "react-icons/fa";
import { IconButton } from "@material-tailwind/react";
import { BsMoonStars } from "react-icons/bs";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoPower } from "react-icons/io5";

const NavBar = () => {
  const { open, setOpen, themeButton, setThemeButton, themeAction, theme,setTheme } = useContext(AuthContext);
  const darkMode = () => {
    setThemeButton(!themeButton)
    themeAction('dark')
  }
  const lightMode = () => {
    setThemeButton(!themeButton)
    themeAction('light')
  }
  return (
    <div>
      <nav className={`${theme ? 'bg-[#191d29] border-gray-700' : 'bg-white border-gray-100'} duration-300 border-gray-200 fixed w-full mt-0 z-[3000] border-b`}>
        <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex gap-2 items-center">
            <Link to="/" className="flex items-center">
             {theme ? <img className={` md:w-[140px] w-[120px]`} src={logoLight} alt="logo" /> : <img className={` md:w-[14f0px] w-[120px]`} src={logo} alt="logo" />}
            </Link>
          </div>
          <div className="flex items-center">
            <ul className="flex text-black gap-4 items-center ">
              <li>
                {
                  !theme ?  <IconButton onClick={darkMode} className={`${theme ? 'bg-[#ffffff0c] text-blue-400' : ''}  relative rounded-full mr-3`}>
                      <BsMoonStars className="text-lg   w-full h-full" /> 
                </IconButton> :  <IconButton onClick={lightMode} className={`${theme ? 'bg-[#ffffff0c] text-blue-400' : ''}  relative rounded-full mr-3`}>
                    <MdOutlineWbSunny className="text-lg  w-full h-full" />
                </IconButton>
                }
              </li>
              
            </ul>

            <Dropdown
              className={`${theme ? 'bg-[#1b232c] text-white  border border-gray-700' : 'bg-white text-black shadow-[#b8b6b6]'} px-2 pb-2   w-[240px] shadow-xl `}
              arrowIcon={false}
              inline
              label={
                <div className="flex items-center gap-2 ">
                  <Avatar className={`${theme ? 'border border-dashed border-blue-500' : ''} rounded-full`} alt="User settings" img="https://avatars.githubusercontent.com/u/76812306?v=4" rounded />
                   {/* <span className="flex flex-col gap-0 items-start">
                    <h5 className={theme ? 'text-gray-200' : 'text-black' }> Nahid</h5>
                    <p className="text-[13px] text-gray-400">Manager</p>
                  </span> */}
                </div>
              }
            >
              <Dropdown.Header  className="pb-1">
                <img src="https://avatars.githubusercontent.com/u/76812306?v=4" className="w-[80px] border border-dashed border-blue-500 rounded-md m-auto h-[80px]" alt="" />
                <div className="text-center mt-2">
                    <span className={`${theme ? 'text-white' : 'text-black'} block truncate text-md font-medium`}>Md Nahid</span>
                <span className={`${theme ? 'text-gray-400' : 'text-gray-600'} block  text-sm`}>nahid@gmail.com</span>
              </div>
              </Dropdown.Header>
               
              <Dropdown.Item className="p-0 rounded-md mt-3"><button className="text-white rounded-md hover:bg-blue-600 duration-200 bg-blue-500 w-full h-[40px] flex items-center justify-center px-3 gap-2"><FaRegUser className="text-md" /> Profile</button></Dropdown.Item>
              <Dropdown.Item className="p-0 rounded-md mt-2">
                <button className="text-white rounded-md hover:bg-[#ff0040]  duration-200 bg-[#ff0040be] w-full h-[40px] flex items-center justify-center gap-2">
                  <IoPower className="text-lg" />
                  Sign out
                </button>
              </Dropdown.Item>
            </Dropdown>

            <button
              onClick={() => setOpen(!open)}
              className="focus:ring-4 ml-3 focus:ring-transparent lg:hidden block font-medium md:ml-6 rounded-lg text-sm p-2 focus:shadow-none focus:border-none focus:outline-none ">
              {
                !open ? <AiOutlineMenu className={`${theme ? 'text-white' : 'text-black'} text-2xl font-bold`} /> : <IoMdClose className={`${theme ? 'text-white' : 'text-black'} text-2xl font-bold`} />
              }

            </button>
          </div>
        </div>
      </nav>

    </div>
  );
};

export default NavBar;
