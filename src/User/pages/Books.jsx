import React, { useState } from 'react'
import Header1 from '../components/Header1'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Books() {

  const [toggle, setToggle] = useState(false)
  return (
    <>
      <Header1 />
      <>
        <div className="flex flex-col justify-center items-center my-5">
          <h1 className="text-3xl font-bold my-5">All Books</h1>
          <div className="flex my-5">
            <input type="text" className="p-2 border border-gray-200 w-100 rounded" placeholder='Search by Book Title' />
            <button className="p-2 bg-blue-800 text-white ms-1 rounded">Search</button>
          </div>
        </div>
        {/* grid-filter & book card */}
        <div className="md:grid grid-cols-4 p-5 md:px-40 mb-10">
          {/* filter */}
          <div className="col-span-1">
            <div className="flex justify-between">
              <h1 className='text-2xl font-bold'>Filter</h1>
              <button onClick={() => setToggle(!toggle)} className='font-bold text-2xl md:hidden'><FaBars /></button>
            </div>
            {/* filter category */}
            <div className={toggle ? "block" : "hidden md:block"}>
              <div className="mt-3">
                <input type="radio" name='filter' id='no-filter' />
                <label htmlFor="no-filter" className="ms-3">All</label>
              </div>
              <div className="mt-3">
                <input type="radio" name='filter' id='filter' />
                <label htmlFor="filter" className="ms-3">Book Category</label>
              </div>
            </div>
          </div>
          {/* book cards */}
          <div className="col-span-3">
            <div className='md:grid grid-cols-4 md:my-0'>
              {/* duplicating card */}
              <div className='shadow rounded p-3 m-4 md:my-0'>
                <img width={'100%'} height={'300px'} src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1734004864" alt="" />
                <div className='flex flex-col justify-center items-center mt-4'>
                  <h2 className='text-blue-600 font-bold text-xl'>Author</h2>
                  <h3 className='text-lg'>Title</h3>
                  <Link to={'/books/:id'} className='bg-blue-600 font-bold text-white p-2 rounded mt-2'>View Books</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  )
}

export default Books
