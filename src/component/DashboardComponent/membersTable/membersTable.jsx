import React, { useContext } from 'react';
import { Datepicker, Table } from 'flowbite-react';
import { ButtonGroup, Button } from '@material-tailwind/react';
import { IoSearch } from "react-icons/io5";
import { AuthContext } from '../../../context/AuthProvider';
import { LiaUserEditSolid } from "react-icons/lia";
import { AiOutlineDelete } from "react-icons/ai";

const MembersTable = () => {
    const { theme } = useContext(AuthContext);
    return (
        <div className={`${theme ? 'bg-[#1622254d]' : 'bg-[#ffffff00]'} overflow-x-auto   rounded  pb-40 border-gray-300 p-4`}>
            <div className="flex md:flex-row flex-col md:gap-0 gap-2 items-center justify-between">
                <h2 className={`${theme ? 'text-gray-100' : 'text-gray-900'}  font-semibold`}>
                    মিলের তালিকা
                </h2>
                <div className="flex  md:flex-row flex-col items-center md:gap-3 bg-red gap-2">
                    <Datepicker style={{width : '280px', backgroundColor: theme ? '#162225fa' : 'white', color: theme ? 'white' : 'black' }} />
                    <div style={{ backgroundColor: theme ? '#162225fa' : 'white', color: theme ? 'white' : 'black', }} className={`${theme ? 'border border-gray-200' : ''} w-[280px] flex items-center rounded-lg px-2`}>
                        <IoSearch />
                        <input type="text" className="border-none bg-transparent focus:border-0 focus:ring-0 focus:outline-none" placeholder='Search member...' />
                    </div>
                </div>
            </div>
            <Table style={{ backgroundColor: theme ? '#283038' : '', color: theme ? 'white' : 'black', }} className={`${theme ? 'border-1 border-gray-600' : 'border-1 border-gray-300'} w-full border rounded-lg   mt-5`}>
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
                    <Table.Row className="w-full p-0">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white px-2 py-0">
                            <img src="https://avatars.githubusercontent.com/u/76812306?v=4" alt="member" className="w-[40px] h-[40px] rounded" />
                        </Table.Cell>
                        <Table.Cell className={`${theme ? 'text-gray-300' : 'text-gray-800'} whitespace-nowrap font-medium dark:text-white px-2 py-0`}>
                            {'Apple MacBook Pro 17"'}
                        </Table.Cell>
                        <Table.Cell>Sliver</Table.Cell>
                        <Table.Cell>Laptop</Table.Cell>
                        <Table.Cell>$2999</Table.Cell>
                        <Table.Cell className=''>
                            03/12/2023
                        </Table.Cell>
                        <Table.Cell className='flex items-start justify-start'>
                            <ButtonGroup color="blue">
                                <Button className='bg-[#20fcb334] text-[#28b657] shadow-none border-none p-0 flex items-center justify-center w-[50px] h-[40px]'><LiaUserEditSolid className='text-2xl' /></Button>
                                <Button className='bg-[#961b6733] text-[#ff247f] shadow-none border-none p-0 flex items-center justify-center w-[50px] h-[40px]'><AiOutlineDelete className='text-2xl' /></Button>
                            </ButtonGroup>
                        </Table.Cell>
                    </Table.Row>

                </Table.Body>
            </Table>
        </div>
    );
};

export default MembersTable;
