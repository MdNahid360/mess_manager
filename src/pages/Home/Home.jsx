import React, { useState } from "react"; 


const Home = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
 
  const closeMenu = () => setIsMenuOpen(false);
  
 
  return (
    //? max-w-screen-xl overflow-hidden bg-white m-auto py-12
    <div className="">
        <h1 className="text-xl">Hello world</h1>
    </div>
  );
};

export default Home;
