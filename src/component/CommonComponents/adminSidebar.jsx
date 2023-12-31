import React, { useContext, useEffect, useState } from 'react';
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
} from "@material-tailwind/react";
import { AiOutlineDashboard } from "react-icons/ai";
import i1 from '../../assets/icons/001-clipbboard.png';
import i2 from '../../assets/icons/002-letter.png';
import i3 from '../../assets/icons/003-social-media.png';
import i4 from '../../assets/icons/007-team.png';
import i5 from '../../assets/icons/Rectangle 8.png';
import i6 from '../../assets/icons/Rectangle 9.png';
import i7 from '../../assets/icons/Rectangle 10.png';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Button } from "@material-tailwind/react";
import { IoPower } from 'react-icons/io5';
import { AuthContext } from '../../context/AuthProvider';


// const MyLink = ({ to, children }) => {
//     const isActive = location.pathname === to;

//     return (
//         <Link to={to} style={{ color: isActive ? 'blue' : 'black' }}>
//             {children}
//         </Link>
//     );
// };



const AdminSidebar = () => {
    const { theme } = useContext(AuthContext);
    const [isActive, setIsActive] = useState(false);
    const location = useLocation();

    const linkData = [
        {
            icon: i5,
            name: "ড্যাশবোর্ড",
            link: "/admin"
        },
        {
            icon: i6,
            name: "ম্যানেজ মিল ",
            link: "/admin/manage_meal"
        },
        {
            icon: i7,
            name: "বাজারের হিসাব ",
            link: "/admin/bazar-management"
        },
        {
            icon: i3,
            name: "ম্যানেজার পরিবর্তন ",
            link: "/admin/change_manager"
        },
        {
            icon: i4,
            name: "ম্যানেজ মেস মেম্বার ",
            link: "/admin/manage_member"
        },
        {
            icon: i2,
            name: "নোটিশ ",
            link: "/admin/notice"
        },
        {
            icon: i1,
            name: "নিয়মাবলি ",
            link: "/admin/roules"
        },
    ];
 
    return (
        <div className='flex flex-col h-[90vh] pb-10 justify-between'>
            <div>
                <div className={`${theme ? 'border-gray-700' : 'border-gray-400'} mb-2 border-b pb-2 `}>
                    <Typography variant="h5" className={`${theme ? 'text-white' : 'text-black'}`}>
                        মেনু
                    </Typography>
                </div>
                <List className='p-0'>

                    {
                        linkData?.map((itm) =>
                            // <MyLink to={itm?.link}>{itm}</MyLink>   
                        <Link
                                to={itm?.link}
                                 
                                className={
                                    location.pathname === itm?.link
                                        ? `${theme ? 'text-gray-500 bg-gray-800 hover:text-blue-400' :
                                            'text-blue-900 bg-gray-100 hover:text-blue-700  shadow-none'} mb-2 rounded w-full h-full text-sm flex items-center px-1 py-0 hover:rounded duration-200`
                                            : `${theme ? 'text-gray-500 hover:bg-gray-800 hover:text-blue-400' :
                                                'text-blue-900 hover:bg-gray-100 hover:text-blue-700 bg-transparent shadow-none'}  mb-2 rounded w-full h-full text-sm flex items-center px-1 py-0 hover:rounded duration-200`

                                }>
                                <Button className={`${theme ? '' : 'text-gray-600'} font-[600] bg-transparent w-full h-[40px] text-sm flex items-center shadow-none px-1 py-0 gap-2 hover:rounded duration-200`}>
                                    <ListItem className='flex gap-3'>
                                        <ListItemPrefix>
                                            <img src={itm?.icon} className="text-2xl" />
                                        </ListItemPrefix>
                                        {itm?.name}
                                    </ListItem>
                                </Button>
                            </Link>
                            
                            )}
                </List>
            </div>
            <button className="text-white   rounded-md hover:bg-[#347bbd]  duration-200 bg-[#158af8d5] w-full h-[40px] flex items-center justify-center gap-2">
                <IoPower className="text-lg" />
                Sign out
            </button>
        </div>
    );
};

export default AdminSidebar;