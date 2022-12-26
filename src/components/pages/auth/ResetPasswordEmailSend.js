import React, { useState, } from 'react'
import { Grid, TextField, Button, Box, Alert } from '@mui/material'

const ResetPasswordEmailSend = () => {
    const [error, setError] = useState({
        status: false,
        message: "",
        type: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget)
        const actualData = {
            email: data.get('email')
        }
        if (actualData.email) {
            console.log(actualData);
            document.getElementById('reset-Form').reset()
            setError({
                status: true,
                message: "Reset Password Request Sent To Your Email, Check The Email",
                type: "success"
            })

        } else {
            setError({
                status: true,
                message: "Please Enter Your Email Id",
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
                    <Box component='form' noValidate sx={{ mt: 2 }} id='reset-Form' onSubmit={handleSubmit}>
                        <TextField morgin='normal' required fullWidth id='email' name='email' label='Email Address' />
                        <Box textAlign='center' >
                            <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }} > Send</Button>
                        </Box>
                        {error.status ? <Alert severity={error.type}>{error.message}</Alert> : ''}
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default ResetPasswordEmailSend
