import React, { useState, useEffect } from 'react'
import authService from './appwrite/auth'
import { useDispatch } from 'react-redux'
import './App.css'
import { login, logout } from './store/authSlice'
import { Header, Footer, Loader } from './components'
import { Outlet } from 'react-router-dom'


function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))

        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, [loading])

  if (!loading) return (
    <div className='min-h-screen flex flex-wrap content-between bg-[#4D4D4D]'>
      <div className='w-full block'>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )

  return (
    <>
    <div className='w-full h-screen flex justify-center items-center'>
      <Loader />
    </div>
    </>
  )
}

export default App
