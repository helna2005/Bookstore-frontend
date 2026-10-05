import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <>
    <div className='md:grid grid-cols-3 md:gap-10 bg-gray-900 text-white p-10'>
      <div>
        <h4 className='font-bold'>ABOUT US</h4>
        <p className='text-justify mt-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique mollitia dolorem sit ullam quae libero nobis unde repellat ipsum quod, excepturi officia at ipsa! Explicabo neque at temporibus quasi debitis.</p>
      </div>
      <div className='flex flex-col md:mt-0 mt-5'>
        <h4 className='font-bold'>NEWS LETTER</h4>
        <p className='my-5'>stay update with our latest trands</p>
        <div className='flex'>
          <input type="email" placeholder='EMAIL' className='border p-2 bg-white text-black' />
          <button className='bg-yellow-500 p-2'><FaArrowRight /></button>
        </div>
      </div>
      <div className='flex flex-col md:mt-0 mt-5'>
        <h4 className='font-bold'>FOLLOW US</h4>
        <p className='my-5'>let as be social</p>
        <div className='flex'>
          <FaFacebookF />
          <FaInstagram className='mx-5'/>
          <FaTwitter />
        </div>
      </div>
    </div>
      <p className='bg-black p-2 text-center text-white'>copyright © All right reserved | This website is made with by luminar techolab</p>
    </>
  )
}

export default Footer
