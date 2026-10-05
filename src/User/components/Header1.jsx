import React, { useState } from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";

function Header1() {
  const [toggle,setToggle]=useState(false)

  return (
    <>
      {/* header top part */}
      <div className='grid grid-cols-3 p-5'>
        {/* logo  */}
        <div className='flex items-center'>
          <img width={'50px'} height={'50px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW_Cwl7rC0KDM0ZPf2-NmJw_Jk3SLCtmM-btnraTJB4A&s=10" alt="book" />
        </div>
        {/* title */}
        <div className='md:flex justify-center items-center hidden'>
          <h1 className='text-3xl font-bold'>BOOKSTORE</h1>
        </div>
        {/* login */}
        <div className='md:flex justify-end items-center hidden'>
          <FaInstagram />
          <FaTwitter className='mx-2' />
          <FaFacebookF />

          {/* login link */}
          <Link to={'/login'} className='border border-black rounded px-3 ms-3 flex items-center'><FaUser className='me-1' />Login</Link>
        </div>
      </div>
      
      {/* navigation part */}
      <nav className='bg-black w-full p-3 text-white md:flex justify-center items-center'>

        {/* menu icon & login button */}
        <div className='flex justify-between items-center text-2xl py-2 md:hidden'>
          <button onClick={()=>setToggle(!toggle)}><IoMdMenu /></button>
           <Link to={'/login'} className='border border-black rounded px-3 ms-3 flex items-center hover:bg-white hover:text-black'><FaUser className='me-1' />Login</Link>
        </div>

        <ul className={toggle?'flex flex-col':'md:flex hidden'}>
          <li><Link to={'/'} className='md:mx-4 mt-2 md:mt-0'>HOME</Link></li>
          <li><Link to={'/books'} className='md:mx-4 mt-2 md:mt-0'>BOOKS</Link></li>
          <li><Link to={'/contact'} className='md:mx-4 mt-2 md:mt-0'>CONTACT</Link></li>
        </ul>
      </nav>
    </>
  )
}

export default Header1
