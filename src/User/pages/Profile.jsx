import React, { useState } from 'react'
import Header1 from '../components/Header1'
import { FaCheck } from "react-icons/fa";
import { DiVim } from 'react-icons/di';
import Edit from '../components/Edit';
import UploadBook from '../components/UploadBook';
import BookStatus from '../components/BookStatus';
import PurchaseBook from '../components/PurchaseBook';

function Profile() {

  //clik tab change content
  const [currentTab, setCurrentTab] = useState(1)

  return (
    <>
      <Header1 />
      <div style={{ height: '200px' }} className="bg-black"></div>
      <div style={{ width: '230px', height: '230px', borderRadius: '50%', marginTop: '-130px', marginLeft: '70px' }} className='bg-white p-3'>
        <img style={{ width: '200px', height: '200px', borderRadius: '50%' }} src="https://cdn-icons-png.flaticon.com/512/219/219969.png" alt="user" />
      </div>
      <div className="md:flex justify-between px-5">
        <div className="flex items-center">
          <h1 className="text-2xl font-black md:text-3xl">Username</h1>
          <FaCheck className='text-blue-700 ms-3' />
        </div>
        <div>
         <Edit/>
        </div>
      </div>
      <p className='fw-bold text-xl px-20 mt-5'>Bio</p>
      <p className="text-justify md:px-20 px-5 my-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus magni in facere commodi, modi aspernatur reprehenderit nisi? Harum, nisi quas! Maxime nobis perspiciatis expedita. Eius fugiat culpa asperiores dolores perferendis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio corrupti suscipit quam dolore similique aliquid iure beatae, hic consequuntur nulla ex cumque, aperiam iste reprehenderit perspiciatis numquam excepturi culpa ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta reiciendis inventore ut. Hic nam commodi sed, iusto numquam necessitatibus! Deleniti perspiciatis harum numquam reiciendis provident? Debitis natus quis libero veritatis.</p>
      <div className="md:px-40">
        {/* tabs */}
        <div className='flex justify-center items-center my-8 font-medium text-lg'>
          <p onClick={() => setCurrentTab(1)} className={currentTab==1 ? 'p-4 border-gray-400 border-l border-t border-r rounded cursor-pointer ' : 'p-4 border-gray-400 border-b rounded cursor-pointer'}>Upload Book</p>
          <p onClick={() => setCurrentTab(2)} className={currentTab==2 ? 'p-4 border-gray-400 border-l border-t border-r rounded cursor-pointer ' : 'p-4 border-gray-400 border-b rounded cursor-pointer '}>Upload Book Status</p>
          <p onClick={() => setCurrentTab(3)} className={currentTab==3 ? 'p-4 border-gray-400 border-l border-t border-r rounded cursor-pointer ' : 'p-4 border-gray-400 border-b rounded cursor-pointer '}>Purchase History</p>
        </div>
        {/* tab content */}
        {
          currentTab==1 &&
          <div><UploadBook/></div>
        }
        {
          currentTab==2 &&
          <div><BookStatus/></div>
        }
        {
          currentTab==3 &&
          <div><PurchaseBook/> </div>
        }
      </div>
    </>
  )
}

export default Profile
