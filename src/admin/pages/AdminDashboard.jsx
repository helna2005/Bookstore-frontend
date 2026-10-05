import React from 'react'
import AdminHeader from '../compontents/AdminHeader'
import AdminSidebar from '../compontents/AdminSidebar'

function AdminDashboard() {
  return (
    <>
      <AdminHeader />
      <div className="md:grid grid-cols-5 gap-2">
        <div className="col-span-1">
          <AdminSidebar />
        </div>
        <div className='col-span-4'>
          Admin Dashboard
        </div>
      </div>
    </>
  )
}

export default AdminDashboard
