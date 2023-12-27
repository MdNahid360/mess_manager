import { Datepicker } from 'flowbite-react';
import React, { useContext } from 'react';
import { IoSearch } from 'react-icons/io5';
import { AuthContext } from '../../../context/AuthProvider';
import PrimaryButton from '../../../hooks/primaryButton';

const ManageMeal = () => {
    const { theme } = useContext(AuthContext)
    return (
        <div className={`${theme ? 'bg-[#14171dfa]' : 'bg-white'} rounded-lg md:p-6 p-3`}>
            <div className="flex md:flex-row flex-col border-b pb-4 border-[#8080802d] md:gap-0 gap-2 items-center justify-between">
                <PrimaryButton link={`/`} text={`+ মিল অ্যাড করুন `} variant={`${theme ? 'dark' : 'light'}`} />
                <div className="flex  md:flex-row flex-col items-center md:gap-3 bg-red gap-2">
                    <Datepicker style={{ width: '280px', backgroundColor: theme ? '#162225fa' : 'white', color: theme ? 'white' : 'black' }} />
                    <div style={{ backgroundColor: theme ? '#162225fa' : 'white', color: theme ? 'white' : 'black', }} className={`${theme ? 'border border-gray-200' : ''} w-[280px] flex items-center rounded-lg px-2 border`}>
                        <IoSearch />
                        <input type="text" className="border-none bg-transparent focus:border-0 focus:ring-0 focus:outline-none" placeholder='Search member...' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageMeal;