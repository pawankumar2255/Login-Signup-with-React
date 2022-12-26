import React from 'react'
import { Button, CssBaseline, Grid, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import ChangePassword from './auth/ChangePassword'

const Dashbaord = () => {
    const nevigate = useNavigate()
    const handleLogout = ()=>{
        console.log(`You Logout Successfully `);

        nevigate('/login')
    }
    return (
        <>
            <CssBaseline />
            <Grid container >
                <Grid item sm={4} sx={{backgroundColor: 'green', p: 2, }} >
                    <Typography variant='h3'> Email : fghjg</Typography>
                    <Typography variant='h4'> Name : fghjg</Typography>
                    <Button variant = 'contained' color= 'warning' size='large' onClick={handleLogout} sx={{mt: 8}}> Logout </Button>
                </Grid>
                <Grid item sm={6} >
                <ChangePassword />
                </Grid>
            </Grid>
        </>
    )
}

export default Dashbaord
