import React from 'react'
import { Grid } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../UI/Sidebar/Sidebar'


const EMPSIDEMENU = [
    { menupath: '.', menutext: 'Master Dashboard', icon: 'DashboardIcon' },
    { menupath: 'company', menutext: 'Company', icon: 'BusinessIcon' },
    { menupath: 'businessunit', menutext: 'Business Unit', icon: 'DomainAddIcon' },
    { menupath: 'department', menutext: 'Department', icon: 'GroupIcon' },
    { menupath: 'section', menutext: 'Section', icon: 'ClassIcon' }
]

export default function MasterRoot() {
    return (
        <>
            <Sidebar sidemenus={EMPSIDEMENU} />
            <Grid item xs={12} sx={{ position: 'absolute', top: '75px', left: '125px' }}>
                <Outlet />
            </Grid >
        </>
    )
}
