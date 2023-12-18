import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const DisplayCart = (props) => {
    const { img, subtitle, bg, color, price, link } = props;
    const { theme } = useContext(AuthContext);

    return (
        <div style={{ backgroundColor: bg }} className={` h-[155px] p-5 flex gap-4 justify-start items-center`}>
            {<img src={img} alt="icon" className="w-[80px]" />}
            <div className="">
                {price && <h1 style={{ color: color }} className={`md:text-[1.70rem] text-4xl font-bold  `}>$ 5000</h1>}
                <h5 className={`${theme ? 'text-white' : 'text-gray-700'} pt-2 pb-4`}>{subtitle}</h5>
                {link && <Link href={link} className="px-6 py-1 rounded mt-6 text-white bg-blue-600">দেখুন</Link>}
            </div>
        </div>
    );
};

export default DisplayCart;