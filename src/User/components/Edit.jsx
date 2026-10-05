import React, { useState } from 'react'
import { MdEdit } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { FaPen } from 'react-icons/fa';

function Edit() {
    //button click action
    const [offCanvas, setOffCanvas] = useState(false)

    return (
        <div>
            {/* button */}
            <button onClick={() => setOffCanvas(true)} className='bg-black text-white p-2 flex items-center rounded border hover:bg-white hover:text-black'><MdEdit className='me-2' />Edit</button>
            {/* offcanvas */}
            {
                offCanvas &&
                <div>
                    <div className="fixed inset-0 bg-gray-400/75 w-full h-full"></div>
                    <div className="bg-white h-full w-90 z-50 fixed top-0 left-0">
                        {/* header */}
                        <div className='bg-black text-white px-3 py-4 flex justify-between text-2xl'>
                            <h1>Update User Profile</h1>
                            <IoMdClose onClick={() => setOffCanvas(false)} className='cursor-pointer' />
                        </div>
                        {/* body */}
                        <div className='flex justify-center items-center flex-col my-5'>
                            <label htmlFor='userprofile'>
                                <input type="file" id='userprofile' hidden />
                                <img src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png" alt="" />
                                <button className='bg-black text-white px-3 py-4 rounded s-53 fixed' style={{ marginLeft: '250px', marginTop: '-25px' }}><FaPen /></button>
                            </label>
                            {/* username */}
                            <div className='mt-10 mb-3 w-full px-5'>
                                <input type="text" placeholder='username' className='w-full border border-gray-200 rounded p-2' />
                            </div>
                            {/* new password */}
                            <div className='mt-3 mb-3 w-full px-5'>
                                <input type="text" placeholder='New password' className='w-full border border-gray-200 rounded p-2' />
                            </div>
                            {/* confirm password */}
                            <div className='mt-3 mb-3 w-full px-5'>
                                <input type="text" placeholder='Confirm password' className='w-full border border-gray-200 rounded p-2' />
                            </div>
                            {/* bio */}
                            <div className='mt-3 mb-3 w-full px-5'>
                                <input type="text" placeholder='Bio' className='w-full border border-gray-200 rounded p-2' />
                            </div>
                            {/* reset and update button */}
                            <div className='d-flex justify-end w-full px-5 mt-5'>
                                <button className='bg-yellow-500 text-white p-3 rounded me-2'>Reset</button>
                                <button className='bg-green-500 text-white p-3 rounded '>Upadte</button>
                            </div>
                        </div>
                    </div>
                </div>

            }
        </div>
    )
}

export default Edit
