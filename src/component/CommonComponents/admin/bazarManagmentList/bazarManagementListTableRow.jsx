import React, { useContext, useState } from 'react';
import { Datepicker, Table } from 'flowbite-react';
import { ButtonGroup, Button } from '@material-tailwind/react';
import { IoClose, IoCheckmark } from "react-icons/io5";
import { LiaUserEditSolid } from "react-icons/lia";
import { AiOutlineDelete } from "react-icons/ai";
import {
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import { AuthContext } from '../../../../context/AuthProvider';
import AdminEditMealListModal from './bazarEditListModal';
import { BsCheck } from 'react-icons/bs';


const BazarManagementListTableRow = ({ data }) => {
    const { theme, tModalOpen, setTModalOpen, } = useContext(AuthContext);
    const [openModal, setOpenModal] = useState(false);
    const [status, setStatus] = useState(false);
    return (
        <>
            <AdminEditMealListModal openModal={openModal} setOpenModal={setOpenModal} data="hello js" />
            <Table.Row className="w-full p-0">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white px-2 py-0">
                    <img src={`https://randomuser.me/api/portraits/men/${data?.id}.jpg`} className='w-16 rounded-md' /> kjhgfd
                </Table.Cell>
                <Table.Cell className={`${theme ? 'text-gray-300' : 'text-gray-800'} whitespace-wrap font-medium dark:text-white px-2 py-0`}>
                    {data?.title}
                </Table.Cell>
                <Table.Cell>Laptop</Table.Cell>
                <Table.Cell>$2999</Table.Cell>
                <Table.Cell className=''>
                    <div className="flex items-center justify-center">
                        {!status ? <Button onClick={() => setStatus(true)} className='bg-[#20fcb334] text-[#28b657] shadow-none border-none p-0 flex items-center justify-center w-[70px] h-[30px] font-[400] '><BsCheck className='text-2xl' /> গ্রহণ </Button>
                            :
                            <Button onClick={() => setStatus(false)} className='bg-[#961b6733] text-[#ff247f] shadow-none border-none p-0 flex items-center justify-center w-[80px] h-[30px] font-[400]'><IoClose className='text-xl' /> বাতিল </Button>
                        }
                    </div>
                </Table.Cell>
                <Table.Cell className='flex items-start justify-start'>
                    <ButtonGroup color="blue">
                        <Button onClick={() => setOpenModal(!openModal)} className='bg-[#20fcb334] text-[#28b657] shadow-none border-none p-0 flex items-center justify-center w-[50px] h-[40px]'><LiaUserEditSolid className='text-2xl' /></Button>
                        <Button className='bg-[#961b6733] text-[#ff247f] shadow-none border-none p-0 flex items-center justify-center w-[50px] h-[40px]'><AiOutlineDelete className='text-2xl' /></Button>
                    </ButtonGroup>
                </Table.Cell>
            </Table.Row>
        </>

    );
};

export default BazarManagementListTableRow;