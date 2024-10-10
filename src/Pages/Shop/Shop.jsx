import React, { useState } from 'react'
import Header from '../../Components/Header/Header'
import {Box, Container} from '@mui/material'
import Filters from '../../Components/Filters/Filters'
import Products from '../../Components/Products/Products'

const Shop = () => {
  const [category, setCategory] = useState('');
  return (
    <>
      <Box>
        <Container>
        <Header/>
        <Filters setCategory={setCategory}/>
        <Products category={category}/>
        </Container>
      </Box>
    </>
  )
}

export default Shop