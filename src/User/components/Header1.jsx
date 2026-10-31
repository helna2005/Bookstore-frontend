import React, { useContext, useEffect, useState } from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { FaGear } from "react-icons/fa6";
import { FaPowerOff } from "react-icons/fa";
import axiosInstance from '../../api/axiosInstance';
import { routeContext } from '../../contextAPI/RouteGaurd';

function Header1() {

  const { role, setRole, authorisedUser, setAuthorisedUser } = useContext(routeContext)

  const navigate=useNavigate()

  const [toggle, setToggle] = useState(false)
  //picture for login
  const [token, setToken] = useState("")
  const [dp, setDp] = useState("")

  const [userId, setUserId] = useState("")
  const [dropDown, setDropDown] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem("token") && sessionStorage.getItem("user")) {
      const userToken = sessionStorage.getItem("token")
      const user = JSON.parse(sessionStorage.getItem("user"))
      setToken(userToken)
      setDp(user.picture)
      setUserId(user._id)
    }
  }, [token])

  const logout=()=>{
    sessionStorage.clear()
    setAuthorisedUser(false)
    setToggle(false)
    setToken("")
    setDp("")
    setUserId("")
    setDropDown(false)
    navigate('/')
  }

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
          {
            !token ?
              <Link to={'/login'} className='border border-black rounded px-3 ms-3 flex items-center'><FaUser className='me-1' />Login</Link>
              :
              <div>
                <button onClick={() => setDropDown(!dropDown)} className="shadow-sm rounded p-1 hover:bg-gray-100">
                  <img width={'40px'} height={'40px'} style={{ borderRadius: '50%' }} src={dp == "" ? "https://www.freeiconspng.com/thumbs/computer-user-icon/computer-user-icon-2.png" : dp.startsWith("https://lh3.googleusercontent.com/") ? dp :`${axiosInstance.defaults.baseURL}/uploads/${dp}`} alt="" />
                </button>
                {/* drop down menu */}
                {
                  dropDown &&
                  <div className="absolute right-0 z-10 mt-2 w-40 bg-white shadow rounded ring-1 ring-black/5 p-2 focus:outline-hidden" >
                    <Link to={`/profile/${userId}`} className="flex items-center text-gray-600 text-sm px-3 py-2"><FaGear className='me-1' />Profile</Link>
                    <button onClick={logout} className='flex items-center text-gray-600 text-sm px-3 py-2'><FaPowerOff className='me-1' />Logout</button>
                  </div>
                }
              </div>
          }
        </div>
      </div>

      {/* navigation part */}
      <nav className='bg-black w-full p-3 text-white md:flex justify-center items-center'>

        {/* menu icon & login button */}
        <div className='flex justify-between items-center text-2xl py-2 md:hidden'>
          <button onClick={() => setToggle(!toggle)}><IoMdMenu /></button>
          {
            !token ?
              <Link to={'/login'} className='border border-black rounded px-3 ms-3 flex items-center hover:bg-white hover:text-black'><FaUser className='me-1' />Login</Link>
              :
              <div>
                <button onClick={() => setDropDown(!dropDown)} className="shadow-sm rounded p-1 hover:bg-gray-100">
                  <img width={'40px'} height={'40px'} style={{ borderRadius: '50%' }}  src={dp == "" ? "https://www.freeiconspng.com/thumbs/computer-user-icon/computer-user-icon-2.png" : dp.startsWith("https://lh3.googleusercontent.com/") ? dp :`${axiosInstance.defaults.baseURL}/uploads/${dp}`} alt="" />
                </button>
                {/* drop down menu */}
                {
                  dropDown &&
                  <div className="absolute right-0 z-10 mt-2 w-40 bg-white shadow rounded ring-1 ring-black/5 p-2 focus:outline-hidden" >
                    <Link to={`/profile/${userId}`} className="flex items-center text-gray-600 text-sm px-3 py-2"><FaGear className='me-1' />Profile</Link>
                    <button onClick={logout} className='flex items-center text-gray-600 text-sm px-3 py-2'><FaPowerOff className='me-1' />Logout</button>
                  </div>
                }
              </div>
          }
        </div>

        <ul className={toggle ? 'flex flex-col' : 'md:flex hidden'}>
          <li><Link to={'/'} className='md:mx-4 mt-2 md:mt-0'>HOME</Link></li>
          <li><Link to={'/books'} className='md:mx-4 mt-2 md:mt-0'>BOOKS</Link></li>
          <li><Link to={'/contact'} className='md:mx-4 mt-2 md:mt-0'>CONTACT</Link></li>
        </ul>
      </nav>
    </>
  )
}

export default Header1
