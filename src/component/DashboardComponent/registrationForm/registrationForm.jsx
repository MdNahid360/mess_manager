import React, { useState, useEffect } from "react";
 
const registrationForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggleForm = () => {
    setIsLogin((prevIsLogin) => !prevIsLogin);
  };
  return (
      <div className="bg-gray-100 h-screen flex items-center justify-center">
          <form className="bg-white p-4 rounded-md border md:w-[480px] w-full">
              <h2 className="text-xl text-blue-600 text-center font-bold">লগইন</h2>
              <div className="flex items-center gap-2 mt-4 relative group-button-box duration-200 bg-gray-100 p-1 rounded-xl">
                  <button className=" text-black w-[50%] g-btn-1 h-[40px] rounded-xl duration-200 z-10">Sign In</button>
                  <button className=" text-black w-[50%] g-btn-2 h-[40px] rounded-xl duration-200 z-10">Sign Up</button>
                  <div className="bg-blue-500 w-[50%] h-[76%] g-move-bg rounded-xl duration-200 absolute"></div>
              </div>
          </form>
    </div>
  );
};

export default registrationForm;
