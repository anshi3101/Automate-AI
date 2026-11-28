import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import { me } from './features/auth.js'
import { useDispatch, useSelector } from 'react-redux'
import { setUserData } from './redux/userSlice.js'

function App() {
  const dispatch = useDispatch()
  const { userData } = useSelector((state) => state.user)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await me()
        dispatch(setUserData(data))
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    fetch()
  }, [dispatch])


  if (loading) return null // Ya koi simple loader/spinner dikha sakti hain

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={userData ? <Home/> : <Navigate to="/" />} />
        <Route path="/login" element={!userData ? <Login/> : <Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App