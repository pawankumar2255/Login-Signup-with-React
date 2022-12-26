import { Grid, Card, Box, Tabs, Tab } from '@mui/material'
import React, { useState } from 'react'
import IMG from '../../../image/download.png'
import Registration from './Registration'
import UserLogin from './UserLogin'

const TabPanel = (props) => {
    const { children, value, index } = props
    return (
        <div role="tabpanel" hidden={value !== index}>
            {
                value === index && (
                    <Box>{children}</Box>
                )
            }
        </div>
    )
}
const LoginReg = () => {
    const [value, setValue] = useState(0)
    const handleChange = (event, newValue) => {
        event.preventDefault()
        setValue(newValue)
    }
    return (
        <>
            <Grid container sx={{ height: '89vh' }}>
                <Grid item lg={7} sm={5} sx={{
                    backgroundImage: `url(${IMG})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPositiona: 'center',
                    display: { xs: 'none', sm: 'block' }
                }}>

                </Grid>
                <Grid item lg={5} sm={7} xs={12}>
                    <Card sx={{ height: '100%', width: '100%' }}>
                        <Box>
                            <Box sx={{ borderBottom: 2, borderColor: 'divider' }}>
                                <Tabs value={value} textColor='secondary' indicatorColor='secondary' onChange={handleChange}>
                                    <Tab label='Login' sx={{ textTransform: 'none', fontWeight: 'bold' }}></Tab>
                                    <Tab label='Registration' sx={{ textTransform: 'none', fontWeight: 'bold' }}></Tab>
                                </Tabs>
                            </Box>
                            <TabPanel value={value} index={0}>
                                <UserLogin />
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                <Registration />
                            </TabPanel>
                        </Box>
                    </Card>

                </Grid>
            </Grid>
        </>
    )
}

export default LoginReg
