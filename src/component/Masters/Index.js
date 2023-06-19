import React from 'react'
import { Grid } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../UI/Sidebar/Sidebar'


const MASTERSIDEMENU = [
    { menupath: '.', menutext: 'Employee Dashboard', icon: 'DashboardIcon' },
    { menupath: 'businessunit', menutext: 'Business Unit', icon: 'DomainAddIcon' },
    { menupath: 'department', menutext: 'Department', icon: 'GroupIcon' },
    { menupath: 'section', menutext: 'Section', icon: 'ClassIcon' }
]

export default function MasterRoot() {
    return (
        <>
            <Sidebar sidemenus={MASTERSIDEMENU} />
            <Grid item xs={12} sx={{ position: 'absolute', top: '75px', left: '125px' }}>
                <Outlet />
            </Grid >
        </>
    )
}
