import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import { ThemeProvider } from '@emotion/react'
import { theme } from '../../Theme/Theme'

const Layout = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Outlet />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default Layout