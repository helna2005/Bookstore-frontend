import React, { useEffect, useState } from 'react'
import AdminHeader from '../compontents/AdminHeader'
import AdminSidebar from '../compontents/AdminSidebar'
import { FaPen } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../../api/axiosInstance'
import { ToastContainer, toast } from 'react-toastify';
import { adminUpdateAPI } from '../../services/allApi'

function AdminSettings() {
  const [offCanvas, setOffCanvas] = useState(false)

  const [preview, setPreview] = useState("")
  const [passwordMatch, setPasswordMatch] = useState(true)
  const [imageFile, setImageFile] = useState(false)

  const navigate = useNavigate()

  const [userDetails, setUserDetails] = useState({
    username: "", password: "", cPassword: "", bio: "", picture: "", role: "", id: ""
  })

  const [existingPicture, setExistingPicture] = useState("")

  useEffect(() => {
    if (sessionStorage.getItem("user")) {
      const user = JSON.parse(sessionStorage.getItem('user'))
      setUserDetails({ ...userDetails, username: user.username, role: user.role, bio: user.bio, id: user._id })
      setExistingPicture(user.picture)
    }
  }, [])
  console.log(userDetails);
  console.log(existingPicture);

  const handleFileUpload = (e) => {
    //console.log(e.target.files[0]);
    const imageFile = e.target.files[0]
    if (imageFile.type.startsWith("image/")) {
      setUserDetails({ ...userDetails, picture: e.target.files[0] })
      //convert file into url
      const url = URL.createObjectURL(e.target.files[0])
      //console.log(url);
      setPreview(url)
      setImageFile(true)
    } else {
      setImageFile(false)
    }
  }

  const checkPassword = (data) => {
    setUserDetails({ ...userDetails, cPassword: data })
    userDetails.password == data ? setPasswordMatch(true) : setPasswordMatch(false)
  }

  const resetProfile = () => {
    const user = JSON.parse(sessionStorage.getItem('user'))
    setUserDetails({ ...userDetails, username: user.username, role: user.role, bio: user.bio, id: user._id })
    setExistingPicture(user.picture)
    setPreview("")
    setImageFile(false)
    setPasswordMatch(true)
  }

  const handleUpdateUser = async () => {
    const { username, password, cPassword, picture, id } = userDetails
    if (!username || !password || !cPassword ) {
      toast.info("Please fill the form completly")
    } else if (passwordMatch) {
      //object of form-data class
      const reqBody = new FormData()
      for (let key in userDetails) {
        if (key != "picture") {
          reqBody.append(key, userDetails[key])
        } else {
          preview ? reqBody.append("picture", picture) : reqBody.append("picture", existingPicture)
        }
      }
      //    console.log(userDetails);
      //    console.log(reqBody);

      //api call
      const result = await adminUpdateAPI(id, reqBody)
      console.log(result);
      if (result.status == 200) {
        toast.success("Admin profile updated...please login")
        setTimeout(() => {
          sessionStorage.clear()
          navigate('/login')
        }, 2500)
      }

    }
  }
  return (
    <>
      <AdminHeader />
      <div className="md:grid grid-cols-5 gap-2">
        <div className="col-span-1">
          <AdminSidebar />
        </div>
        <div className='col-span-4 p-10'>
          <h1 className='text-3xl font-bold text-center mb-10 mt-5'>Settings</h1>
          <div className="md:grid grid-cols-2 items-center">
            {/* text part */}
            <div>
              <h2 className='text-xl mb-5 font-bold'>Welcome, Admin 👋</h2>
              <p className="text-justify">
                This is your personal administration space where you can manage your account details, system preferences, and platform roles with ease. From here, you can update essential information such as your username, password, contact details, and notification preferences — ensuring your access remains secure and personalized.
              </p>
              <h4 className='text-lg my-5 font-medium'>🔧 What You Can Manage in This Section:</h4>
              <ul>
                <li>✏️ Update personal details (name, email, role, profile picture)</li>
                <li>🔐 Change or reset your password</li>
                <li>📢 Configure notification and alert preferences</li>
                <li>👥 Manage permissions based on assigned access leve</li>
                <li>🧩 Customize dashboard visibility and layout</li>
              </ul>
              <p className='my-5 text-justify'>Your profile settings help ensure your administrative tools work the way you need them to — securely, efficiently, and with complete control. Thank you for keeping the platform organized and running smoothly. Continue managing, updating, and improving the system — one step at a time. 🚀📚</p>
            </div>
            {/* edit profile */}
            <div className='flex justify-center items-center flex-col m-10 bg-blue-100 p-5 rounded'>
              <label htmlFor='userprofile'>
                <input onChange={e => handleFileUpload(e)} type="file" id='userprofile' hidden />
                {/* <img style={{ width: '200px', height: '200px', borderRadius: '50%' }} src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" /> */}
                {
                  existingPicture == "" ?
                    <img style={{ width: '200px', height: '200px', borderRadius: '50%' }} src={preview ? preview : "https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"} alt="" />
                    :
                    existingPicture.startsWith("https://lh3.googleusercontent.com/") ?
                      <img style={{ width: '200px', height: '200px', borderRadius: '50%' }} src={preview ? preview : existingPicture} alt='user' />
                      :
                      <img style={{ width: '200px', height: '200px', borderRadius: '50%' }} src={preview ? preview : `${axiosInstance.defaults.baseURL}/uploads/${existingPicture}`} alt='no image' />
                }
              </label>
              {
                !imageFile &&
                <div className='mt-5 text-yellow-500 text-sm'>Only Accepts Image file</div>
              }

              {/* username */}
              <div className='mt-10 mb-3 w-full px-5'>
                <input value={userDetails.username} onChange={e => setUserDetails({ ...userDetails, username: e.target.value })} type="text" placeholder='username' className='w-full border border-gray-400 rounded p-2' />
              </div>
              {/* new password */}
              <div className='mt-3 mb-3 w-full px-5'>
                <input value={userDetails.password} onChange={e => setUserDetails({ ...userDetails, password: e.target.value })} type="text" placeholder='New password' className='w-full border border-gray-400 rounded p-2' />
              </div>
              {/* confirm password */}
              <div className='mt-3 mb-3 w-full px-5'>
                <input value={userDetails.cPassword} onChange={e => checkPassword(e.target.value)} type="text" placeholder='Confirm password' className='w-full border border-gray-400 rounded p-2' />
              </div>
              {
                !passwordMatch &&
                <div className='mt-5 text-yellow-500 text-sm'>Password not matching....Enter correct password </div>
              }
              {/* reset and update button */}
              <div className='d-flex justify-end w-full px-5 mt-5'>
                <button onClick={resetProfile} className='bg-yellow-500 text-white p-3 rounded me-2'>Reset</button>
                <button onClick={handleUpdateUser} className='bg-green-500 text-white p-3 rounded '>Upadte</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* toast container */}
      <ToastContainer position='top-center' theme='colored' autoClose={3000} />
    </>
  )
}

export default AdminSettings
