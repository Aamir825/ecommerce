import React, { useState } from 'react'
import Header from '../../Components/Header/Header'
import {Box, Container} from '@mui/material'
import Filters from '../../Components/Filters/Filters'
import Products from '../../Components/Products/Products'

const Shop = () => {

  return (
    <>
      <Box sx={{padding: "0 25px"}}>
        <Container>
        <Header/>
        <Filters/>
        <Products/>
        </Container>
      </Box>
    </>
  )
}

export default Shop