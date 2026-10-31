import React from 'react'
import Header1 from '../components/Header1'
import { Link } from 'react-router-dom'

function PaymentSuccess() {
  return (
    <>
      <Header1/>
      <div className='container min-h-screen flex justify-center items-center'>
        <div className='md:grid grid-cols-2 px-20 justify-center items-center my-10'>
            <div>
                <h1 className='text-blue-600 md:text-4xl font-bold'>Congratulation...</h1>
                <p className='text-2xl my-10'>Thanks Your Purchase...</p>
                <Link to={'/books'} className='flex items-center bg-blue-500 w-60 p-2 text-white font-bold rounded'>Explore book more...</Link>
            </div>
            <div className='flex justify-center items-center'>
                <img src="https://i.pinimg.com/originals/20/b8/1e/20b81edb88baba24e4a0e5c527c6a1f2.gif" alt="" />
            </div>
        </div>
      </div>
    </>
  )
}

export default PaymentSuccess
