import React, { useState } from 'react'
import AdminSidebar from '../compontents/AdminSidebar'
import AdminHeader from '../compontents/AdminHeader'

function AdminResource() {

  const [currentTab, setCurrentTab] = useState(1)

  return (
    <>
      <AdminHeader />
      <div className="md:grid grid-cols-5 gap-2">
        <div className="col-span-1">
          <AdminSidebar />
        </div>
        <div className='col-span-4 p-10'>
          <h1 className='text-3xl font-bold text-center mb-10'>All Resources</h1>
          {/* tabs */}
          <div className='flex justify-center items-center my-8 font-medium text-lg'>
            <p onClick={() => setCurrentTab(1)} className={currentTab == 1 ? 'p-4 border-gray-400 border-l border-t border-r rounded cursor-pointer ' : 'p-4 border-gray-400 border-b rounded cursor-pointer'}> Books</p>
            <p onClick={() => setCurrentTab(2)} className={currentTab == 2 ? 'p-4 border-gray-400 border-l border-t border-r rounded cursor-pointer ' : 'p-4 border-gray-400 border-b rounded cursor-pointer '}>Users</p>
          </div>
          {/* tab content */}
          {
            currentTab == 1 &&
            <div className='md:grid grid-cols-4 md:my-0'>
              {/* duplicating card */}
              <div className='shadow rounded p-3 m-4 md:my-0'>
                <img width={'100%'} height={'300px'} src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1734004864" alt="" />
                <div className='flex flex-col justify-center items-center mt-4'>
                  <h2 className='text-blue-600 font-bold text-xl'>Author</h2>
                  <h3 className='text-lg'>Title</h3>
                  <p className='font-bold text-red-500'>Price</p>
                  {/* approved */}
                  <button className='bg-green-600 text-white p-2 mt-2 w-full'>APPROVE</button>
                </div>
              </div>
            </div>
          }
          {
            currentTab == 2 &&
            <div className='md:grid grid-cols-3 w-full my-5'>
              {/* duplicating card */}
              <div className='shadow rounded p-2 m-2 bg-blue-100'>
                <p className='text-red-500 font-bold text-md'>ID: </p>
                <div className='flex mt-3 items-center'>
                  <img width={'80px'} height={'80px'} style={{borderRadius:'50%'}} src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="user" />
                  <div className='flex flex-col ml-3 w-full'>
                    <h2 className='text-blue-600 font-bold text-md'>Username</h2>
                    <p className='text-xs'>Mail</p>
                </div>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </>
  )
}

export default AdminResource
