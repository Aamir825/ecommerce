import React from 'react'
import { Box, Button, Card, CardContent, CardMedia, Container, Grid, InputLabel, TextField, Typography } from "@mui/material"
import {loadStripe} from '@stripe/stripe-js';
import {CardElement,} from "@stripe/react-stripe-js"

const Checkout = () => {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const total = JSON.parse(localStorage.getItem("totalAmount")) || 0;

  const makePayment = async() =>{
    const stripe = await loadStripe('pk_test_51Q5TZQFHwQXqOYDjJbKamWUsyy8ahDklYRT60blp2R040VsZWBuPXzzOmlVcYffRKKJuUr68AxkMJLLpRrOmNGfi00xmbrM2Vp');
    const body = {
      products: cartItems,
    }
    const header = {
      "Content-Type": "application/json"
    }
    const response = await fetch(`http://localhost:7000/api/create-checkout-session`,{
      method: "POST",
      headers: header,
      body: JSON.stringify(body)
    })

    const session = await response.json();
    const result = stripe.redirectToCheckout({
      sessionId: session.id
    });

    if(result.error){
      console.log(result.error)
    }
  }

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
                    }} label="Name" type='text' variant="outlined" sx={{ width: "100%", fontSize: "8px" }} InputProps={{
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
                    }} label="Mobile Number" type='number' variant="outlined" sx={{ width: "100%" }} InputProps={{
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
                    }} label="Mobile Number" type='Email' variant="outlined" sx={{ width: "100%" }} InputProps={{
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
                    }} label="Howthone" type='Text' variant="outlined" sx={{ width: "100%" }} InputProps={{
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
                    }} label="California" type='Text' variant="outlined" sx={{ width: "100%" }} InputProps={{
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
                    }} label="90250" type='Text' variant="outlined" sx={{ width: "100%" }} InputProps={{
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
                    }} label="CA" type='Text' variant="outlined" sx={{ width: "100%" }} InputProps={{
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
                    }} label="4976 libby street" type='Text' variant="outlined" sx={{ width: "100%" }} InputProps={{
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