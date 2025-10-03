import React from 'react';
import icon from "../../assets/vistaIcon.png"
import { Facebook, Twitter, Youtube } from 'lucide-react';
const Footer = () => {
    return (
        <div className='flex justify-between  items-center px-5 border-t-2 py-2  '>
            <aside className="grid-flow-col items-center">
                <img className='w-32' src={icon} alt="" />
                <p className='p-2'>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </aside>
            <div>
                <h1 className='text-lg font-semibold text-center m-2'>Social</h1>
                <div className='w-full flex space-x-2'>
                    <div className='text-white bg-blue-600 rounded-full p-2 w-1/3'>
                        <Facebook />
                    </div>
                    <div className='text-white bg-blue-400 rounded-full p-2 w-1/3'>
                        <Twitter />
                    </div>
                    <div className='text-white bg-red-500 rounded-full p-2 w-1/3'>
                        <Youtube />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;