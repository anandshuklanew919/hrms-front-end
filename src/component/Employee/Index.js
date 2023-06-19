import React from 'react'
import { Grid } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../UI/Sidebar/Sidebar'



const EMPSIDEMENU = [
    { menupath: '.', menutext: 'Employee Dashboard', icon: 'DashboardIcon' },
    { menupath: 'summary', menutext: 'Summary', icon: 'SummarizeIcon' },
    { menupath: 'new', menutext: 'New Employee', icon: 'AddCardIcon' },
]



export default function EmployeeRoot() {
    return (
        <>
            <Sidebar sidemenus={EMPSIDEMENU} />
            <Grid item xs={12} sx={{ position: 'absolute', top: '75px', left: '125px' }}>
                <Outlet />
            </Grid >
        </>
    )

}