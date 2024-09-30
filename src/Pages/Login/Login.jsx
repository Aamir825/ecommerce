import React, { useState } from 'react'
import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material"
import { Link, useNavigate } from "react-router-dom"
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase/FirebaseConfig';

export const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const onSubmit = async () => {
        try {
            const authenticate = await signInWithEmailAndPassword(auth, email, password);
            localStorage.setItem("client", JSON.stringify(authenticate));
            window.location.href = '/';
        } catch (error) {
            alert("wrong")
        }
    }
    return (
        <>
            <Box mt={10}>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item md={6} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                            <Typography variant='h4' fontWeight={600} color='#bdbdbd' >Welcome to <br /> Your <span style={{ color: '#242424', backgroundColor: '#E8CA67', padding: "2px 10px", borderRadius: 10 }}> E-Commerce </span> Store</Typography>
                        </Grid>
                        <Grid item md={6}>
                            <Box sx={{ mt: 4, width: '100%', maxWidth: 400 }}>
                                <TextField
                                    label="Email"
                                    variant="outlined"
                                    fullWidth
                                    sx={{ mb: 3 }}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <TextField
                                    label="Password"
                                    type="password"
                                    variant="outlined"
                                    fullWidth
                                    sx={{ mb: 3 }}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <Button onClick={onSubmit} variant="contained" fullWidth sx={{ backgroundColor: 'black', padding: "10px" }}>
                                    Login
                                </Button>
                                <Typography mt={3} color='gray'>Don't have an acoount ?<Link to="/register"> Register</Link></Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}
