import React, { useContext, useEffect, useState } from 'react';
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Input
} from "@material-tailwind/react";
import { Modal } from 'flowbite-react';
import { PhotoIcon, PlusIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { IoCamera, IoExpandOutline } from 'react-icons/io5';
import { FaRegEdit } from 'react-icons/fa';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/dist/sweetalert2.css';
import { AuthContext } from '../../../../context/AuthProvider';


const AddMealModal = ({ openModal, setOpenModal }) => {
    const { theme } = useContext(AuthContext);
    const [selectedUserName, setSelectedUserName] = useState('');
    const [selectedDate, setSelectedDate] = useState('');

    const users = [
        {
            id: 1,
            name: 'Nahid',
            photo: 'https://randomuser.me/api/portraits/men/61.jpg',
            date: '3/4/2023',
            lunch: 1,
            dinner: 0.5,
            breakfast: 1
        },
        {
            id: 2,
            name: 'Shoron',
            photo: 'https://randomuser.me/api/portraits/men/62.jpg',
            date: '03/04/2023',
            lunch: 1,
            dinner: 2.5,
            breakfast: 1
        },
    ];

    useEffect(() => {
        setSelectedUserName(users[0]?.name);

        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;

        setSelectedDate(formattedDate);

    }, []);

    const handleSelectChange = (e) => {
        const selectedValue = e.target.value;
        setSelectedUserName(selectedValue);
    };

    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setSelectedDate(selectedDate);
    };

    const selectedUser = users.find(user => user.name === selectedUserName);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log({
            selectedUserName,
            selectedDate,
            breakfast: e.target.breakfast.value,
            lunch: e.target.lunch.value,
            dinner: e.target.dinner.value,
            // Add more form fields as needed
        });

        Swal.fire({
            title: "",
            text: "মিল যোগ করা হয়েছে। ধন্যবাদ",
            icon: "success"
        }).then(() => {
            setOpenModal(false);
        });
    };

    return (

        <Modal className=' md:pt-[4%] pt-[20%] w-[100vw] h-[100vh] bg-[#000000] flex flex-col relative justify-center items-center z-50' show={openModal} onClose={() => setOpenModal(false)}>
            <form onSubmit={handleSubmit} className=" ">
                <Modal.Header className={`${theme ? 'bg-[#2d3538] text-white' : 'bg-white text-black'} border-gray-700`}>
                    <div className="flex items-center gap-4">
                        <img src={selectedUser?.photo} alt="" className="w-14 h-14 object-cover rounded-lg" />  <h1 className={`${theme ? 'text-white' : 'text-black'}  font-bold`}>মিল যোগ করুন  </h1>
                    </div>
                </Modal.Header>
                <Modal.Body className={`${theme ? 'bg-[#2d3538] text-white' : 'bg-white text-black'} border-none pt-1`}>
                    <div className=''>
                        {/* items #4 */}
                        <div className="flex flex-col mt-2">
                            <label htmlFor="text" className="mb-1 text-sm">নাম</label>
                            <select
                                className="w-full rounded-md border py-2 bg-[#2e424e9c] backdrop-blur-md border-blue-600 px-2 hover:border-blue-500 focus:outline-none text-white focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40"
                                name="name"
                                id=""
                                value={selectedUserName}
                                onChange={handleSelectChange}  // Added onChange event handler
                            >
                                {users.map((user) => (
                                    <option key={user.id} value={user.name}>
                                        {user.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* items # */}
                        <div className="flex flex-col mt-3">
                            <label htmlFor="text" className="mb-1 text-sm">তারিখ</label>
                            <input
                                value={selectedDate}
                                onChange={handleDateChange}
                                name='date'
                                placeholder='তারিখ লিখুন'
                                type="date"
                                id="text"
                                className="w-full rounded-md border py-2 bg-[#2e424e9c] backdrop-blur-md border-blue-600 px-2 hover:border-blue-500 focus:outline-none text-white focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40"
                            />
                        </div>
                        <div className="grid md:grid-cols-3 grid-cols-1 w-full gap-3 md:mt-2  mt-0">
                            {/* items #1 */}
                            <div className="flex flex-col md:mt-0 mt-3">
                                <label for="text" className="mb-1 text-sm">সকালের মিল</label>
                                <input name='breakfast' placeholder='সকালের মিল  ' defaultValue={selectedUser?.breakfast} type="number" id="text" className="w-full  rounded-md border py-2 bg-[#2e424e9c]  backdrop-blur-md border-blue-600 px-2  hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring text-white active:ring-blue-500/40" />
                            </div>
                            {/* items #2 */}
                            <div className="flex flex-col ">
                                <label for="text" className="mb-1 text-sm">দুপুরের মিল</label>
                                <input name='lunch' placeholder='দুপুরের মিল  ' defaultValue={selectedUser?.lunch} type="number" id="text" className="w-full  rounded-md border py-2 bg-[#2e424e9c]  backdrop-blur-md border-blue-600 px-2  hover:border-blue-500 text-white focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40" />
                            </div>
                            {/* items #3 */}
                            <div className="flex flex-col">
                                <label for="text" className="mb-1 text-sm">রাতের মিল	</label>
                                <input name='dinner' placeholder='রাতের মিল  ' defaultValue={selectedUser?.dinner} type="number" id="text" className="w-full  rounded-md border text-white py-2 bg-[#2e424e9c]  backdrop-blur-md border-blue-600 px-2  hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40" />
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
                        + <span>যোগ করুন </span>
                    </Button>
                </Modal.Footer>
            </form>

        </Modal>

    );
};

export default AddMealModal;