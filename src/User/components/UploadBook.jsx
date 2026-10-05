import React from 'react'
import { FaPlus } from 'react-icons/fa'

function UploadBook() {
    return (
        <div className='p-10 my-20 mx-5 bg-gray-100'>
            <h1 className='text-center text-3xl font-medium'>Upload Book Details</h1>
            <div className="md:grid grid-cols-2 mt-10 w-full">
                <div className="px-3">
                    <div className="mb-3">
                        <input type="text" placeholder='Book Title' className="w-full p-2 rounded bg-white" />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='Author' className="w-full p-2 rounded bg-white" />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='Book Cover image Url' className="w-full p-2 rounded bg-white" />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='Total page' className="w-full p-2 rounded bg-white" />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='Orginal Price ' className="w-full p-2 rounded bg-white" />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='Discount Price' className="w-full p-2 rounded bg-white" />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='Abstract' className="w-full p-2 rounded bg-white" />
                    </div>
                </div>

                <div className="px-3">
                    <div className="mb-3">
                        <input type="text" placeholder='Publisher' className="w-full p-2 rounded bg-white" />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='ISBN' className="w-full p-2 rounded bg-white" />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='Language' className="w-full p-2 rounded bg-white" />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='Category' className="w-full p-2 rounded bg-white" />
                    </div>
                    {/* upload book image */}
                    <div className='mb-3 flex justify-center items-center mt-10'>
                        <label htmlFor='bookimage'>
                            <input type="file" id='bookimage' hidden />
                            <img width={'200px'} height={'200px'} src="https://wupengcheng.gallerycdn.vsassets.io/extensions/wupengcheng/upload-ftp/0.0.3/1663568570818/Microsoft.VisualStudio.Services.Icons.Default" alt="" />
                        </label>
                    </div>
                    {/* preview of uploaded image */}
                    <div className="flex justify-center items-center">
                        <img width={'70px'} height={'70px'} src="https://img0-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/37836/optimized_product_thumb_stage.jpg" alt="book" />
                        <label htmlFor="bookupload">
                            <input type="file" id='bookupload' hidden />
                            <FaPlus className='text-3xl ms-2' />
                        </label>
                    </div>
                </div>
            </div>
            <div className="flex md:justify-end justify-center w-full p-5 mt-5">
                <button className='bg-yellow-500 text-white p-3 rounded me-2'>Reset</button>
                <button className='bg-green-500 text-white p-3 rounded '>Add Book</button>
            </div>
        </div>
    )
}

export default UploadBook
