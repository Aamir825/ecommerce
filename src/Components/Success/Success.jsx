import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Success = () => {
  const navigate = useNavigate();
  return (
    <>
       <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 6}}>
       <Card sx={{ maxWidth: 345, padding: 4, borderRadius: 2 }}>
        <Box sx={{height: 140, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <CheckCircleIcon sx={{color: "#04f07e", fontSize: 90}}/>
        </Box>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" textAlign={'center'}>
          Order Confirmed
        </Typography>
        <Link to="/orders"><Button sx={{width: "100%", backgroundColor: "black", color: "#E8CA67", padding: 1}}>Track Order</Button></Link>
      </CardContent>
    </Card>
    </Box>
    </>
  )
}

export default Success