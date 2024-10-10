import { Box, Button, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import DescriptionIcon from '@mui/icons-material/Description';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import FlightIcon from '@mui/icons-material/Flight';
import React from 'react'

const Orders = () => {

    const deliveryData = JSON.parse(localStorage.getItem("deliveryInfo")) || [];
    const products = JSON.parse(localStorage.getItem("cart")) || [];
    const total = JSON.parse(localStorage.getItem("totalAmount")) || 0;
    return (
        <>
            <Box mt={8}>
                <Container>
                    <Box sx={{display: 'flex', justifyContent: 'space-between', flexDirection:{sm: "row", xs: "column"}, mb: 1}}>
                        <Typography variant='h6'>Order ID: 4569032129</Typography>
                        <Box>
                            <Button startIcon={<DescriptionIcon/>} sx={{border: "1px solid #dcdcdc", mr: 1}}>Invoice</Button>
                            <Button endIcon={<GpsFixedIcon/>} sx={{backgroundColor: "black", color: "#E8CA67"}}>Track Order</Button>
                        </Box>
                    </Box>
                    <Box sx={{display:'flex', gap:{sm: 4, xs: 1}, flexDirection:{sm: "row", xs: "column"}, mb: 1}}>
                        <Typography variant='body1' color='#8a8a8a'>Order date: Sep 07, 2024</Typography>
                        <Typography variant='body1' color='#1bd751'><FlightIcon sx={{mr: 1, fontSize:'16px'}}/>Estimate delivery: Sep 20, 2024 </Typography>
                    </Box>
                    {products.map((item)=>(
                    <Box display={'flex'} justifyContent={'space-between'} pt={1} pb={1}>
                        <Box display={'flex'} gap={2}>
                            <img alt='product' style={{width: 80, height: 70, objectFit: 'cover', borderRadius: 5}} src={item.imageUrl}/>
                            <Box>
                                <Typography >{item.title}</Typography>
                                <Typography variant='body1' color='#8a8a8a'>${item.price}</Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Typography fontWeight={500}>${item.total}</Typography>
                            <Typography variant='body1' color='#8a8a8a' fontSize={"14px"}>Qty: {item.quantity}</Typography>
                        </Box>
                    </Box>
                    ))}
                    <Box display={'flex'} justifyContent={'space-between'} borderTop={"1px solid #d3d3d3"} mt={2} pt={2}>
                        <Box>
                            <Typography mb={1}>Payment</Typography>
                            <Typography>Visa **23**89</Typography>
                        </Box>
                        <Box>
                            <Typography mb={1}>Delivery</Typography>
                            <Typography color='#8a8a8a' fontSize={"13px"}>Address</Typography>
                            <Typography>{deliveryData.address}</Typography>
                            <Typography>{deliveryData.city}</Typography>
                            <Typography>{deliveryData.number}</Typography>
                            <Typography>Address</Typography>
                        </Box>
                    </Box>
                    <Box display={'flex'} justifyContent={'space-between'} borderTop={"1px solid #d3d3d3"} mt={2} pt={2}>
                        <Typography>Total</Typography>
                        <Typography fontWeight={500}>${total}</Typography>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default Orders