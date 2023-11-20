import {React, useRef} from 'react'
import logo from '../Images/image0.jpeg'
import {LuMenuSquare} from 'react-icons/lu'
import {FaRegWindowClose} from 'react-icons/fa'

function Navbar() {

    const menuRef = useRef(null);
    const closeRef = useRef(null);
    const listRef = useRef(null);


    const menuOpen = () => {
        menuRef.current.style.display = 'none'
        closeRef.current.style.display = 'block'
        listRef.current.style.display = 'flex'
    };

    const menuClose = () => {
         closeRef.current.style.display = 'none'
         menuRef.current.style.display = 'block'
        listRef.current.style.display = 'none'
    }

  return (
    <div className='w-screen relative'>
        <div className='flex justify-between bg-white items-center py-4 px-4 lg:px-24 '>
            <div >
                <img src={logo} alt="" className='w-[80px]' />
            </div>

            <div className='hidden lg:flex'>
                <ul className=' flex gap-12 text-[18px] font-semibold '>
                    <li className='hover:text-[#3A0879] cursor-pointer'>Home</li>
                    <li className='hover:text-[#3A0879] cursor-pointer'>About Us</li>
                    <li className='hover:text-[#3A0879] cursor-pointer'>Services</li>
                    <li className='hover:text-[#3A0879] cursor-pointer'>Technologies</li>
                    <li className='hover:text-[#3A0879] cursor-pointer'>Contact Us</li>
                </ul>
            </div>

            <div className='hidden lg:flex'>
                <button className='border-[2px] w-[150px] h-[35px] border-[#3A0879] rounded-md text-[#3A0879] font-semibold'>Sign In</button>
            </div>
            <div ref={menuRef} onClick={menuOpen} className='flex lg:hidden'>
                <LuMenuSquare size={40} className='text-[#3A0879]'/>
            </div>
            <div  ref={closeRef} onClick={menuClose} className='hidden relative'>
                <FaRegWindowClose size={35} className='text-[#3A0879] fixed right-4 top-9' />
            </div>
            

        </div>
        <div ref={listRef} className='hidden'>
                <ul className=' flex flex-col items-center w-[100%] h-screen bg-white gap-24 py-8 fixed z-50'>
                    <li className='hover:text-[#3A0879] cursor-pointer'>Home</li>
                    <li className='hover:text-[#3A0879] cursor-pointer'>About Us</li>
                    <li className='hover:text-[#3A0879] cursor-pointer'>Services</li>
                    <li className='hover:text-[#3A0879] cursor-pointer'>Technologies</li>
                    <li className='hover:text-[#3A0879] cursor-pointer'>Contact Us</li>
                    <li className='text-center py-1 border-[2px] w-[150px] h-[35px] border-[#3A0879] rounded-md text-[#3A0879] font-semibold'>Sign In</li>

                </ul>
            </div>
    </div>
  )
}

export default Navbar