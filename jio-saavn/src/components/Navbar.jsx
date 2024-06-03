import React from 'react'
import { Link } from 'react-router-dom';
import {MdKeyboardArrowDown} from 'react-icons/md'
const Navbar = () => {
  return (
   <nav className='flex justify-between items-center py-3 border-none lg:border px-2 fixed top-0 left-0 right-0 bg-[#f5f5f5ff] z-20'>
        {/* 1st div */}
        <div className='flex flex-col lg:flex-row justify-between items-center mx-auto lg:mx-0 '>
            <div className='flex justify-between items-center gap-2 mr-8'>
                <img src='/savan-logo.png' alt='logo' width={37} />
                <Link to="/" className="font-extrabold text-lg">
                    Jio Saavn
                </Link>
            </div>
            <div className='flex text-[24px] lg:text-[15px] gap-6 text-gray-600 font-semibold h-full'>
                <li className='list-none'>Music</li>
                <li className='list-none'>Podcast</li>
                <li className='list-name'>Go Pro</li>
            </div>
        </div>

        {/* 2nd div */}
        <div className='hidden lg:block'>
            <input 
                type="text"
                name='search'
                id='search'
                className='py-2 rounded-full w-[35vw] outline-black text-center border text-black'
                placeholder='Search for songs...'
            />
        </div>
        {/* 3rd div */}
        <div className='hidden lg:flex items-center gap-8'>
            <div className='flex items-center gap-1'>
                <div className='flex flex-col text-sm'>
                    <span className='text-[14px] text-gray-500 font-semibold'>Music Language</span>
                    <span className='text-[14px] text-gray-500 font-semibold'>Hindi</span>
                </div>
                <MdKeyboardArrowDown className='text-xl text-gray-500 mt-2' />
            </div>
            <div className='flex text-[15px] gap-5 text-gray-600 font-seemibold'>
                <li className='list-none'>Log In</li>
                <li className='list-none'>Sign In</li>
            </div>
        </div>

   </nav>
  );
};

export default Navbar;