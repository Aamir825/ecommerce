import React, { useEffect } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { Box, Grid, Typography } from '@mui/material'
import useGetProduct from '../../Hooks/useGetProducts'

const Products = () => {

    const product = useGetProduct()
    console.log("hoooook", product);

    return (
        <>
            <Box sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                    {product.map((elem, index) => {
                        return (
                            <Grid key={index} item md={3} sm={6} xs={12}>
                                <ProductCard image={elem.imageUrl} title={elem.title} price={elem.price} id={elem.id}/>
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>
        </>
    )
}

export default Products