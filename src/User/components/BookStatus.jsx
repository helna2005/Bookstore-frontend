import React from 'react'

function BookStatus() {
    return (
        <div className='p-10 my-15 shadow rounded'>
            {/* duplicate book */}
            <div className="p-5 rounded mt-4 bg-blue-100">
                <div className="md:grid grid-cols-[3fr_1fr]">
                    <div className="px-4">
                        <h1 className='text-2xl'>Title</h1>
                        <h2 className='text-xl'>Author</h2>
                        <h3 className='text-lg text-blue-700'>$ Discount Price</h3>
                        <p className='text-justify'>Abstract</p>
                        {/* status */}
                        <div className="flex my-3">
                            <img width={'120px'} height={'120px'} src="https://t4.ftcdn.net/jpg/15/42/78/73/360_F_1542787314_EJF9wn3UH9Nd8BvShQ6VSKKYgaSQByuS.png" alt="" />
                            <img width={'120px'} height={'120px'} src="https://static.vecteezy.com/system/resources/previews/024/382/936/non_2x/approved-sign-with-checkmark-symbol-icon-label-stamp-green-round-design-transparent-background-free-png.png" alt="approved" />
                            <img width={'120px'} height={'120px'} src="https://static.vecteezy.com/system/resources/thumbnails/021/433/029/small/sold-rubber-stamp-free-png.png" alt="sold" />
                        </div>
                    </div>
                    <div className="px-4 mt-4 md:mt-0">
                        <img className='w-full' src="https://img0-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/37836/optimized_product_thumb_stage.jpg" alt="" />
                        <div className='mt-4 flex justify-end'>
                            <button className='bg-red-700 text-white p-2 rounded'>DELET</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BookStatus
