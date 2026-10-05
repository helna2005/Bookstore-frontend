import React from 'react'
import { FaChartBar, FaDatabase } from 'react-icons/fa'
import { IoMdSettings } from 'react-icons/io'
import { Link } from 'react-router-dom'

function AdminSidebar() {
  return (
    <div className='bg-blue-100 md:min-h-screen h-fit py-10'>
      {/* image */}
      <div className='flex justify-center'>
        <img style={{width:'150px',height:'150px',borderRadius:'50%'}} src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="admin" />
      </div>
      {/* name */}
      <div className="text-xl font-bold my-5 text-center">
        Name
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
