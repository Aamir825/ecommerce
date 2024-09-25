import React from 'react'
import { Box, Button, Card, CardContent, CardMedia, Container, Tooltip, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../Features/Counter';

export const ProductDetails = () => {

  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <>
      <Box sx={{ padding: "0 25px", mt: 10 }}>
        <Container>
          <Card sx={{ display: 'flex', flexDirection: { sm: 'row', xs: 'column' }, gap: 5, boxShadow: 0, backgroundColor: 'transparent' }}>
            <CardMedia
              component={"img"}
              sx={{ height: 420, width: { md: 600, sm: 300, xs: "100%" }, objectFit: 'cover', borderRadius: 3 }}
              image="https://cdn.pixabay.com/photo/2024/04/29/04/21/tshirt-8726721_1280.jpg"
              title="green iguana"
            />
            <CardContent sx={{ padding: 0, mt: 2 }}>
              <Typography gutterBottom variant="h4" sx={{ color: 'black', fontSize: { sm: "40px", sm: "24px", xs: "18px" }, fontWeight: 600 }}>
                Doona's Magic Crayons
              </Typography>
              <Typography variant="h6" sx={{ color: 'black', fontWeight: 400 }}>
                $ 80.00
              </Typography>
              <Typography variant="body2" sx={{ color: '#4d4d4d', fontWeight: 300, fontSize: "12px", width: { sm: 500, xs: "100%" }, mt: 2 }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi corporis sapiente perspiciatis sint accusantium molestiae beatae voluptatem deleniti doloribus magnam? Officia voluptatum dolor, distinctio quidem nemo consequatur. Magni, nesciunt sed.
              </Typography>
              <Box component="div" sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 5 }}>
                <RemoveIcon onClick={() => dispatch(decrement())} sx={{ backgroundColor: "black", color: "white", borderRadius: 6, cursor: 'pointer', width: 35, height: 35, padding: "8px" }} />
                <Typography>{counter}</Typography>
                <AddIcon onClick={() => dispatch(increment())} sx={{ border: "1px solid #cecece", color: "black", borderRadius: 6, cursor: 'pointer', width: 35, height: 35, padding: "8px" }} />
                <Button variant='contained' sx={{ backgroundColor: 'black', borderRadius: 6, fontSize: "8px", padding: "12px 35px" }}>Add to Cart</Button>
              </Box>
              <Typography sx={{ borderTop: "1px solid #cecece", borderBottom: "1px solid #cecece", mt: 5, padding: "12px 0", textTransform: 'uppercase', fontSize: "10px", fontWeight: 600 }}>Safety</Typography>
              <Typography sx={{ borderBottom: "1px solid #cecece", padding: "12px 0", textTransform: 'uppercase', fontSize: "10px", fontWeight: 600 }}>Specification</Typography>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </>
  )
}
