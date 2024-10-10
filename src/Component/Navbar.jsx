import React from 'react'
import logo from '../assets/logo.svg'
import { IoIosSearch } from "react-icons/io";
import { IoGlobeSharp } from "react-icons/io5";
function Navbar() {
    return (
        <div className=' bg-white sticky top-0 w-full h-28 flex items-center justify-between px-16 z-50'>
            <div className=' w-72 ml-10 h-full flex items-center'>
                <img src={logo} alt="" className=' w-full h-full' />
            </div>
            <div className=' flex items-center justify-center gap-5'>
                <ul className=' cursor-pointer font-custom text-lg font-extrabold text-green-600  flex items-center justify-center gap-7 capitalize'>
                    <li className='hover:text-orange-500 transition-all ease-in-out duratio'>about <span className=' uppercase'>cheplapharm</span> </li>
                    <li className='hover:text-orange-500 transition-all ease-in-out duratio'>product</li>
                    <li className='hover:text-orange-500 transition-all ease-in-out duratio'>press & news</li>
                    <li className='hover:text-orange-500 transition-all ease-in-out duratio'>investor relations</li>
                    <li className='hover:text-orange-500 transition-all ease-in-out duratio'>careers</li>
                    <li className='hover:text-orange-500 transition-all ease-in-out duratio'>contact</li>
                </ul>
                <div className=' flex flex-col gap-2 items-center mt-10'>
                    <IoGlobeSharp className=' text-3xl font-extrabold text-green-600' />
                    {/* <CiGlobe className=' text-3xl font-extrabold text-green-600' /> */}
                    {/* <FaSearch className=' text-3xl text-green-600' /> */}
                    <IoIosSearch className=' text-3xl text-green-600' />
                </div>
            </div>
        </div>
    )
}

export default Navbar
