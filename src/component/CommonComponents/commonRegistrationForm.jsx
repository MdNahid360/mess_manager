import React, { useState, useContext } from "react";
import { Button } from "@material-tailwind/react";
import logo from '../../assets/img/fabicon.png'
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const CommonRegistrationForm = () => {
    const [isLogin, setIsLogin] = useState(true);
    const { theme } = useContext(AuthContext);
    const [signUp, setSignUp] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleToggleForm = () => {
        setIsLogin((prevIsLogin) => !prevIsLogin);
    };

    const handleTogglePassword = (e) => {
        e.preventDefault();
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    return (
        <div className={` ${theme ? 'bg-large-dark' : 'bg-large-light'} py-[5%] custom-scrollbar h-screen flex fixed w-screen items-center justify-center opacity-100 z-10 overflow-y-scroll `}>
            <div className="md:pt-20 pt-[50%]">
                <div className={`${theme ? 'bg-gray-900 text-gray-300' : 'bg-white ring-1'}  ring-gray-300 md:px-8 px-4 md:pt-0 pt-2 pb-8 mb-4 md:w-[500px] w-[92vw] `}>
                    <br />
                    <img src={logo} alt="logo" className="m-auto w-[110px] md:mt-8" />
                    <h3 className="text-lg font-semibold text-center mt-2">Mess Manager</h3><br />
                    <div className={`${theme ? 'ring-gray-600 bg-gray-800' : 'ring-gray-300 bg-gray-100'} flex items-center ring-1  gap-2 mt-3 relative group duration-200 p-1 rounded-lg`}>
                        <button
                            onClick={() => setSignUp(false)}
                            className={`${!signUp ? 'bg-gray-900 text-white' : 'text-black'} ${theme ? 'text-gray-100' : 'text-gray-700'} w-[50%] g-btn-2 md:h-[35px] h-[30px] text-sm rounded-lg duration-200 z-10`}
                        >
                            সাইন আপ
                        </button>
                        <button
                            onClick={() => setSignUp(true)}
                            className={`${signUp ? 'bg-gray-900 text-white' : 'text-black'} ${theme ? 'text-gray-100' : 'text-gray-700'} w-[50%] g-btn-2 md:h-[35px] h-[30px] text-sm rounded-lg duration-200 z-10`}
                        >
                            সাইন ইন
                        </button>
                        {/* <button
              onClick={() => setSignUp(true)}
              className={`${signUp ? 'bg-gray-900 text-white' : 'text-black'} w-[50%] g-btn-2 h-[30px] text-sm rounded-lg duration-200 z-10`}
            >
              সাইন ইন
            </button> */}
                    </div>
                    <form className="mt-4">
                        {
                            signUp && <div className="my-8">
                                <label className="block   text-sm font-regular mb-2" htmlFor="email">
                                    ই মেইল
                                </label>
                                <input
                                    className="appearance-none border rounded bg-transparent w-full py-2 px-3   leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    placeholder="ই মেইল লিখুন..."
                                />
                            </div>
                        }
                        {
                            !signUp &&

                            <div>
                                <div className="mb-4 mt-9">
                                    <label className="block text-sm font-reguler mb-2" htmlFor="username">
                                        নাম
                                    </label>
                                    <input
                                        className="appearance-none bg-transparent border rounded w-full py-2 px-3   leading-tight focus:outline-none focus:shadow-outline"
                                        id="username"
                                        type="text"
                                        placeholder="নাম লিখুন..."
                                    />
                                </div>
                                <div>
                                    <div className="grid md:grid-cols-2 my-2 grid-cols-1 gap-2">
                                        <div className="mb-4">
                                            <label className="block   text-sm font-regular mb-2" htmlFor="phone">
                                                নাম্বার
                                            </label>
                                            <input
                                                className="appearance-none border bg-transparent focus:border-2 focus:border-blue-600 border-gray-600 rounded w-full py-2 px-3   leading-tight focus:outline-none focus:shadow-outline"
                                                id="phone"
                                                type="tell"
                                                placeholder="নাম্বার লিখুন..."
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label className="block   text-sm font-regular mb-2" htmlFor="email">
                                                ই মেইল
                                            </label>
                                            <input
                                                className="appearance-none border rounded bg-transparent w-full py-2 px-3   leading-tight focus:outline-none focus:shadow-outline"
                                                id="email"
                                                type="email"
                                                placeholder="ই মেইল লিখুন..."
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <label className="block   text-sm font-regular mb-2" htmlFor="photo">
                                            ছবি
                                        </label>
                                        <input
                                            className="appearance-none border rounded bg-transparent w-full py-0 px-3   leading-tight focus:outline-none focus:shadow-outline"
                                            id="photo"
                                            type="file"
                                            placeholder="ই মেইল লিখুন..."
                                        />
                                    </div>
                                </div>
                            </div>

                        }
                        <div className="mb-2">
                            <label className="block   text-sm font-regular mb-2" htmlFor="password">
                                পাসওয়ার্ড
                            </label>
                            <div className="relative">
                                <input
                                    className="appearance-none border bg-transparent rounded w-full py-2 px-3   mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="পাসওয়ার্ড লিখুন"
                                />
                                <button
                                    className="absolute right-0 text-[14px] top-0 mt-2 mr-2"
                                    onClick={handleTogglePassword}
                                >
                                    {showPassword ? "লুকান" : "দেখুন"}
                                </button>
                            </div>
                        </div>
                        {
                            signUp && <div className={`${theme ? 'text-gray-400  hover:text-gray-300' : 'text-gray-900'} cursor-pointer duration-200 flex items-center mb-6 justify-end `}>
                                <Link href=""> পাসওয়ার্ড ভুলে গেছেন ?</Link>
                            </div>
                        }
                        {
                            !signUp ? <div className="flex items-center justify-between">
                                <Button
                                    className="bg-blue-600 w-full hover:bg-blue-700 text-white  font-[400] text-[14px] flex items-center justify-center h-[40px] px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="button"
                                >
                                    সাইন আপ
                                </Button>
                            </div> : <div className="flex items-center justify-between">
                                <Button
                                    className="bg-blue-600 w-full hover:bg-blue-700 text-white  font-[400] text-[14px] flex items-center justify-center h-[40px] px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="button"
                                >
                                    সাইন ইন
                                </Button>
                            </div>
                        }
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CommonRegistrationForm;