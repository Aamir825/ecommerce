import React, { useEffect, useState } from 'react'
import { Alert, Box, Button, Card, CardContent, CardMedia, Container, Skeleton, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import useProductDetail from '../../Hooks/useProductDetails';
import useDispatchProduct from '../../Hooks/useDispatchProducts';

export const ProductDetails = () => {

  const {product}  = useProductDetail();
  console.log(product)
  const { addToCart, handleIncrement, handleDecrement, quantity, success } = useDispatchProduct();
  const imageStyles = { height: 420, width: { md: 600, sm: 300, xs: "100%" }, objectFit: 'cover', borderRadius: 3 };
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    if(product){
      setLoading(false)
    }
  },[product])
  return (
    <>
      <Box sx={{ mt: 10 }}>

        <Container>
          {loading ? (
          <Box sx={{ display: 'flex', flexDirection: { sm: 'row', xs: 'column' }, gap: 5, boxShadow: 0, backgroundColor: 'transparent' }}>
            <Box>
              <Skeleton variant="text" sx={{ width: { md: 600, sm: 300, xs: "100%" }, height: 40, }} />
              <Skeleton variant="text" sx={{ width: { md: 600, sm: 300, xs: "100%" }, height: 40, }} />
              <Skeleton variant="text" sx={{ width: { md: 600, sm: 300, xs: "100%" }, height: 40, }} />
              <Skeleton variant="text" sx={{ width: { md: 600, sm: 300, xs: "100%" }, height: 40, }} />
              <Skeleton variant="text" sx={{ width: { md: 600, sm: 300, xs: "100%" }, height: 40, }} />
              <Skeleton variant="text" sx={{ width: { md: 600, sm: 300, xs: "100%" }, height: 40, }} />
              <Skeleton variant="text" sx={{ width: { md: 600, sm: 300, xs: "100%" }, height: 40, }} />
              <Skeleton variant="text" sx={{ width: { md: 600, sm: 300, xs: "100%" }, height: 40, }} />
            </Box>
            <Box>
              <Skeleton variant="text" width={300} height={30} />
              <Skeleton variant="text" width={100} height={30} />
              <Skeleton variant="text" width={200} height={30} />
              <Box component="div" sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 5 }}>
                <Skeleton variant="text" width={100} height={30} />
                <Skeleton variant="text" width={100} height={30} />
              </Box>
              <Skeleton variant="text" width={300} height={30} sx={{ margin: 0, padding: 0 }} />
            </Box>
          </Box>
          ):
          ( 
            <>
            {product ? (
            <Card sx={{ display: 'flex', flexDirection: { sm: 'row', xs: 'column' }, gap: 5, boxShadow: 0, backgroundColor: 'transparent' }}>
              <CardMedia
                component={"img"}
                sx={imageStyles}
                image={product.imageUrl}
                title="green iguana"
              />
              <CardContent sx={{ padding: 0, mt: 2 }}>
                <Typography gutterBottom variant="h4" sx={{ color: 'black', fontSize: { md: "30px", sm: "24px", xs: "18px" }, fontWeight: 600 }}>
                  {product.title}
                </Typography>
                <Typography variant="h6" sx={{ color: 'black', fontWeight: 400 }}>
                  ${product.price}
                </Typography>
                <Typography variant="body2" sx={{ color: '#4d4d4d', fontWeight: 300, fontSize: "12px", width: { sm: 500, xs: "100%" }, mt: 2 }}>
                  {product.description}
                </Typography>
                <Box component="div" sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 5 }}>
                  <RemoveIcon onClick={handleDecrement} sx={{ backgroundColor: "black", color: "white", borderRadius: 6, cursor: 'pointer', width: 35, height: 35, padding: "8px" }} />
                  <Typography>{quantity}</Typography>
                  <AddIcon onClick={handleIncrement} sx={{ border: "1px solid #cecece", color: "black", borderRadius: 6, cursor: 'pointer', width: 35, height: 35, padding: "8px" }} />
                  <Button onClick={addToCart} variant='contained' sx={{ backgroundColor: 'black', borderRadius: 6, fontSize: "8px", padding: "12px 35px" }}>Add to Cart</Button>
                </Box>
                <Typography sx={{ borderTop: "1px solid #cecece", borderBottom: "1px solid #cecece", mt: 5, padding: "12px 0", textTransform: 'uppercase', fontSize: "10px", fontWeight: 600 }}>Safety</Typography>
                <Typography sx={{ borderBottom: "1px solid #cecece", padding: "12px 0", textTransform: 'uppercase', fontSize: "10px", fontWeight: 600 }}>Specification</Typography>
                {success && <Alert variant="outlined" severity="success" sx={{ backgroundColor: 'rgba(76, 175, 80, 0.1)', color: '#4CAF50' }}>
                        Item added to cart successfully!
                    </Alert>}
              </CardContent>
            </Card>
            
          
        ) : ("")} 
        </>
        )}
        </Container>
      </Box>
    </>
  )
}
