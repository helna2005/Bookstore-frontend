import React, { useEffect, useState } from 'react'
import { FaChartBar, FaDatabase } from 'react-icons/fa'
import { IoMdSettings } from 'react-icons/io'
import { Link } from 'react-router-dom'
import axiosInstance from '../../api/axiosInstance'

function AdminSidebar() {
  const [username, setUsername] = useState("")
  const [dp, setDp] = useState("")

  useEffect(() => {
    if (sessionStorage.getItem("token") && sessionStorage.getItem("user")) {
      const user = JSON.parse(sessionStorage.getItem("user"))
      setDp(user?.picture)
      setUsername(user?.username)
    }
  }, [])

  return (
    <div className='bg-blue-100 md:min-h-screen h-fit py-10'>
      {/* image */}
      <div className='flex justify-center'>
        <img style={{ width: '150px', height: '150px', borderRadius: '50%' }} src={dp == "" ? "https://www.freeiconspng.com/thumbs/computer-user-icon/computer-user-icon-2.png" : dp.startsWith("https://lh3.googleusercontent.com/") ? dp :`${axiosInstance.defaults.baseURL}/uploads/${dp}`} />
      </div>
      {/* name */}
      <div className="text-xl font-bold my-5 text-center">
        {username}
      </div>
      {/* link */}
      <div className="mt-10 flex flex-col justify-center items-center">
        <div className="mt-3">
          <Link to={'/admin'} className='flex items-center'><FaChartBar className='me-2' />Dashborad</Link>
        </div>
        <div className="mt-3">
          <Link to={'/admin/resources'} className='flex items-center'><FaDatabase className='me-2' />Collections</Link>
        </div>
        <div className="mt-3">
          <Link to={'/admin/settings'} className='flex items-center'><IoMdSettings className='me-2' />Settings</Link>
        </div>
      </div>
    </div>
  )
}

export default AdminSidebar
