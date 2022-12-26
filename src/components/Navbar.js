import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position='static' color='secondary'>
                    <Toolbar>
                        <Typography variant='h6' component='div' sx={{ flexGrow: 1 , m:2 }}>
                            Shop
                        </Typography>
                        <Button component={NavLink} to="/" style={({ isActive }) => { return { backgroungColor: isActive? "#6d1b7b" :'' } }} sx={{ color: 'black', textTransform: 'none'}}>Home</Button>
                        <Button component={NavLink} to="/contact" style={({ isActive }) => { return { backgroungColor: isActive? "#6d1b7b" :'' } }} sx={{ color: 'black', textTransform: 'none', m:2}}>Contact</Button>
                        
                        <Button component={NavLink} to="/login" style={({ isActive }) => { return { backgroungColor: isActive? "#6d1b7b" :'' } }} sx={{ color: 'black', textTransform: 'none'}}>Login/Registration</Button>
                    
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Navbar
