import { Alert, Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ChangePassword = () => {
    const [error, setError] = useState({
        status: false,
        message: "",
        type: ""
    })
    const nevigate=useNavigate()
    const handleSubmit = (event) =>{
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        const actualData = {
            new_password : data.get('new_password'),
            confirm_new_password : data.get('confirm_new_password')
        }

        if (actualData.new_password && actualData.confirm_new_password){
            if(actualData.new_password === actualData.confirm_new_password){
                setError({
                    status: true,
                    message: "Password Changed Successfully",
                    type : 'success'
                })
                console.log(actualData)
                setTimeout(()=>{
                    nevigate('/login')
                })
                setError({
                    status: true,
                    message: "Your new password and confirm new password does not matched",
                    type : 'error'
                })
            }
        } else{
            setError({
                status:true,
                message: "All Fields Are Required",
                type :"error"
            })
        }
        
    }
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', maxWidth: 600, mx: 5 }}>
            <h1> Change Password</h1>
            <Box component="form" noValidate sx={{ mt: 1 }} id='change-password-form' onSubmit={handleSubmit}>
                <TextField required fullWidth margin='normal' id='new_password' name='new_password' label='New Password' />
                <TextField required fullWidth margin='normal' id='confirm_new_password' name='confirm_new_password' label='Re-Enter New Password' type='password' />
                <Box textAlign='center' >
                    <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }} > Change Password </Button>
                </Box>
                {error.status ?
                    <Alert severity={error.type}>
                        {error.message}
                    </Alert> : ''}
            </Box>
        </Box>
    )
}

export default ChangePassword
