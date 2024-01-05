import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../context/AuthProvider';
import PrimaryButton from '../../../../hooks/primaryButton';
import { Datepicker, Table } from 'flowbite-react';
import { IoSearch } from "react-icons/io5";
import EditMealListModal from '../manageMealList/editMealListModal';
import ManageMealListTableRow from '../manageMealList/manageMealListTableRow';
import ReactPaginate from 'react-paginate';
import AdminMealListModal from './bazarListModal';
import AdminEditMealListModal from './bazarEditListModal';
import BazarEditListModal from './bazarEditListModal';
import BazarListModal from './bazarListModal';
import BazarManagementListTableRow from './bazarManagementListTableRow';

const BazarManagementList = () => {
    const { theme } = useContext(AuthContext);
    const [openModal, setOpenModal] = useState(false);
    const [userData, setUserData] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [searchValue, setSearchValue] = useState('');

    const itemsPerPage = 6;
    const pageCount = Math.ceil(userData.length / itemsPerPage);
    const offset = currentPage * itemsPerPage;
    const currentData = userData.slice(offset, offset + itemsPerPage);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(data => setUserData(data))
    }, [])

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    const handleSearch = (e) => {
        setSearchValue(e.target.value);
    };

    const filteredData = currentData.filter(data => data?.title.toLowerCase().includes(searchValue.toLowerCase()));

    console.log(filteredData);
    return (
        <div className={`${theme ? 'bg-[#14171dfa]' : 'bg-white'} rounded-lg md:p-6 p-3`}>
            <div className={`${theme ? 'bg-[#1622254d]' : 'bg-[#ffffff00]'}  rounded  pb-10 border-gray-300 p-4`}>
                <div className="flex md:flex-row flex-col md:gap-0 gap-2 items-center justify-between">
                    <h2 className={`${theme ? 'text-gray-100' : 'text-gray-900'}  font-semibold`}>
                        বাজার তালিকা
                    </h2>
                    <div className="flex  md:flex-row flex-col items-center md:gap-3 bg-red gap-2">
                        <Datepicker style={{ width: '280px', backgroundColor: theme ? '#162225fa' : 'white', color: theme ? 'white' : 'black' }} />
                        <div style={{ backgroundColor: theme ? '#162225fa' : 'white', color: theme ? 'white' : 'black', }} className={`${theme ? 'border border-gray-200' : ''} w-[280px] flex items-center rounded-lg px-2 border`}>
                            <IoSearch />
                            <input type="text" className="border-none bg-transparent focus:border-0 focus:ring-0 focus:outline-none" placeholder='Search member...' onChange={handleSearch} />
                        </div>
                        <div onClick={() => setOpenModal(!openModal)}>
                            <PrimaryButton link={`/`} text={`+ বাজার যোগ করুন `} variant={`${theme ? 'dark' : 'light'}`} />
                        </div>
                        <BazarListModal setOpenModal={setOpenModal} openModal={openModal} />
                    </div>
                </div>

                <div className="overflow-x-auto w-full h-full custom-transparent-scroll mt-6">
                    <Table style={{ backgroundColor: theme ? '#283038' : '', color: theme ? 'white' : 'black', }} className={`${theme ? 'border-1 border-gray-600' : 'border-1 border-gray-300'} w-full border rounded-lg custom-transparent-scroll   mt-0`}>
                        <Table.Head className={`${theme ? 'border-gray-700 bg-gray-800' : 'border-gray-300 bg-gray-200'} border-b`}>
                            <Table.HeadCell className={` ${theme ? 'text-gray-400' : 'text-gray-700'}`}>ছবি</Table.HeadCell>
                            <Table.HeadCell className={` ${theme ? 'text-gray-400' : 'text-gray-700'}`}>নাম  </Table.HeadCell>
                            <Table.HeadCell className={` ${theme ? 'text-gray-400' : 'text-gray-700'}`}>বাজারসমূহ </Table.HeadCell>
                            <Table.HeadCell className={` ${theme ? 'text-gray-400' : 'text-gray-700'}`}>তারিখ </Table.HeadCell>
                            <Table.HeadCell className={` ${theme ? 'text-gray-400' : 'text-gray-700'}`}>স্ট্যাটাস</Table.HeadCell>
                            <Table.HeadCell className={`text-start ${theme ? 'text-gray-400' : 'text-gray-700'}`} >অ্যাকশন</Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y p-0">
                            <div>
                                <BazarEditListModal />
                            </div>
                            {filteredData.map(data => (
                                <BazarManagementListTableRow key={data.id} data={data} />
                            ))}
                        </Table.Body>
                    </Table>
                    <div className="flex justify-center mt-4 ">
                        <ReactPaginate
                            previousLabel={<span className="flex bg-blue-600 text-white w-auto px-3 h-[40px] text-sm rounded-md items-center text-center">Previous</span>}
                            nextLabel={<span className="flex bg-blue-600 text-white w-auto px-3 h-[40px] text-sm rounded-md items-center text-center">Next</span>}
                            pageCount={pageCount}
                            onPageChange={handlePageChange}
                            containerClassName={'pagination centered-pagination'}
                            previousLinkClassName={'pagination__link'}
                            nextLinkClassName={'pagination__link'}
                            disabledClassName={'pagination__link--disabled'}
                            activeClassName={'pagination__link--active'}
                            pageClassName={'pagination__page'}
                            pageLinkClassName={'pagination__link'}
                            style={{ backgroundColor: theme ? 'red' : 'blue', color: theme ? 'white' : 'black', transform: 'translateX(-50%)' }}
                            breakClassName={'pagination__break'}
                            breakLinkClassName={'pagination__link'}
                        />
                    </div>

                </div>
            </div>


        </div>
    );
};

export default BazarManagementList;