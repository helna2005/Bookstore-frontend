import React from 'react'
import { Link } from 'react-router-dom'

function Pnf() {
  return (
    <div className='min-h-screen flex justify-center items-center flex-col'>
      <img className='w-100' src="https://cdn.dribbble.com/userupload/24450589/file/original-7a69eb5b87401ce59325c3291535aebc.gif" alt="" />
      <p>Oh No!</p>
      <h3 className="text-2xl font-medium">Look Like You're Lost</h3>
      <p>The page are looking for is not Available</p>
      <Link to={'/'} className="bg-black mt-5 px-3 py-2 text-white rounded-2xl">Back to Home</Link>
    </div>
  )
}

export default Pnf
