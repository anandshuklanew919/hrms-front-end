import React from 'react'
import { Grid , Box} from '@mui/material'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../UI/Sidebar/Sidebar'



const EMPSIDEMENU = [
    { menupath: '.', menutext: 'Employee Dashboard', icon: 'DashboardIcon' },
    { menupath: 'summary', menutext: 'Summary', icon: 'SummarizeIcon' },
    { menupath: 'new', menutext: 'New Employee', icon: 'AddCardIcon' },
]


export default function EmployeeRoot() {
    return (
        <Box sx={{ display: 'flex' }}>
            {/* Sidebar on the left */}
            <Box component="nav" sx={{ width: '250px' }}>
                <Sidebar sidemenus={EMPSIDEMENU} />
            </Box>

            {/* Main content area where the form will be displayed */}
            <Grid
                container
                sx={{
                    flexGrow: 1,           // This makes sure the grid takes up remaining space
                    justifyContent: 'center', // Center horizontally
                    minHeight: '100vh',     // Ensures full height for vertical centering
                    paddingTop: '75px',     // Adjust for the header or top navbar
                }}
            >
                <Grid item xs={12} md={8} lg={6}>
                    <Outlet />
                </Grid>
            </Grid>
        </Box>
    );
}