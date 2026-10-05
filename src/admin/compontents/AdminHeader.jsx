import React from 'react'
import { FaPowerOff } from 'react-icons/fa'

function AdminHeader() {
  return (
    <>
      {/* header top */}
      <div className="flex justify-between items-center p-3 md:mx-20">
        <div className="flex items-center">
          <img width={'50px'} height={'50px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW_Cwl7rC0KDM0ZPf2-NmJw_Jk3SLCtmM-btnraTJB4A&s=10" alt="icons" />
          <h1 className='text-2xl font-bold ms-2'>BOOKSTROE</h1>
        </div>
        <button className="flex items-center px-3 py-2 bg-black text-white rounded border-black hover:bg-white hover:text-black">Logout<FaPowerOff className='ms-2' /></button>
      </div>
      {/* header marquee */}
      <div className="w-full p-3 bg-black text-white">
        <marquee >Welcome Admin, You are all set to mange and monitor the system .Let's get into work!!!</marquee>
      </div>
    </>
  )
}

export default AdminHeader
