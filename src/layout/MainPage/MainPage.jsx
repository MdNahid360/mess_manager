import React, { useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import Navbar from "../../component/ShardComponent/Navbar/Navbar";
import Footer from "../../component/ShardComponent/Footer/Footer";
import logo from '../../assets/img/fabicon.png'
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import overlay from '../../assets/img/overlay.jpg'
import overlaySm from '../../assets/img/overflow_sm.jpg'
//? framer motions effect variants
const imgPup = {
  visible: {
    opacity: 0,
    scale: 0.2
  },

  hidden: { opacity: 1, scale: 1.4 },

  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: [0, 0.71, 0.2, 1.01],
    }
  }
}
const textShow = {
  visible: {
    opacity: 0,
   },

  showText: { opacity: 1,},
}

const MainPage = () => {
  const { user } = useContext(AuthContext);
  const [loader, setLoader] = useState(true);
  const [endLoad, setEndLoad] = useState(false);
  const [endOps, setEndOpa] = useState(false);
  
  setTimeout(() => {
    setLoader(false)
  }, 6000)

  setTimeout(() => {
    setEndLoad(true)
  }, 5000)

  setTimeout(() => {
    setEndOpa(true)
  }, 4000)
  return (
    <>
      {loader ?
        <AnimatePresence mode="wait">
          <motion.div
            style={{
              backgroundImage: `url('${overlay}')`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }}
            className={`${endLoad ? 'opacity-0' : 'opacity-100'} duration-500 md:flex hidden object-cover d-none fixed w-screen text-white h-screen z-[2000] items-center justify-center`}>
            <motion.div className={`${endLoad ? 'scale-[0]' : 'opacity-100'} duration-500 w-screen flex flex-col justify-center items-center gap-4`}>
              <motion.img
                variants={imgPup}
                initial="visible"
                animate="hidden"
                transition={{
                  duration: 0.3,
                  ease: [0, 0.71, 0.2, 1.01],
                  scale: {
                    type: "spring",
                    damping: 5,
                    stiffness: 100,
                    restDelta: 0.001
                  }
                }}
                exit="exit"
                src={logo} alt="" />
              <div className={`${endOps ? 'scale-[0] opacity-0 duration-200' : ''} md:mt-12 mt-8 flex items-center gap-2 md:text-2xl text-xl font-bold`}>
                <motion.h2
                  variants={textShow}
                  initial="visible"
                  animate="showText"
                  transition={{
                  duration: 0.3,
                  ease: [0, 0.71, 0.2, 1.01],
                  scale: {
                    type: "spring",
                    damping: 5,
                    stiffness: 100,
                    restDelta: 0.001
                  }
                }}
                className="text-white"> <span className="text-blue-400">মেস ম্যানেজারে</span> আপনাকে স্বাগতম </motion.h2>
              </div>
              
              {
                <div className={`${endOps ? 'opacity-0 duration-200' : ''}`}>
                   <TypeAnimation
                sequence={[  
                  'Loading....',
                  1000,
                  
                ]}
                wrapper="span"
                  speed={50}
                  className={`${endOps ? 'opacity-0 duration-300' : 'opacity-100 duration-300'} text-white block text-2xl`}
                repeat={Infinity}
              />
                </div>
              }
            
            </motion.div>
          </motion.div>
          {/* small device loader overlay */}
          <motion.div
            style={{
              backgroundImage: `url('${overlaySm}')`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }}
            className={`${endLoad ? 'opacity-0' : 'opacity-100'} duration-500 object-cover d-none fixed w-screen text-white h-screen z-[2000] md:hidden flex items-center justify-center`}>
            <motion.div className={`${endLoad ? 'scale-[0]' : 'opacity-100'} duration-500 w-screen flex flex-col justify-center items-center gap-4`}>
              <motion.img
                variants={imgPup}
                initial="visible"
                animate="hidden"
                transition={{
                  duration: 0.3,
                  ease: [0, 0.71, 0.2, 1.01],
                  scale: {
                    type: "spring",
                    damping: 5,
                    stiffness: 100,
                    restDelta: 0.001
                  }
                }}
                exit="exit"
                src={logo} alt="" />
              <div className={`${endOps ? 'scale-[0] opacity-0 duration-200' : ''} md:mt-12 mt-8 flex items-center gap-2 md:text-2xl text-xl font-bold`}>
                <motion.h2
                  variants={textShow}
                  initial="visible"
                  animate="showText"
                  transition={{
                  duration: 0.3,
                  ease: [0, 0.71, 0.2, 1.01],
                  scale: {
                    type: "spring",
                    damping: 5,
                    stiffness: 100,
                    restDelta: 0.001
                  }
                }}
                className="text-white"> <span className="text-blue-400">মেস ম্যানেজারে</span> আপনাকে স্বাগতম </motion.h2>
              </div>
              
              {
                <div className={`${endOps ? 'opacity-0 duration-200' : ''}`}>
                   <TypeAnimation
                sequence={[  
                  'Loading....',
                  1000,
                  
                ]}
                wrapper="span"
                  speed={50}
                  className={`${endOps ? 'opacity-0 duration-300' : 'opacity-100 duration-300'} text-white block text-2xl`}
                repeat={Infinity}
              />
                </div>
              }
            
            </motion.div>
          </motion.div>
        </AnimatePresence> :
        <div>
          <Navbar />

      <div className="flex h-[90vh] overflow-hidden bg-gray-100">
      {/* Sidebar */}
      <aside className="block md:relative fixed w-64 h-screen bg-white border-r overflow-y-auto lg:block">
        {/* Sidebar Content */}
        <div className="p-4">
          <h1 className="text-xl font-semibold mb-4">Dashboard</h1>
          {/* Add your sidebar links here */}
          <ul>
            <li className="mb-2">
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Dashboard
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Products
              </a>
            </li>
            {/* Add more links as needed */}
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 overflow-x-hidden overflow-y-scroll bg-gray-200 p-6">
            <Outlet /> 
        </div>
      </main>
    </div>
     </div>
      }
    </>
  );
};

export default MainPage;
