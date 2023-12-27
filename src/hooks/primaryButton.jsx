import React from 'react';
import { Link } from 'react-router-dom';

const PrimaryButton = ({ text, link, variant }) => {
    return (
        <Link href={link}>
            <div className={`${variant == 'light' && 'bg-blue-600 text-white' || variant == 'dark' && 'bg-gray-800 text-white'} rounded-md duration-200 hover:shadow-md md:w-auto w-[280px] flex items-center justify-center px-4 py-2`}>
                {text}
            </div>
        </Link>
    );
};

export default PrimaryButton;