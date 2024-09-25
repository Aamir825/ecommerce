import React from 'react'
import { Box, Button, Card, CardContent, CardMedia, Container, Typography } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import WestIcon from '@mui/icons-material/West';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../Features/Counter';


const Cart = () => {

  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <>
      <Box component="div" sx={{ padding: "0 25px", mt: 10 }}>
        <Container>
          <Typography variant='h6' mb={2} fontWeight={600}>Your Cart</Typography>
          <Card sx={{ width: "100%", boxShadow: 0, display: 'flex', flexDirection: { sm: 'row', xs: 'column' }, gap: 4, alignItems: 'center', borderRadius: { sm: 14, xs: 4 }, padding: "8px", mb: 1 }}>
            <CardMedia
              sx={{ height: 90, width: 100, borderRadius: 14, objectFit: 'cover' }}
              image="https://cdn.pixabay.com/photo/2024/01/20/01/54/ai-generated-8520248_1280.jpg"
              title="green iguana"
            />
            <CardContent sx={{ padding: 0, mt: 2, display: 'flex', flexDirection: { sm: 'row', xs: 'column' }, justifyContent: 'space-between', alignItems: 'center', width: "100%", height: { sm: "auto", xs: 300 }, pr: { sm: 6, xs: 0 } }}>
              <Typography gutterBottom variant="body2" sx={{ color: 'black', fontWeight: 500, }}>
                Doona's Magic Crayons
              </Typography>
              <Typography variant="body2" sx={{ color: 'black', fontWeight: 500 }}>
                $ 80.00
              </Typography>
              <Box component="div" sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <RemoveIcon onClick={() => dispatch(decrement())} sx={{ backgroundColor: "black", color: "white", borderRadius: 6, cursor: 'pointer', width: 35, height: 35, padding: "8px" }} />
                <Typography>{counter}</Typography>
                <AddIcon onClick={() => dispatch(increment())} sx={{ border: "1px solid #cecece", color: "black", borderRadius: 6, cursor: 'pointer', width: 35, height: 35, padding: "8px" }} />
              </Box>
              <Typography variant="body2" sx={{ color: 'black', fontWeight: 600 }}>
                $ 80.00
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ width: "100%", boxShadow: 0, display: 'flex', flexDirection: { sm: 'row', xs: 'column' }, gap: 4, alignItems: 'center', borderRadius: { sm: 14, xs: 4 }, padding: "8px", mb: 1 }}>
            <CardMedia
              sx={{ height: 90, width: 100, borderRadius: 14, objectFit: 'cover' }}
              image="https://cdn.pixabay.com/photo/2024/01/20/01/54/ai-generated-8520248_1280.jpg"
              title="green iguana"
            />
            <CardContent sx={{ padding: 0, mt: 2, display: 'flex', flexDirection: { sm: 'row', xs: 'column' }, justifyContent: 'space-between', alignItems: 'center', width: "100%", height: { sm: "auto", xs: 300 }, pr: { sm: 6, xs: 0 } }}>
              <Typography gutterBottom variant="body2" sx={{ color: 'black', fontWeight: 500, }}>
                Doona's Magic Crayons
              </Typography>
              <Typography variant="body2" sx={{ color: 'black', fontWeight: 500 }}>
                $ 80.00
              </Typography>
              <Box component="div" sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <RemoveIcon onClick={() => dispatch(decrement())} sx={{ backgroundColor: "black", color: "white", borderRadius: 6, cursor: 'pointer', width: 35, height: 35, padding: "8px" }} />
                <Typography>{counter}</Typography>
                <AddIcon onClick={() => dispatch(increment())} sx={{ border: "1px solid #cecece", color: "black", borderRadius: 6, cursor: 'pointer', width: 35, height: 35, padding: "8px" }} />
              </Box>
              <Typography variant="body2" sx={{ color: 'black', fontWeight: 600 }}>
                $ 80.00
              </Typography>
            </CardContent>
          </Card>

          <Box component="div" sx={{ display: 'flex', justifyContent: 'flex-end', mt: 8, pr: 6 }}>
            <Box>
              <Typography variant='h3' sx={{ fontSize: "24px", fontWeight: 600 }}>$ 2,945.00</Typography>
              <Typography variant='body1' sx={{ fontSize: "12px", color: "#757575", mt: 1 }}>Taxes and shipping calculated at checkout</Typography>
            </Box>
          </Box>
          <Box component="div" sx={{ mt: 3, display: 'flex', flexDirection: { sm: 'row', xs: 'column' }, gap: { sm: 0, xs: 2 }, justifyContent: 'space-between' }}>
            <Link to="/"><Button variant='outlined' startIcon={<WestIcon />} sx={{ border: "1px solid #cecece", color: "black", borderRadius: 6, fontSize: "8px", padding: "12px 35px" }}>continue</Button></Link>
            <Button variant='contained' sx={{ backgroundColor: 'black', borderRadius: 6, fontSize: "8px", padding: { sm: "12px 134px", xs: "12px 35px" } }}>Checkout</Button>
          </Box>
        </Container>
      </Box>  
    </>
  )
}

export default Cart