import { Box, Typography } from '@mui/material'
import React from 'react'

const Header = () => {
  return (
    <>
      <Box component='div' textAlign='center' mt={5}>
        <Typography variant='h2' sx={{fontWeight: 700, fontSize:{md: "60px",xs: "26px"}}}>Creative tools for</Typography>
        <Typography variant='h2' sx={{fontWeight: 700, fontSize:{md: "60px",xs: "26px"}}}>endless imagination.</Typography>
      </Box>
    </>
  )
}

export default Header