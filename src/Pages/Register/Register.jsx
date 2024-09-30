import { Box, Container, Grid, TextField, Typography, Button } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { collection, addDoc } from "firebase/firestore";
import { auth, fireDb } from "../../Firebase/FirebaseConfig";
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Register = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const onSubmit = async() =>{
        if(username == "" || email == "" || password == ""){
            alert("all fields are required!");
        }
        try {
            const users = await createUserWithEmailAndPassword(auth, email, password)
            const user = {
                username,
                email,
                password
            }
            const userRef = collection(fireDb, "users");
            await addDoc(userRef, user);
            navigate("/login");
        } catch (error) {
            console.log(error)
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
                                    label="Username"
                                    variant="outlined"
                                    fullWidth
                                    sx={{ mb: 3 }}
                                    onChange={(e)=> setUsername(e.target.value)}
                                />
                                <TextField
                                    label="Email"
                                    variant="outlined"
                                    fullWidth
                                    sx={{ mb: 3 }}
                                    onChange={(e)=> setEmail(e.target.value)}
                                />
                                <TextField
                                    label="Password"
                                    type="password"
                                    variant="outlined"
                                    fullWidth
                                    sx={{ mb: 3 }}
                                    onChange={(e)=> setPassword(e.target.value)}
                                />
                                <Button onClick={onSubmit} variant="contained" fullWidth sx={{ backgroundColor: 'black', padding: "10px" }}>
                                    Register
                                </Button>
                                <Typography mt={3} color='gray'>Already have an acoount ?<Link to="/login"> Login</Link></Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default Register