import { useFormik } from 'formik';
import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup'

import { ToastContainer, toast } from 'react-toastify';
import { loginAPI, registerAPI } from '../services/allApi';

function Auth({ insideRegister }) {

  //navigate to login page
  const navigate = useNavigate()

  //password hide
  const [togglePassword, setTogglePassword] = useState(false)

  const formik = useFormik({
    initialValues: {
      username: "Username",
      email: "",
      password: ""
    },
    validationSchema: Yup.object({
      username: Yup.string().min(3, "Must be atleast 3 characters").required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string().required("Required")
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);

      if (insideRegister) {
        console.log("Register API call");
        handleRegister(values)
      } else {
        console.log("Login API call");
        handleLogin(values)
      }
      resetForm()
    }
  })

  const handleLogin = async (userData) => {
    const result = await loginAPI(userData)
    console.log(result);
    if (result.status == 200) {
      toast.success("Successfully Login....")
      sessionStorage.setItem("token", result.data.token)
      sessionStorage.setItem("user", JSON.stringify(result.data.user))
      setTimeout(() => {
        if (result.data.user.role == "admin") {
          navigate('/admin')
        } else {
          navigate('/')
        }
      }, 2500)
    } else {
      toast.error(result)
    }
  }


const handleRegister = async (userData) => {
  const result = await registerAPI(userData)
  console.log(result);
  if (result.status == 201) {
    toast.success("Successfully Registed....Please Login!!")
  } else {
    toast.error(result)
  }
  navigate("/login")
}

return (
  <div className='w-full min-h-screen flex justify-center items-center bg-[url(/login.png)] bg-cover bg-center text-white'>
    <div className='p-10'>
      <h1 className='text-center font-bold text-3xl'>BOOKSTORE</h1>
      <div style={{ width: '400px' }} className='bg-amber-100 text-black p-5 flex justify-center items-center flex-col my-5'>
        <div style={{ width: '80px', height: '80px', borderRadius: '50%' }} className='border mb-5 flex justify-center items-center '>
          <FaUser className='text-3xl' />
        </div>
        <h1 className='text-3xl'>{insideRegister ? "Register" : "Login"}</h1>
        <form onSubmit={formik.handleSubmit} className='my-5 w-full'>
          {/* username */}
          {
            insideRegister &&
            <>
              <input name='username' value={formik.values.username} onChange={formik.handleChange} className='bg-white p-2 w-full rounded my-5 text-black' type="text" placeholder='Username' />
              <div className='mb-5 text-yellow-400'>{formik.errors.username}</div>
            </>
          }
          {/* email */}

          <input name='email' value={formik.values.email} onChange={formik.handleChange} className='bg-white p-2 w-full rounded my-5 text-black' type="text" placeholder='Email' />
          <div className='mb-5 text-yellow-400'>{formik.errors.email}</div>
          {/* password */}

          <div className='flex items-center'>
            <input name='password' value={formik.values.password} onChange={formik.handleChange} className='bg-white p-2 w-full rounded my-5 text-black' type={togglePassword ? "text" : "password"} placeholder='password' />

            {
              togglePassword ?
                <FaEye onClick={() => setTogglePassword(!togglePassword)} className='cursor-pointer' style={{ marginLeft: '-30px' }} />
                :
                <FaEyeSlash onClick={() => setTogglePassword(!togglePassword)} className='cursor-pointer' style={{ marginLeft: '-30px' }} />
            }
          </div>
          <div className='mb-5 text-yellow-400'>{formik.errors.password}</div>
          {/* forgetpassword */}
          <div className='flex justify-between mb-5'>
            <p className='text-xs text-yellow-800'>Never share your password</p>
            {
              !insideRegister &&
              <button className='text-xs underline'>Forget password</button>
            }

          </div>
          {/* login & register button */}
          <div className='text-center'>
            {
              insideRegister ?
                <button type='submit' className='bg-green-500 p-2 w-full rounded'>Register</button>
                :
                <button type='submit' className='bg-green-500 p-2 w-full rounded'>Login</button>
            }
          </div>
          {/* google login */}
          {
            !insideRegister &&
            <div className='MY-5 text-center'>
              <p>------------------------------or------------------------------</p>
              <div className='mt-2 flex justify-center items-center w-full'>Google Authentication</div>
            </div>
          }
          {/* new / already register msg */}
          <div className='text-center my-5'>
            {
              insideRegister ?
                <p className='text-amber-700'>Existing user?<Link to={'/login'} className='underline ms-5'>Login</Link></p>
                :
                <p className='text-amber-700'> New User?<Link to={'/register'} className='underline ms-5'>Register</Link></p>
            }
          </div>
        </form>
      </div>
    </div>

    {/* toast container */}
    <ToastContainer position='top-center' theme='colored' autoClose={3000} />
  </div>
)
}

export default Auth
