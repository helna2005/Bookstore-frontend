import React, { useEffect, useState } from 'react'
import AdminSidebar from '../compontents/AdminSidebar'
import AdminHeader from '../compontents/AdminHeader'
import { bookListAPI, editBookStatusAPI, userListAPI } from '../../services/allApi'
import axiosInstance from '../../api/axiosInstance'
import { toast } from 'react-toastify'

function AdminResource() {

  const [currentTab, setCurrentTab] = useState(1)
  const [allUsers,setAllUsers]=useState([])
  console.log(allUsers);
  const [allBooks,setAllBooks]=useState([])
  console.log(allBooks);
  

  useEffect(()=>{
    if(currentTab==2){
      getAllUsers()
    }else{
      getAllBooks()
    }
  },[currentTab])
  
  const getAllUsers=async()=>{
    const result=await userListAPI()
   if(result.status==200){
    setAllUsers(result.data)
   }
    
  }

  const getAllBooks=async()=>{
    const result=await bookListAPI()
   if(result.status==200){
    setAllBooks(result.data)
   }
    
  }

  const updateBookStatus=async(id)=>{
    const result=await editBookStatusAPI(id)
    if(result==200){
      toast.success("Book Approved Successfully")
      getAllBooks()
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
          <h1 className='text-3xl font-bold text-center mb-10'>All Resources</h1>
          {/* tabs */}
          <div className='flex justify-center items-center my-8 font-medium text-lg'>
            <p onClick={() => setCurrentTab(1)} className={currentTab == 1 ? 'p-4 border-gray-400 border-l border-t border-r rounded cursor-pointer ' : 'p-4 border-gray-400 border-b rounded cursor-pointer'}> Books</p>
            <p onClick={() => setCurrentTab(2)} className={currentTab == 2 ? 'p-4 border-gray-400 border-l border-t border-r rounded cursor-pointer ' : 'p-4 border-gray-400 border-b rounded cursor-pointer '}>Users</p>
          </div>
          {/* tab content */}
          {
            currentTab == 1 &&
            <div className='md:grid grid-cols-4 md:my-0'>
              {/* duplicating card */}
              {
                allBooks.length>0 ?
                allBooks?.map(book=>(
                  <div key={book?._id} className='shadow rounded p-3 m-4 md:my-0'>
                <img width={'100%'} height={'300px'} src={book?.imagURL} alt="" />
                <div className='flex flex-col justify-center items-center mt-4'>
                  <h2 className='text-blue-600 font-bold text-xl'>{book?.author}</h2>
                  <h3 className='text-lg'>{book?.title}</h3>
                  <p className='font-bold text-red-500'>{book?.price}</p>
                  {/* approved */}
                 {
                  book?.status =="pending" ?
                   <button onClick={()=>updateBookStatus(book?._id)} className='bg-green-600 text-white p-2 mt-2 w-full'>APPROVE</button>
                   :
                   <img width={'50%'} className='mt-2' src="https://cdn.pixabay.com/photo/2016/03/31/14/37/check-mark-1292787_1280.png" alt="" />
                 }
                </div>
              </div>
                ))
                :
                <div>error</div>
              }
            </div>
          }
          {
            currentTab == 2 &&
            <div className='md:grid grid-cols-3 w-full my-5'>
              {/* duplicating card */}
              {
                allUsers.length>0 ?
                allUsers?.map(user=>(
                  <div key={user._id} className='shadow rounded p-2 m-2 bg-blue-100'>
                <p className='text-red-500 font-bold text-md'>ID:{user._id} </p>
                <div className='flex mt-3 items-center'>
                  <img width={'80px'} height={'80px'} style={{borderRadius:'50%'}} src={user?.picture == "" ? "https://www.freeiconspng.com/thumbs/computer-user-icon/computer-user-icon-2.png" : user?.picture.startsWith("https://lh3.googleusercontent.com/") ? user?.picture :`${axiosInstance.defaults.baseURL}/uploads/${user?.picture}`} alt="user" />
                  <div className='flex flex-col ml-3 w-full'>
                    <h2 className='text-blue-600 font-bold text-md'>{user.username}</h2>
                    <p className='text-xs'>{user.email}</p>
                </div>
                </div>
              </div>
                ))
                :
                <div>error</div>

              }
            </div>
          }
        </div>
      </div>
    </>
  )
}

export default AdminResource
