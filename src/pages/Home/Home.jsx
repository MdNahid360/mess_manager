import React, { useEffect, useRef, useState } from "react"; 
import DisplayCart from "../../component/DashboardComponent/displayCart/displayCart";
import deposit from '../../assets/img/dashboardCart/004-savings.png'
import member from '../../assets/img/dashboardCart/004-savings.png'
import meal from '../../assets/img/dashboardCart/004-savings.png'
import market from '../../assets/img/dashboardCart/004-savings.png'
import perMeal from '../../assets/img/dashboardCart/004-savings.png'
import houseKeeper from '../../assets/img/dashboardCart/004-savings.png' 
import MembersTable from "../../component/DashboardComponent/membersTable/membersTable";
 

 const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const displayVector = [
    "https://i.ibb.co/rcT6sbX/004-savings.png",
    "https://i.ibb.co/gtn9tGH/002-team.png",
    "https://i.ibb.co/JK7j3mm/001-food-delivery.png",
    "https://i.ibb.co/1THxWxZ/008-cooking.png",
    "https://i.ibb.co/HtXK0jG/007-eating.png",
    "https://i.ibb.co/WDPdRGY/006-meal.png",
    "https://i.ibb.co/gSDZcgx/005-wallet.png"
  ]
 
  return (
    //? max-w-screen-xl overflow-hidden bg-white m-auto py-12
    <div className="">
      {/*? content */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
        <div className="">
          <DisplayCart
            img={displayVector[0]}
            subtitle="মোট জমা"
            price="5000"
            bg="#f3205f11"
            color="#ff0062"
          />  
        </div>
        <div className="">
          <DisplayCart
            img={displayVector[1]}
            subtitle="মোট সদস্য "
            price="5000"
            bg="#0b60c11f"
            color="#1059E7"
          />  
        </div>
        <div className="">
          <DisplayCart
            img={displayVector[5]}
            subtitle="মোট মিল "
            price="5000"
            bg="#22f40014"
            color="#22F400"
          />  
        </div>
        <div className="">
          <DisplayCart
            img={displayVector[4]}
            subtitle="প্রতি মিল"
            price="5000"
            bg="#00fca138"
            color="#09d189"
          />  
        </div>
        <div className="">
          <DisplayCart
            img={displayVector[2]}
            subtitle="মোট বাজার  "
            price="5000"
            bg="#ffd60024"
            color="#ffac00"
          />  
        </div>
        <div className="">
          <DisplayCart
            img={displayVector[3]}
            subtitle="বোয়া বিলের হিসাব"
            bg="#9013f31f"
            color="#ff0062"
            link="/made_management"
          />  
        </div>
       
      </div>
      {/* 2nd content */} 
      <br />
   
{/* 
      <MembersTable /> */}
    </div>
  );
};

export default Home;
