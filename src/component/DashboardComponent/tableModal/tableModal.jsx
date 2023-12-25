import React, { useContext } from 'react';
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Input
} from "@material-tailwind/react";
import { Modal } from 'flowbite-react';

import { AuthContext } from '../../../context/AuthProvider';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { IoCamera, IoExpandOutline } from 'react-icons/io5';
import { FaRegEdit } from 'react-icons/fa';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/dist/sweetalert2.css';

const TableModal = ({ openModal, setOpenModal, data }) => {
 const { theme } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('clickeddddddd');
        Swal.fire({
            title: "",
            text: "user data update successfully",
            icon: "success"
        }).then(() => {
            setOpenModal(false);
        });
    };
    return (
       
        <Modal className=' md:pt-[4%] pt-[10%] w-[100vw] h-[100vh] flex flex-col relative justify-center items-center z-50' show={openModal} onClose={() => setOpenModal(false)}>
            <form onSubmit={handleSubmit} className=" ">
                           <Modal.Header>
                      <div className="md:w-[140px] w-[100px] md:h-[140px] h-[100px]  hover-box duration-200  rounded-full border-2 relative  border-gray-400">
                                <img src="https://avatars.githubusercontent.com/u/76812306?v=4" alt="member" className="object-cover w-full rounded-full h-full" />
                                <div className='overflow-hidden opacity-0 hover-target duration-200 absolute w-full h-full bg-[#000000c3] rounded-full top-0 left-0 bottom-0 right-0 flex items-center justify-center cursor-pointer'>
                                    <IoCamera className='text-3xl opacity-[0.9] cursor-pointer' />
                                    <input name='photo' type="file" className='absolute opacity-0 w-full h-full cursor-pointer' />
                                </div>
                            </div>
        </Modal.Header>
        <Modal.Body>
              <div className=''>
                              {/* items #4 */}
                            <div className="flex flex-col ">
                                <label for="text" className="mb-2 text-sm">নাম</label>
                                <input name='name' placeholder='নাম লিখুন ' defaultValue={`নাম.....`} type="text" id="text" className="w-full  rounded-md border py-2 bg-[#2e424e9c]  backdrop-blur-md border-blue-600 px-2  hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40" />
                            </div>
                            {/* items # */}
                            <div className="flex flex-col mt-6">
                                <label for="text" className="mb-2 text-sm">তারিখ</label>
                                <input name='date' placeholder='তারিখ লিখুন ' defaultValue={`12/24/2023`} type="date" id="text" className="w-full  rounded-md border py-2 bg-[#2e424e9c]  backdrop-blur-md border-blue-600 px-2  hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40" />
                            </div>
                            <div className="grid md:grid-cols-3 grid-cols-1 w-full gap-3  mt-3">
                                   {/* items #1 */}
                            <div className="flex flex-col mt-6">
                                <label for="text" className="mb-2 text-sm">সকালের মিল</label>
                                <input name='breakfast' placeholder='সকালের মিল  ' defaultValue={`সকালের মিল.....`} type="number" id="text" className="w-full  rounded-md border py-2 bg-[#2e424e9c]  backdrop-blur-md border-blue-600 px-2  hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40" />
                            </div>
                            {/* items #2 */}
                            <div className="flex flex-col mt-6">
                                <label for="text" className="mb-2 text-sm">দুপুরের মিল</label>
                                <input name='lunch' placeholder='দুপুরের মিল  ' defaultValue={`দুপুরের মিল.....`} type="number" id="text" className="w-full  rounded-md border py-2 bg-[#2e424e9c]  backdrop-blur-md border-blue-600 px-2  hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40" />
                            </div>
                            {/* items #3 */}
                            <div className="flex flex-col mt-6">
                                <label for="text" className="mb-2 text-sm">রাতের মিল	</label>
                                <input name='dinner' placeholder='রাতের মিল  ' defaultValue={`রাতের মিল	.....`} type="number" id="text" className="w-full  rounded-md border py-2 bg-[#2e424e9c]  backdrop-blur-md border-blue-600 px-2  hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40" />
                            </div>
                            </div>
                         
                          
                        </div>
        </Modal.Body>
      <Modal.Footer>
                    <Button
                        onClick={() => setOpenModal(false)}
                        className="mr-3 bg-red-700 py-3 text-sm font-[400]">
                        <span>Cancel</span>
                    </Button>
                    <Button
                        type="submit"  // Add type="submit" to the button
                        className='font-[400] text-white flex items-center gap-2 justify-center bg-[#1a4bfb] text-sm bg'>
                        <FaRegEdit className='text-lg' /> <span>Edit</span>
                    </Button>
                </Modal.Footer>
             </form>
     
      </Modal>
 
    );
};

export default TableModal;