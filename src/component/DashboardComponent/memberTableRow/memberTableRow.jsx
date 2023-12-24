import React, { useContext, useState } from 'react';
import { Datepicker, Table } from 'flowbite-react';
import { ButtonGroup, Button } from '@material-tailwind/react';
import { IoSearch } from "react-icons/io5";
import { AuthContext } from '../../../context/AuthProvider';
import { LiaUserEditSolid } from "react-icons/lia";
import { AiOutlineDelete } from "react-icons/ai";
import TableModal from '../tableModal/tableModal';
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";


const MemberTableRow = ({data}) => {
    const { theme, tModalOpen, setTModalOpen, } = useContext(AuthContext);
      const [open, setOpen] = useState(false);
 
    const handleOpen = () => setOpen(!open);
   
    return (
        <>
             
            {/* <TableModal open={open} setOpen={setOpen} data={data} /> */}
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
                    <Button onClick={handleOpen} className='bg-[#20fcb334] text-[#28b657] shadow-none border-none p-0 flex items-center justify-center w-[50px] h-[40px]'><LiaUserEditSolid className='text-2xl' /></Button>
                    <Button className='bg-[#961b6733] text-[#ff247f] shadow-none border-none p-0 flex items-center justify-center w-[50px] h-[40px]'><AiOutlineDelete className='text-2xl' /></Button>
                </ButtonGroup>
            </Table.Cell>
        </Table.Row>
        </>
       
    );
};

export default MemberTableRow;