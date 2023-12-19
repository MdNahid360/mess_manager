import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const DisplayCart = (props) => {
    const { img, subtitle, bg, color, price, link } = props;
    const { theme } = useContext(AuthContext);

    return (
        <div style={{ backgroundColor: bg }} className={` md:h-[155px] h-[130px] p-5 flex md:gap-4 gap-2 justify-start items-center`}>
            {<img src={img} alt="icon" className="md:w-[80px] w-[60px]" />}
            <div className="">
                {price && <h1 style={{ color: color }} className={`md:text-[1.70rem] text-[1.60rem] font-bold  `}>$ 5000</h1>}
                <h5 className={`${theme ? 'text-white' : 'text-gray-700'} pt-0 pb-4`}>{subtitle}</h5>
                {link && <Link href={link} className="px-6 py-1 rounded mt-6 text-white bg-blue-600">দেখুন</Link>}
            </div>
        </div>
    );
};

export default DisplayCart;