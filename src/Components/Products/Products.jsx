import React, { useEffect, useState } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { Box, Grid, Skeleton, Stack, Typography } from '@mui/material'
import useGetProduct from '../../Hooks/useGetProducts'

const Products = () => {

    const product = useGetProduct()
    const [loading, setLodaing] = useState(true);
    useEffect(()=>{
        if(product.length > 0){
            setLodaing(false);
        }
    },[product])

    return (
        <>
            <Box sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                    {loading ? (
                        <Grid container spacing={1}>
                            <Grid item>
                                <Skeleton variant="text" width={300} height={300} />
                                <Skeleton variant="text" width={300} height={30} />
                                <Skeleton variant="text" width={300} height={30} />
                                <Skeleton variant="text" width={300} height={30} />
                            </Grid>
                            <Grid item>
                                <Skeleton variant="text" width={300} height={300} />
                                <Skeleton variant="text" width={300} height={30} />
                                <Skeleton variant="text" width={300} height={30} />
                                <Skeleton variant="text" width={300} height={30} />
                            </Grid>
                            <Grid item>
                                <Skeleton variant="text" width={300} height={300} />
                                <Skeleton variant="text" width={300} height={30} />
                                <Skeleton variant="text" width={300} height={30} />
                                <Skeleton variant="text" width={300} height={30} />
                            </Grid>
                        </Grid>
                    ) : (
                        <>
                            {product.map((elem, index) => {
                                return (
                                    <Grid key={index} item md={3} sm={6} xs={12}>
                                        <ProductCard image={elem.imageUrl} title={elem.title} price={elem.price} id={elem.id} />
                                    </Grid>
                                )
                            })}
                        </>
                    )}
                </Grid>
            </Box>
        </>
    )
}

export default Products