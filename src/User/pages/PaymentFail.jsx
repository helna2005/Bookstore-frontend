import React from 'react'
import Header1 from '../components/Header1'
import { Link } from 'react-router-dom'

function PaymentFail() {
    return (
        <>
            <Header1 />
            <div className='container min-h-screen flex justify-center items-center'>
                <div className='md:grid grid-cols-2 px-20 justify-center items-center my-10'>
                    <div>
                        <h1 className='text-red-600 md:text-4xl font-bold'>Sorry!!! Payment declined...</h1>
                        <p className='text-2xl my-10'>We apologize for the incovienece........</p>
                        <Link to={'/books'} className='flex items-center bg-blue-500 w-60 p-2 text-white font-bold rounded'>Explore book more...</Link>
                    </div>
                    <div className='flex justify-center items-center'>
                        <img src="https://assets-v2.lottiefiles.com/a/6a1f0bce-1178-11ee-a807-ebab7337127e/5rsPIZBogk.gif" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentFail
