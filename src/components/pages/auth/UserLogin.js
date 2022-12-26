import { Alert, Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const UserLogin = () => {
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
      email: data.get('email'),
      password: data.get('password')
    }
    if (actualData.email && actualData.password) {
      console.log(actualData);
      document.getElementById('login-Form').reset()
      setError({
        status: true,
        message: "Log In Successfully",
        type: "success"
      })
    setTimeout(()=>{
      nevigate('/dashbaord')
    },2000)
    } else {
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
      <Box component='form' noValidate sx={{ mt: 2 }} id="login-Form" onSubmit={handleSubmit}>
        <TextField required fullWidth margin='normal' id='email' name='email' label='Email Address' />
        <TextField required fullWidth margin='normal' id='password' name='password' label='Password' type='password' />
        <Box textAlign='center' >
          <Button type='sumbit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}> Log In</Button>
        </Box>
        <NavLink to='/resetpassword' >Forgot Password ?</NavLink>
        {error.status ? <Alert severity={error.type}>
          {error.message}
        </Alert> : ''}
      </Box>
    </>
  )
}

export default UserLogin
