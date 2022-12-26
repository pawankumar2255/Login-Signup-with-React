import React from 'react'
import { Grid, TextField, Button, Box, Alert } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ResetPasswordForm = () => {
    const [error, setError] = useState({
        status: false,
        message: "",
        type: ""
    })
    const nevigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget)
        const actualData = {
            password: data.get('password'),
            confirm_passwoord: data.get('confirm_password')
        }
        if (actualData.password && actualData.confirm_passwoord) {
            if (actualData.password === actualData.confirm_passwoord) {
                console.log(actualData);
                document.getElementById('reset-password').reset()
                setError({
                    status: true,
                    message: "Password Reset Successfully, Rediecting Login page !!",
                    type: "success"
                })
                setTimeout(()=>{
                    nevigate('/login')
                },3000)

            } else {
                setError({
                    status: true,
                    message: "Password And Confirm Password Not Match",
                    type: "error"
                })
            }


        } else {
            setError({
                status: true,
                message: "All Field Are Required",
                type: "error"
            })
        }
        // console.log('====================================');
        // console.log(actualData);
        // console.log('====================================');
    }
    return (
        <>
            <Grid container justifyContent='center' >
                <Grid item sm={4} xs={12} >
                <h1> Reset Password</h1>
                    <Box component='form' noValidate sx={{ mt: 2 }} id='reset-password' onSubmit={handleSubmit}>
                        <TextField required fullWidth margin='normal' id='password' name='password' label='Password' type='password' />
                        <TextField required fullWidth margin='normal' id='confirm_password' name='confirm_password' label='Confirm Password' type='password' />
                        <Box textAlign='center' >
                            <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }} > Save </Button>
                        </Box>
                        {error.status ? <Alert severity={error.type}>{error.message}</Alert> : ''}
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default ResetPasswordForm
