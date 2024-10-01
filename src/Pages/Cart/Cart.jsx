import React from 'react'
import { Box, Button, Card, CardContent, CardMedia, Container, Typography } from "@mui/material"
import WestIcon from '@mui/icons-material/West';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link, useNavigate } from 'react-router-dom'
import useDispatchProduct from '../../Hooks/useDispatchProducts';
import { useDispatch, useSelector } from 'react-redux';
import { decrementQuantity, incrementQuantity } from '../../Features/Cart';

const Cart = () => {

  // const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const {removeFromCart} = useDispatchProduct();
  const cartItems = useSelector(state => state.cart.cartItem);
  const total = useSelector(state => state.cart.totalAmount);
  const user = JSON.parse(localStorage.getItem("client"));
  const navigate = useNavigate();
  const isLogin = () =>{
    if(user){
      navigate("/checkout");
    }else{
      navigate("/login")
    }
  }
  return (
    <>
      <Box component="div" sx={{ padding: "0 25px", mt: 10 }}>
        <Container>
          <Typography variant='h6' mb={2} fontWeight={600}>Your Cart</Typography>
          {cartItems.map((elem, index) => {
            return (
              <Card key={index} sx={{ width: "100%", boxShadow: 0, display: 'flex', flexDirection: { sm: 'row', xs: 'column' }, gap: 4, alignItems: 'center', borderRadius: { sm: 14, xs: 4 }, padding: "8px", mb: 1 }}>
                <CardMedia
                  sx={{ height: 90, width: 100, marginTop: {sm: 0, xs: 3}, borderRadius: 14, objectFit: 'cover' }}
                  image={elem.imageUrl}
                  title="green iguana"
                />
                <CardContent sx={{ padding: 0, mt: 2, display: 'flex', flexDirection: { sm: 'row', xs: 'column' }, justifyContent: 'space-between', alignItems: 'center', width: "100%", height: { sm: "auto", xs: 300 }, pr: { sm: 6, xs: 0 } }}>
                  <Typography gutterBottom variant="body2" sx={{ color: 'black', fontWeight: 500, width: 20, fontSize: "12px" }}>
                    {elem.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'black', fontWeight: 500 }}>
                    $ {elem.price}
                  </Typography>
                  <Box component="div" sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <RemoveIcon onClick={() => dispatch(decrementQuantity({id: elem.id}))} sx={{ backgroundColor: "black", color: "white", borderRadius: 6, cursor: 'pointer', width: 35, height: 35, padding: "8px" }} />
                    <Typography>{elem.quantity}</Typography>
                    <AddIcon onClick={() => dispatch(incrementQuantity({id: elem.id}))} sx={{ border: "1px solid #cecece", color: "black", borderRadius: 6, cursor: 'pointer', width: 35, height: 35, padding: "8px" }} />
                  </Box>
                  <Typography variant="body2" sx={{ color: 'black', fontWeight: 600 }}>
                    $ {elem.total}
                  </Typography>
                  <DeleteForeverIcon onClick={()=> removeFromCart(elem.id)} sx={{fontSize: "30px", color: '#be0000', cursor: 'pointer'}}/>
                </CardContent>
              </Card>
            )
          })}
          <Box component="div" sx={{ display: 'flex', justifyContent: 'flex-end', mt: 8, pr: 6 }}>
            <Box>
              <Typography variant='h3' sx={{ fontSize: "24px", fontWeight: 600 }}>$ {total}.00</Typography>
              <Typography variant='body1' sx={{ fontSize: "12px", color: "#757575", mt: 1 }}>Taxes and shipping calculated at checkout</Typography>
            </Box>
          </Box>
          <Box component="div" sx={{ mt: 3, display: 'flex', flexDirection: { sm: 'row', xs: 'column' }, gap: { sm: 0, xs: 2 }, justifyContent: 'space-between' }}>
            <Link to="/"><Button variant='outlined' startIcon={<WestIcon />} sx={{ border: "1px solid #cecece", color: "black", borderRadius: 6, fontSize: "8px", padding: "12px 35px" }}>continue</Button></Link>
            <Link onClick={isLogin}><Button variant='contained' sx={{ backgroundColor: 'black', borderRadius: 6, fontSize: "8px", padding: { sm: "12px 134px", xs: "12px 35px" } }}>Checkout</Button></Link>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default Cart