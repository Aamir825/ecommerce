import React, { useState } from 'react'
import { Box, Button, Card, CardContent, CardMedia, Container, Grid, InputLabel, TextField, Typography } from "@mui/material"
import useCheckouts from '../../Hooks/useCheckout';

const Checkout = () => {
  const {total, deliveryData, cartItems, handleInputChange, makePayment} = useCheckouts();

  return (
    <>
      <Box component="div" sx={{ mt: 6 }}>
        <Container>
          <Grid container spacing={2}>
            <Grid item md={7} xs={12}>
              <Typography sx={{ mb: 2 }}>Delivery Information</Typography>
              <Box sx={{ bgcolor: 'white', borderRadius: 3 }}>
                <Grid container padding={2} spacing={1}>
                  <Grid item md={6} xs={12} mb={2}>
                    <InputLabel sx={{ mb: 1, fontSize: "12px", fontWeight: 500, color: 'black' }}>Name</InputLabel>
                    <TextField inputProps={{
                      sx: {
                        height: 16,
                      }
                    }} label="Name" name='name' value={deliveryData.name} onChange={handleInputChange} required type='text' variant="outlined" sx={{ width: "100%", fontSize: "8px" }} InputProps={{
                      sx: {
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#eeeeee', // Change the border color
                        },
                      }
                    }} InputLabelProps={{ sx: { color: "#9e9e9e" } }} />
                  </Grid>
                  <Grid item md={6} xs={12} mb={2}>
                    <InputLabel sx={{ mb: 1, fontSize: "12px", fontWeight: 500, color: 'black' }}>Mobile Number</InputLabel>
                    <TextField inputProps={{
                      sx: {
                        height: 16,
                      }
                    }} label="Mobile Number" name='number' value={deliveryData.number} onChange={handleInputChange} required type='number' variant="outlined" sx={{ width: "100%" }} InputProps={{
                      sx: {
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#eeeeee', // Change the border color
                        },
                      }
                    }} InputLabelProps={{ sx: { color: "#9e9e9e" } }} />
                  </Grid>
                  <Grid item md={6} xs={12} mb={2}>
                    <InputLabel sx={{ mb: 1, fontSize: "12px", fontWeight: 500, color: 'black' }}>Email</InputLabel>
                    <TextField inputProps={{
                      sx: {
                        height: 16,
                      }
                    }} label="email" name='email' value={deliveryData.email} onChange={handleInputChange} required type='Email' variant="outlined" sx={{ width: "100%" }} InputProps={{
                      sx: {
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#eeeeee', // Change the border color
                        },
                      }
                    }} InputLabelProps={{ sx: { color: "#9e9e9e" } }} />
                  </Grid>
                  <Grid item md={6} xs={12} mb={2}>
                    <InputLabel sx={{ mb: 1, fontSize: "12px", fontWeight: 500, color: 'black' }}>City</InputLabel>
                    <TextField inputProps={{
                      sx: {
                        height: 16,
                      }
                    }} label="Howthone" name='city' value={deliveryData.city} onChange={handleInputChange} required type='Text' variant="outlined" sx={{ width: "100%" }} InputProps={{
                      sx: {
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#eeeeee', // Change the border color
                        },
                      }
                    }} InputLabelProps={{ sx: { color: "#9e9e9e" } }} />
                  </Grid>
                  <Grid item md={6} xs={12} mb={2}>
                    <InputLabel sx={{ mb: 1, fontSize: "12px", fontWeight: 500, color: 'black' }}>State</InputLabel>
                    <TextField inputProps={{
                      sx: {
                        height: 16,
                      }
                    }} label="California" name='state' value={deliveryData.state} onChange={handleInputChange} required type='Text' variant="outlined" sx={{ width: "100%" }} InputProps={{
                      sx: {
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#eeeeee', // Change the border color
                        },
                      }
                    }} InputLabelProps={{ sx: { color: "#9e9e9e" } }} />
                  </Grid>
                  <Grid item md={3} xs={12} mb={2}>
                    <InputLabel sx={{ mb: 1, fontSize: "12px", fontWeight: 500, color: 'black' }}>ZIP</InputLabel>
                    <TextField inputProps={{
                      sx: {
                        height: 16,
                      }
                    }} label="90250" name='zip' value={deliveryData.zip} onChange={handleInputChange} required type='Text' variant="outlined" sx={{ width: "100%" }} InputProps={{
                      sx: {
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#eeeeee', // Change the border color
                        },
                      }
                    }} InputLabelProps={{ sx: { color: "#9e9e9e" } }} />
                  </Grid>
                  <Grid item md={3} xs={12} mb={2}>
                    <InputLabel sx={{ mb: 1, fontSize: "12px", fontWeight: 500, color: 'black' }}>State</InputLabel>
                    <TextField inputProps={{
                      sx: {
                        height: 16,
                      }
                    }} label="CA" name='state2' value={deliveryData.state2} onChange={handleInputChange} required type='Text' variant="outlined" sx={{ width: "100%" }} InputProps={{
                      sx: {
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#eeeeee', // Change the border color
                        },
                      }
                    }} InputLabelProps={{ sx: { color: "#9e9e9e" } }} />
                  </Grid>
                  <Grid item md={6} xs={12} mb={2}>
                    <InputLabel sx={{ mb: 1, fontSize: "12px", fontWeight: 500, color: 'black' }}>Address</InputLabel>
                    <TextField inputProps={{
                      sx: {
                        height: 16,
                      }
                    }} label="4976 libby street" name='address' value={deliveryData.address} onChange={handleInputChange} required type='Text' variant="outlined" sx={{ width: "100%" }} InputProps={{
                      sx: {
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#eeeeee', // Change the border color
                        },
                      }
                    }} InputLabelProps={{ sx: { color: "#9e9e9e" } }} />
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item md={5} xs={12} >
              <Typography sx={{ mb: 1 }}>Order Summary</Typography>
              <Box sx={{ height: 700, bgcolor: 'white', borderRadius: 3, padding: "8px 20px", position: 'relative' }}>
                {cartItems.map((elem,index)=>{ 
                  return(
                <Card key={index} sx={{ width: "100%", boxShadow: 0, display: 'flex', gap: 4, alignItems: 'center', borderRadius: 14, padding: "2px", mb: 1 }}>
                  <CardMedia
                    sx={{ height: 60, width: 80, borderRadius: 14, objectFit: 'cover' }}
                    image={elem.imageUrl}
                    title="green iguana"
                  />
                  <CardContent sx={{ padding: 0, mt: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: "100%", pr: 1 }}>
                    <Box>
                      <Typography gutterBottom variant="body2" sx={{ color: 'black', fontWeight: 600 }}>
                        {elem.titel}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'black', fontWeight: 500 }}>
                        $ {elem.price} x {elem.quantity}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
                )})}
                <Box sx={{ width: "100%", position: 'absolute', bottom: 10, left: 0, padding: "0 20px" }}>
                  <Box component="div" sx={{ display: 'flex', justifyContent: 'space-between', padding: "10px 0", borderTop: "1px solid #f0f0f0" }}>
                    <Typography sx={{ color: "#777777", fontSize: "13px" }}>Subtotal</Typography>
                    <Typography sx={{ fontSize: "13px", fontWeight: 600 }}>$ {total}.00</Typography>
                  </Box>
                  <Box component="div" sx={{ display: 'flex', justifyContent: 'space-between', padding: "10px 0", borderBottom: "1px solid #f0f0f0" }}>
                    <Typography sx={{ color: "#777777", fontSize: "13px" }}>Shipping</Typography>
                    <Typography sx={{ fontSize: "13px", fontWeight: 600 }}>2%</Typography>
                  </Box>
                  <Box component="div" sx={{ display: 'flex', justifyContent: 'space-between', padding: "10px 0" }}>
                    <Typography sx={{ color: "#777777", fontSize: "13px" }}>Total(USD)</Typography>
                    <Typography sx={{ fontSize: "13px", fontWeight: 600 }}>$ {total + 100}.00</Typography>
                  </Box>
                  <Button onClick={makePayment} variant='contained' sx={{ backgroundColor: 'black', borderRadius: 1, fontSize: "9px", padding: "16px 0", width: "100%", mt: 2 }}>Confirm order</Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default Checkout