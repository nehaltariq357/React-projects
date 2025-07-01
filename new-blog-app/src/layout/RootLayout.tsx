import React from 'react'
import NavBar from '../components/nav/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'

const RootLayout = () => {
  return (
    <div>
        <NavBar/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default RootLayout