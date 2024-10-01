import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import { ThemeProvider } from '@emotion/react'
import { theme } from '../../Theme/Theme'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import { Container } from '@mui/material'

const Layout = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        {/* <Container><Breadcrumb/></Container> */}
        <Outlet />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default Layout