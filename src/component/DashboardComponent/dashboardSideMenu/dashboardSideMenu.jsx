import React, { useContext } from 'react';
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
import i1 from '../../../assets/icons/001-clipbboard.png';
import i2 from '../../../assets/icons/002-letter.png';
import i3 from '../../../assets/icons/003-social-media.png';
import i4 from '../../../assets/icons/007-team.png';
import i5 from '../../../assets/icons/Rectangle 8.png';
import i6 from '../../../assets/icons/Rectangle 9.png';
import i7 from '../../../assets/icons/Rectangle 10.png';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import { Button } from "@material-tailwind/react";
import { IoPower } from 'react-icons/io5';

const DashboardSideMenu = () => {
    const { theme } = useContext(AuthContext);
    const linkData = [
        {
            icon: i5,
            name: "ড্যাশবোর্ড",
            link: "/"
        },
        {
            icon: i6,
            name: "ম্যানেজ মিল ",
            link: "/manage_meal"
        },
        {
            icon: i7,
            name: "বাজারের হিসাব ",
            link: "/manage_meal"
        },
        {
            icon: i3,
            name: "ম্যানেজার পরিবর্তন ",
            link: "/manage_meal"
        },
        {
            icon: i4,
            name: "ম্যানেজ মেস মেম্বার ",
            link: "/"
        },
        {
            icon: i2,
            name: "নোটিশ ",
            link: "/"
        },
        {
            icon: i1,
            name: "নিয়মাবলি ",
            link: "/"
        },
    ]
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
                                    <Link className='w-full  relative h-[40px] rounded-xl mt-2' key={itm?.icon} to={itm?.link}>
                                        <Button className={`${theme ? 'text-gray-500 hover:bg-gray-800 hover:text-blue-400' : 'text-blue-900 hover:bg-gray-100 hover:text-blue-700 bg-transparent shadow-none'} w-full h-full text-sm mb-3 flex items-center px-1 py-0  gap-2 hover:rounded duration-200`}>
                                            <ListItem className='flex gap-3'>
                                                <ListItemPrefix>
                                                    <img src={itm?.icon} className="text-2xl" />
                                                </ListItemPrefix>
                                                {itm?.name}
                                            </ListItem>
                                        </Button>
                                    </Link>
                                )
                            }
                        </List>
            </div>
            <button className="text-white   rounded-md hover:bg-[#ff0040]  duration-200 bg-[#ff0040be] w-full h-[40px] flex items-center justify-center gap-2">
                  <IoPower className="text-lg" />
                  Sign out
                </button>            
        </div>
    );
};

export default DashboardSideMenu;