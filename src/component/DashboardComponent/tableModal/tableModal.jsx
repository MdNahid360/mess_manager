import React, { useContext } from 'react';
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Input
} from "@material-tailwind/react";
import { AuthContext } from '../../../context/AuthProvider';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { IoCamera, IoExpandOutline } from 'react-icons/io5';
import { FaRegEdit } from 'react-icons/fa';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/dist/sweetalert2.css';

const TableModal = ({ open, setOpen, data }) => {
    const { theme } = useContext(AuthContext)
    const handleOpen = () => setOpen(!open);
    
 const handleSubmit = (e) => {
     e.preventDefault();
     
    Swal.fire({
        title: "",
        text: "user data update successfully",
        icon: "success"
    }).then(() => {
        handleOpen(); 
    });
}
    return (
        <div className="">
            <Dialog className={`${theme ? 'bg-large-dark' : 'bg-large-light'}  custom-scrollbar h-screen flex fixed w-screen items-center flex-col justify-center opacity-100 z-10 overflow-y-scroll px-2 rounded-none  `} open={open} handler={handleOpen}> {/* Added py-4 for top and bottom padding */}
                <br /><br /><br /> 
                <div className="md:d-none d-block opacity-0">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla  Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, optio nemo sint necessitatibus error eum alias voluptate laboriosam, quae ducimus consectetur reprehenderit? Quis nam perspiciatis aspernatur iusto consequatur tempora consequuntur?
                </div>
                <div className={`${theme ? 'bg-[#182129f2] border-[#95e2fb34] text-white' : ' bg-white border-[#2440497f] text-black'} custom-space border md:mt-0 backdrop-blur-m md:w-[480px] w-[97%] py-4 h-auto rounded-lg shadow-xl mx-auto`}>
                    <form onSubmit={handleSubmit}>
                        <DialogHeader className='flex flex-col justify-center'>
                            <div className="md:w-[140px] w-[100px] md:h-[140px] h-[100px]  hover-box duration-200  rounded-full border-2 relative  border-gray-400">
                                <img src="https://avatars.githubusercontent.com/u/76812306?v=4" alt="member" className="object-cover w-full rounded-full h-full" />
                                <div className='overflow-hidden opacity-0 hover-target duration-200 absolute w-full h-full bg-[#000000c3] rounded-full top-0 left-0 bottom-0 right-0 flex items-center justify-center cursor-pointer'>
                                    <IoCamera className='text-3xl opacity-[0.9] cursor-pointer' />
                                    <input name='photo' type="file" className='absolute opacity-0 w-full h-full cursor-pointer' />
                                </div>
                            </div>

                        </DialogHeader>
                        <DialogBody className=''>
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
                         
                          
                        </DialogBody>
                        <DialogFooter>
                            <Button
                                
                                onClick={handleOpen}
                                className="mr-3 bg-red-700 py-3 text-sm font-[400]">
                                <span>Cancel</span>
                            </Button>
                            <Button className='font-[400] text-white flex items-center gap-2 justify-center bg-[#1a4bfb] text-sm bg' type='submit' color="blue">
                               <FaRegEdit className='text-lg' /> <span>Edit</span>
                            </Button>
                        </DialogFooter>
                    </form>
                </div>  
                
                <div className="md:d-none d-block opacity-0">
                    
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores hic nobis possimus cumque expedita veritatis rerum at, enim nisi <div className="md:d-none d-block">
                        
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit 
                    </div>
                </div>
            </Dialog>
        </div>

    );
};

export default TableModal;