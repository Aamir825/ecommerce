import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <>
      <Box sx={{padding: "16px 0", margin: "60px 25px 0 25px", textAlign: 'center', borderTop: "1px solid #cecece",}}>
        <Typography sx={{color: "#a0a0a0"}}>Copyrighted &copy; and Developed By M.Aamir </Typography>
      </Box>
    </>
  )
}

export default Footer