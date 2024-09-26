import React, { useEffect } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { Box, Grid, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../Features/Products'

const Products = () => {

    const products = useSelector((state) => state.products)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])
    return (
        <>
            <Box sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                    {products.products.map((elem, index) => {
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