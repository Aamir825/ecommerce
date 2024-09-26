import { Box, Button, Card, CardContent, CardMedia, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import {Link} from 'react-router-dom'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const ProductCard = ({ image, title, price, id }) => {

    return (
        <>
            <Card sx={{ width: "100%", padding: "10px 10px 0 10px", boxShadow: 0 }}>
                <CardMedia
                    component={"img"}
                    sx={{ height: 300, objectFit: 'cover' }}
                    image={image}
                    title="green iguana"
                />
                <CardContent sx={{ padding: 0, mt: 2 }}>
                    <Typography gutterBottom variant="body2" sx={{ color: 'black', fontWeight: 500 }}>
                        {title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'black', fontWeight: 500 }}>
                        ${price}
                    </Typography>
                    <Link to={`details/${id}`}><Button variant='outlined' endIcon={<ArrowRightAltIcon/>} sx={{width: "100%", mt: 1, color: "#414141", border: "1px solid #d6d6d6"}}>more details</Button></Link>
                </CardContent>
            </Card>
        </>
    )
}

export default ProductCard