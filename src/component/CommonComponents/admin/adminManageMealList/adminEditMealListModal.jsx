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
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { IoCamera, IoExpandOutline } from 'react-icons/io5';
import { FaRegEdit } from 'react-icons/fa';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/dist/sweetalert2.css';
import { AuthContext } from '../../../../context/AuthProvider';


const AdminEditMealListModal = ({ openModal, setOpenModal, data }) => {
    const { theme } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        Swal.fire({
            title: "",
            text: "user data update successfully",
            icon: "success"
        }).then(() => {
            setOpenModal(false);
        });
    };
    return (

        <Modal className=' md:pt-[4%] pt-[20%] w-[100vw] h-[100vh] bg-[#000000] flex flex-col relative justify-center items-center z-50' show={openModal} onClose={() => setOpenModal(false)}>
            <form onSubmit={handleSubmit} className=" ">
                <Modal.Header className={`${theme ? 'bg-[#2d3538] text-white' : 'bg-white text-black'} border-gray-700`}>
                    <h1 className={`${theme ? 'text-white' : 'text-black'}  font-bold`}>এডিট করুন </h1>
                </Modal.Header>
                <Modal.Body className={`${theme ? 'bg-[#2d3538] text-white' : 'bg-white text-black'} border-none pt-1`}>
                    <div className=''>
                        {/* items #4 */}
                        <div className="flex flex-col mt-2">
                            <label for="text" className="mb-1 text-sm">নাম</label>
                            <input name='name' placeholder='নাম লিখুন ' defaultValue={`নাম..... ${data}`} type="text" id="text" className="w-full  rounded-md border py-2 bg-[#2e424e9c]  backdrop-blur-md border-blue-600 px-2  hover:border-blue-500 focus:outline-none text-white focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40" />
                        </div>
                        <div className="flex flex-col mt-3">
                            <label for="text" className="mb-1 text-sm">ছবি </label>
                            <input type="file" name='photo' className='bg-[#2e424e9c] rounded-md text-white' />
                        </div>
                        {/* items # */}
                        <div className="flex flex-col mt-3">
                            <label for="text" className="mb-1 text-sm">তারিখ</label>
                            <input name='date' placeholder='তারিখ লিখুন ' defaultValue={`12/24/2023`} type="date" id="text" className="w-full  rounded-md border py-2 bg-[#2e424e9c]  backdrop-blur-md border-blue-600 px-2  hover:border-blue-500 focus:outline-none text-white focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40" />
                        </div>
                        <div className="grid md:grid-cols-3 grid-cols-1 w-full gap-3 md:mt-2  mt-0">
                            {/* items #1 */}
                            <div className="flex flex-col md:mt-0 mt-3">
                                <label for="text" className="mb-1 text-sm">সকালের মিল</label>
                                <input name='breakfast' placeholder='সকালের মিল  ' defaultValue={`সকালের মিল.....`} type="number" id="text" className="w-full  rounded-md border py-2 bg-[#2e424e9c]  backdrop-blur-md border-blue-600 px-2  hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring text-white active:ring-blue-500/40" />
                            </div>
                            {/* items #2 */}
                            <div className="flex flex-col ">
                                <label for="text" className="mb-1 text-sm">দুপুরের মিল</label>
                                <input name='lunch' placeholder='দুপুরের মিল  ' defaultValue={`দুপুরের মিল.....`} type="number" id="text" className="w-full  rounded-md border py-2 bg-[#2e424e9c]  backdrop-blur-md border-blue-600 px-2  hover:border-blue-500 text-white focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40" />
                            </div>
                            {/* items #3 */}
                            <div className="flex flex-col">
                                <label for="text" className="mb-1 text-sm">রাতের মিল	</label>
                                <input name='dinner' placeholder='রাতের মিল  ' defaultValue={`রাতের মিল	.....`} type="number" id="text" className="w-full  rounded-md border text-white py-2 bg-[#2e424e9c]  backdrop-blur-md border-blue-600 px-2  hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40" />
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className={` ${theme ? 'bg-[#2d3538] text-white' : 'bg-white text-black'} pt-5 pb-4 border-gray-700`}>
                    <Button
                        onClick={() => setOpenModal(false)}
                        className="mr-3 bg-red-700 py-3 text-sm font-[400]">
                        <span>বাতিল</span>
                    </Button>
                    <Button
                        type="submit"  // Add type="submit" to the button
                        className='font-[400] text-white flex items-center gap-2 justify-center bg-[#1a4bfb] text-sm bg'>
                        <FaRegEdit className='text-lg' /> <span>এডিট</span>
                    </Button>
                </Modal.Footer>
            </form>

        </Modal>

    );
};

export default AdminEditMealListModal;