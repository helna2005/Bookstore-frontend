import React, { useContext, useEffect, useState } from 'react'
import Header1 from '../components/Header1'
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { getHomeBooksAPI } from '../../services/allApi';
import { searchContext } from '../../contextAPI/ShareContext';
import { ToastContainer, toast } from 'react-toastify';

function Home() {

  const navigate = useNavigate()
  const { searchKey, setSearchKey } = useContext(searchContext)
  console.log(searchKey);
  const [homeBooks, setHomeBooks] = useState([])
  // console.log(homeBooks);

  useEffect(() => {
    getHomeBooks()
  }, [])

  const getHomeBooks = async () => {
    const result = await getHomeBooksAPI()
    if (result.status == 200) {
      setHomeBooks(result.data)
    }

  }

  const handleSearch = () => {
    if (!searchKey) {
      toast.warning("Please input a book title")
    } else if (!sessionStorage.getItem("token")) {
      toast.warning("Please login to explore more!!!")
      setTimeout(() => {
        navigate('/login')
      }, 2000)
    } else if (searchKey && sessionStorage.getItem('token')) {
      navigate('/books')
    } else {
      toast.error("something went wrong!!")
    }
  }

  return (
    <>
      <Header1 />
      {/* hero section */}
      <div style={{ height: '500px' }} className='flex flex-col justify-center items-center bg-[url(/landing.png)] bg-cover bg-center text-white'>
        <div style={{ height: '500px', backgroundColor: 'rgba(0,0,0,0.4)' }} className='w-full flex flex-col justify-center items-center'>
          <h1 className='text-6xl font-bold'>Wonderfull Books</h1>
          <p>Git your family and friend a book</p>
          <div>
            <input onChange={(e) => setSearchKey(e.target.value)} type="text" placeholder='Search a Book' className='bg-white p-2 rounded-3xl w-100 text-black' />
            <FaSearch onClick={handleSearch} className='text-gray-500 cursor-pointer ' style={{ marginTop: '-28px', marginLeft: '360px' }} />
          </div>
        </div>
      </div>
      {/* new arrivals */}
      <section className='md:px-40 my-5 p-5 flex flex-col justify-center items-center'>
        <h1 className='text-3xl font-bold'>NEW ARRIVALS</h1>
        <h1 className='text-3xl my-2'>Expoler Our Lastest Collection</h1>
        <div className='md:grid grid-cols-4 md:my-0'>
          {/* duplicating card */}
          {
            homeBooks.length > 0 ?
              homeBooks.map(book => (
                <div key={book?._id} className='shadow rounded p-3 m-4 md:my-0'>
                  <img width={'100%'} height={'300px'} src={book?.imagURL} alt="" />
                  <div className='flex flex-col justify-center items-center mt-4'>
                    <h2 className='text-blue-600 font-bold text-xl'>{book?.author}</h2>
                    <h3 className='text-lg'>{book?.title}</h3>
                    <p className='font-bold text-red-500'>₹ {book?.discountPrice}</p>
                  </div>
                </div>
              ))
              :
              <p className='font-bold text-center my-3' >Loading...</p>
          }
        </div>
        {/* button */}
        <div className='text-center my-10'>
          <Link to={'/books'} className='bg-black p-3 text-white font-black'>Explore More....</Link>
        </div>
      </section>
      {/* authors */}
      <section className='md:grid grid-cols-2 items-center gap-10 p-5 md:px-40'>
        <div className='text-center'>
          <h2 className='text-2xl font-bold'>FEATURED AUTHORS</h2>
          <h3 className='text-xl'>Captivates with every word</h3>
          <p className='my-5 text-justify'>
            Welcome to the Author Spotlight section of our bookstore website! This feature is designed to celebrate writers, showcase their creative journeys, and help readers discover the minds behind their favorite books.
          </p>
          <p className='text-justify'>Our Author Features include:</p>
          <p className='text-justify my-3'><span className='font-black'>✨ Author Profiles :</span>
            Get to know each author through detailed profiles that highlight their biography, writing style, achievements, and personal inspirations.
          </p>
          <p className='text-justify my-3'><span className='font-black'>📖 Published Works : </span>Explore a curated list of books written by the author with quick access to book details, reviews, and purchase options.</p>
          <p className='text-justify my-3'><span className='font-black'>🎤 Interviews & Insights :  </span>Exclusive interviews, behind-the-scenes stories, and writing tips that offer a deeper look into the author’s creative world.</p>
        </div>
        <div className='p-5 flex items-center justify-center'>
          <img src="https://images.squarespace-cdn.com/content/v1/64bfd6aa127fba0754a78d65/1690617601186-7MS4W32UWBXKFKZTCQ14/authorphotos5-1024x683.jpg" alt="" />
        </div>
      </section>

      {/* testimonials */}
      <section className='md:px-40 my-5 p-5 flex flex-col justify-center items-center'>
        <h1 className='text-3xl font-bold'>TESTIMONIALS</h1>
        <h1 className='text-3xl my-2'>see what other are saying</h1>
        <div className='my-5 flex flex-col justify-center items-center'>
          <img width={'200px'} height={'200px'} style={{ borderRadius: '50%' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4OGgFsQ8vOkvim1NNHyy7aNd9T7DjBPIyAQczhGc6bcKhkHYIXCYwS81A&s=10" alt="" />
          <h3 className='my-3'>Luka</h3>
          <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil dicta est quibusdam saepe accusamus voluptate nulla quas ipsum! Nihil asperiores qui ullam quod laboriosam? Incidunt provident doloribus iste sit necessitatibus!</p>
        </div>
      </section>
      {/* toast container */}
      <ToastContainer position='top-center' theme='colored' autoClose={3000} />
    </>
  )
}

export default Home
