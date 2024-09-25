import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { Box, Grid } from '@mui/material'

const Products = () => {
  return (
    <>
       <Box sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                    <Grid item md={3} sm={6} xs={12}>
                        <ProductCard/>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                        <ProductCard/>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                        <ProductCard/>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                        <ProductCard/>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                        <ProductCard/>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                        <ProductCard/>
                    </Grid>
                </Grid>
            </Box>
    </>
  )
}

export default Products