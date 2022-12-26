import { Box, Button, TextField, Alert, FormControlLabel, Checkbox } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Registration = () => {

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
            name: data.get('name'),
            email: data.get('email'),
            password: data.get('password'),
            confirm_password: data.get('confirm_password'),
            cb: data.get('cb')
        }
        if ((actualData.email && actualData.password && actualData.confirm_password && actualData.name && actualData.cb !== null)) {
            if (actualData.password === actualData.confirm_password) {
                console.log(actualData);
                document.getElementById('registration-Form').reset()

                setError({
                    status: true,
                    message: `${actualData.name} Registered Successfully`,
                    type: "success"
                })
            } else {
                document.getElementById('registration-Form').reset()
                setError({
                    status: true,
                    message: `Password & Confirm Password Does not Matched`,
                    type: "error"
                })
            }

              nevigate('/dashboard')
        } else if (actualData.email && actualData.password && actualData.confirm_password && actualData.name && actualData.cb === null) {
            setError({
                status: true,
                message: `Please Agree terms and conditions`,
                type: "error"
            })
        }
        else {
            setError({
                status: true,
                message: "All fields Are Required",
                type: "error"
            })
        }
        // console.log('====================================');
        // console.log(actualData);
        // console.log('====================================');
    }
    return (
        <>
            <Box component='form' noValidate sx={{ mt: 2 }} id="registration-Form" onSubmit={handleSubmit}>
                <TextField required fullWidth margin='normal' id='name' name='name' label='Name' />

                <TextField required fullWidth margin='normal' id='email' name='email' label='Email Address' />
                <TextField required fullWidth margin='normal' id='password' name='password' label='Password' type='password' />
                <TextField required fullWidth margin='normal' id='confirm_password' name='confirm_password' label='Confirm Password' type='password' />
                <FormControlLabel control={<Checkbox value='agree' color='primary' name='cb' id='cb' />} label='I agree terms & conditions.' />
                <Box textAlign='center' >
                    <Button type='sumbit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}> Register</Button>
                </Box>

                {error.status ?
                    <Alert severity={error.type}>
                        {error.message}
                    </Alert> : ''}
            </Box>
        </>
    )
}

export default Registration
