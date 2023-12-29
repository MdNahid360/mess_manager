import React, { useContext } from 'react';
import { AuthContext } from '../../../../context/AuthProvider';
import PrimaryButton from '../../../../hooks/primaryButton';
import { Datepicker, Table } from 'flowbite-react';
import { IoSearch } from "react-icons/io5";
import EditMealListModal from '../manageMealListTableRow/editMealListModal';
import ManageMealListTableRow from '../manageMealListTableRow/manageMealListTableRow';


const ManageMealList = () => {
    const { theme } = useContext(AuthContext);
    const data = [
        'hello 1',
        'hello 2',
        'hello 3'
    ];
    return (
        <div className={`${theme ? 'bg-[#14171dfa]' : 'bg-white'} rounded-lg md:p-6 p-3`}>
            <div className={`${theme ? 'bg-[#1622254d]' : 'bg-[#ffffff00]'}  rounded  pb-10 border-gray-300 p-4`}>
                <div className="flex md:flex-row flex-col md:gap-0 gap-2 items-center justify-between">
                    <h2 className={`${theme ? 'text-gray-100' : 'text-gray-900'}  font-semibold`}>
                        মিলের তালিকা
                    </h2>
                    <div className="flex  md:flex-row flex-col items-center md:gap-3 bg-red gap-2">
                        <Datepicker style={{ width: '280px', backgroundColor: theme ? '#162225fa' : 'white', color: theme ? 'white' : 'black' }} />
                        <div style={{ backgroundColor: theme ? '#162225fa' : 'white', color: theme ? 'white' : 'black', }} className={`${theme ? 'border border-gray-200' : ''} w-[280px] flex items-center rounded-lg px-2 border`}>
                            <IoSearch />
                            <input type="text" className="border-none bg-transparent focus:border-0 focus:ring-0 focus:outline-none" placeholder='Search member...' />
                        </div>
                        <PrimaryButton link={`/`} text={`+ মিল অ্যাড করুন `} variant={`${theme ? 'dark' : 'light'}`} />
                    </div>
                </div>

                <div className="overflow-x-auto w-full h-full custom-transparent-scroll mt-6">
                    <Table style={{ backgroundColor: theme ? '#283038' : '', color: theme ? 'white' : 'black', }} className={`${theme ? 'border-1 border-gray-600' : 'border-1 border-gray-300'} w-full border rounded-lg custom-transparent-scroll   mt-0`}>
                        <Table.Head className={`${theme ? 'border-gray-700 bg-gray-800' : 'border-gray-300 bg-gray-200'} border-b`}>
                            <Table.HeadCell className={` ${theme ? 'text-gray-400' : 'text-gray-700'}`}>ছবি</Table.HeadCell>
                            <Table.HeadCell className={` ${theme ? 'text-gray-400' : 'text-gray-700'}`}>নাম </Table.HeadCell>
                            <Table.HeadCell className={` ${theme ? 'text-gray-400' : 'text-gray-700'}`}>সকালের মিল </Table.HeadCell>
                            <Table.HeadCell className={` ${theme ? 'text-gray-400' : 'text-gray-700'}`}>দুপুরের মিল </Table.HeadCell>
                            <Table.HeadCell className={` ${theme ? 'text-gray-400' : 'text-gray-700'}`}>রাতের মিল </Table.HeadCell>
                            <Table.HeadCell className={` ${theme ? 'text-gray-400' : 'text-gray-700'}`}>তারিখ</Table.HeadCell>
                            <Table.HeadCell className={`text-start ${theme ? 'text-gray-400' : 'text-gray-700'}`} >অ্যাকশন</Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y p-0">
                            <div>
                                <EditMealListModal />
                            </div>
                            {
                                data?.map(data => <ManageMealListTableRow key={data} data={data} />)
                            }
                        </Table.Body>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default ManageMealList;