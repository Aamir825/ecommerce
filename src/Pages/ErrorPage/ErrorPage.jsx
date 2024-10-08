import { Box, Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const ErrorPage = () => {

  const navigate = useNavigate();
  const handleSubmit = () =>{
    navigate(-1)
  }
  return (
    <>
      <Box sx={{width: "100%", height: "100vh", display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        <img src='/images/404.png'/>
        <Button sx={{backgroundColor: "black", color: "#E8CA67", padding: "4px 20px", marginTop: 2}} onClick={handleSubmit}>Go Back</Button>
      </Box>
    </>
  )
}
