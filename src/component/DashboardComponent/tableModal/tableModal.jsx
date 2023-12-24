import React, { useContext } from 'react';
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import { AuthContext } from '../../../context/AuthProvider';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

const TableModal = ({ open, setOpen, data }) => {
    const {theme} = useContext(AuthContext)
    const handleOpen = () => setOpen(!open);

  return (
      <div className="">
  <Dialog className={`${theme ? 'bg-large-dark' : 'bg-large-light'}  custom-scrollbar h-screen flex fixed w-screen items-center justify-center opacity-100 z-10 overflow-y-scroll px-2 rounded-none py-4`} open={open} handler={handleOpen}> {/* Added py-4 for top and bottom padding */}
           <br /><br /><br />
           <br /><br /><br /> 
           <div className={`${theme ? 'bg-[#182129f2] border-[#95e2fb34] text-white' : ' bg-white border-[#2440497f] text-black'} custom-space border md:mt-0 backdrop-blur-md	 md:w-[680px] h-auto rounded-lg shadow-xl mx-auto`}>
            <form>
                <DialogHeader>{data}</DialogHeader>
                <DialogBody>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus neque officiis inventore recusandae ea repellendus nihil, sapiente est deserunt doloremque pariatur numquam autem explicabo in tempora repudiandae, unde blanditiis ex eius minima mollitia porro perferendis! Quae autem quo laudantium quasi nobis est dolores libero fuga reprehenderit exercitationem id error rem vel voluptatum perferendis, suscipit modi quibusdam. Ipsam possimus cupiditate iure  
                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        color="red"
                        onClick={handleOpen}
                        className="mr-1">
                        <span>Cancel</span>
                    </Button>
                    <Button variant="gradient" color="green" onClick={handleOpen}>
                        <span>Confirm</span>
                    </Button>
                </DialogFooter>
            </form>
          </div>
        </Dialog>
      </div>
     
    );
};

export default TableModal;