import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './User/pages/Home'
import Contact from './User/pages/Contact'
import Books from './User/pages/Books'
import Profile from './User/pages/Profile'
import View from './User/pages/View'

import AdminDashboard from './admin/pages/AdminDashboard'
import AdminSettings from './admin/pages/AdminSettings'
import AdminResource from './admin/pages/AdminResource'

import Auth from './pages/Auth'
import Pnf from './pages/Pnf'

import Preloader from './components/Preloader1'
import Footer from './components/Footer'

import { useState } from 'react'

function App() {

  const [isLoading, setIsLoading] = useState(true)

  setTimeout(() => {
    setIsLoading(false)
  }, 6000)

  return (
    <>
      <Routes>
        <Route  path='/' element={isLoading?<Preloader/>:<Home/>} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/books' element={<Books />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Auth insideRegister/>} />

        <Route path='/profile/:id' element={<Profile />} />
        <Route path='/books/:id' element={<View />} />

        <Route path='/admin' element={<AdminDashboard />} />
        <Route path='/admin/resources' element={<AdminResource />} />
        <Route path='/admin/settings' element={<AdminSettings />} />

        <Route path='/*' element={<Pnf />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
