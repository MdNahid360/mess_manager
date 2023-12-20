import React, { useContext, useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import Footer from "../../component/ShardComponent/Footer/Footer";
import logo from '../../assets/img/fabicon.png'
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import overlay from '../../assets/img/overlay.jpg'
import overlaySm from '../../assets/img/overflow_sm.jpg'
import NavBar from "../../component/ShardComponent/Navbar/Navbar";
import DashboardSideMenu from "../../component/DashboardComponent/dashboardSideMenu/dashboardSideMenu";
import ReactAudioPlayer from 'react-audio-player';

import intro from '../../assets/intro.mp3'
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

  showText: { opacity: 1, },
}

const MainPage = () => {
  const { user } = useContext(AuthContext);
  const [loader, setLoader] = useState(true);
  const [endLoad, setEndLoad] = useState(false);
  const [endOps, setEndOpa] = useState(false);
  const {open, setOpen, theme} = useContext(AuthContext);

  setTimeout(() => {
    setLoader(false)
  }, 6000)
// ? time is 6s
  setTimeout(() => {
    setEndLoad(true)
  }, 5000)
// ? time is 5s
  setTimeout(() => {
    setEndOpa(true)
  }, 4000)
  // ? time is 4s
 

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
            className={`${endLoad ? 'opacity-0' : 'opacity-100'}  duration-500 md:flex hidden object-cover d-none fixed w-screen text-white h-screen z-[2000] items-center justify-center`}>
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
        <div className="overflow-hidden">
          <NavBar />

          <div className="flex lg:h-[90vh] md:h-screen overflow-hidden mt-[70px]">
            <aside className={`${open ?'lg:w-0 md:w-64 w-64':'lg:w-64 md:w-0 w-0' } ${theme ? 'bg-[#0f121c]' : 'bg-white'} duration-200 block md:relative fixed h-screen overflow-y-auto lg:block z-[2000]`}>
              <div className="p-4  ">
                 <DashboardSideMenu />
              </div>
             </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col overflow-hidden">
              <div className={`${theme ? 'bg-[#242730] text-white' : 'bg-gray-100 text-black'} duration-300 flex-1 overflow-x-hidden overflow-y-scroll  md:p-6 p-3`}>
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
