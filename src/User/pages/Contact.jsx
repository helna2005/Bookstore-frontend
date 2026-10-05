import React from 'react'
import Header1 from '../components/Header1'
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPaperPlane } from "react-icons/fa";
function Contact() {
  return (
    <>
      <Header1 />
      <div className='md:px-20 p-5 my-5'>
        <h1 className='text-center my-5 font-bold text-3xl'>Conact Us</h1>
        <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, deleniti. Harum repellendus animi provident obcaecati fugit beatae, delectus rerum voluptatum saepe, soluta, voluptate nihil reprehenderit odio cum debitis facilis similique.</p>
        <div className='md:grid grid-cols-3 items-center md:px-40 p-5 mt-5 md:mt-0'>
          <div className='flex items-center'>
            <div style={{ width: '50px', height: '50px', borderRadius: '50%' }} className='flex items-center justify-center bg-gray-200'>
              <FaLocationDot />
            </div>
            <p className='ms-5'>123 main street,1234</p>
          </div>
          <div className='flex items-center'>
            <div style={{ width: '50px', height: '50px', borderRadius: '50%' }} className='flex items-center justify-center bg-gray-200'>
              <FaPhone />
            </div>
            <p className='ms-5'>123234567</p>
          </div>
          <div className='flex items-center'>
            <div style={{ width: '50px', height: '50px', borderRadius: '50%' }} className='flex items-center justify-center bg-gray-200'>
              <MdEmail />
            </div>
            <p className='ms-5'>bookstore@gmail.com</p>
          </div>
        </div>
        <div className='md:grid grid-cols-3 gap-10 my-5 p-5 items-center md:px-40'>
          <div className='bg-gray-200 p-5 text-center'>
            <h1 className='font-semibold text-2xl'>Send us message!</h1>
            <form >
              <div className='mb-5 my-10'>
                <input type="text" placeholder='Name' className='bg-white w-full p-2 rounded' />
              </div>
              <div className='mb-5 my-10'>
                <input type="text" placeholder='Email' className='bg-white w-full p-2 rounded' />
              </div>
              <div className='mb-5 my-10'>
                <input type="text" placeholder='Message' className='bg-white w-full p-2 rounded' />
              </div>
              <div className='mb-5'>
                <button className='bg-black p-2 w-full text-white text-lg flex justify-center items-center rounded'><FaPaperPlane className='ms-2 me-2' />Submit</button>
              </div>
            </form>
          </div>
          <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15715.90086977996!2d76.33234291738279!3d10.018903600000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080ffce877d5ef%3A0x8bef6870ad11b98!2sLuminar%20Technolab!5e0!3m2!1sen!2sin!4v1789543142036!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
