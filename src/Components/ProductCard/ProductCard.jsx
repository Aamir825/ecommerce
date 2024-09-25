import { Box, Card, CardContent, CardMedia, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

const ProductCard = () => {

    return (
        <>
            <Card sx={{ width: "100%", padding: "10px 10px 0 10px", boxShadow: 0 }}>
                <CardMedia
                    component={"img"}
                    sx={{ height: 300, objectFit: 'cover' }}
                    image="https://cdn.pixabay.com/photo/2024/04/29/04/21/tshirt-8726721_1280.jpg"
                    title="green iguana"
                />
                <CardContent sx={{ padding: 0, mt: 2 }}>
                    <Typography gutterBottom variant="body2" sx={{ color: 'black', fontWeight: 500 }}>
                        Doona's Magic Crayons
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'black', fontWeight: 500 }}>
                        $ 80.00
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}

export default ProductCard