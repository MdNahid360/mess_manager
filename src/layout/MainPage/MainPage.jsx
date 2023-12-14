import React, { useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import Navbar from "../../component/ShardComponent/Navbar/Navbar";
import Footer from "../../component/ShardComponent/Footer/Footer";
import logo from '../../assets/img/fabicon.png'
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

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
          <motion.div className={`${endLoad ? 'opacity-0' : 'opacity-100'} duration-500 bg-[#0A1025] d-none fixed w-screen text-white h-screen z-[2000] flex items-center justify-center`}>
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
          <Outlet />
          <Footer />
        </div>
      }
    </>
  );
};

export default MainPage;
