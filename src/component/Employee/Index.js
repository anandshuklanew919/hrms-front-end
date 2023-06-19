import React from 'react'
import { Grid } from '@mui/material'
import { Outlet } from 'react-router-dom'

const EMPSIDEMENU = [
    { menupath: 'company', menutext: 'Company', icon: 'BusinessIcon' },
    { menupath: 'businessunit', menutext: 'Business Unit', icon: 'DomainAddIcon' },
    { menupath: 'department', menutext: 'Department', icon: 'GroupIcon' },
    { menupath: 'section', menutext: 'Section', icon: 'ClassIcon' }
]



export default function EmployeeRoot() {
    return (
        <Grid item xs={12}>
            <Outlet />
        </Grid>
    )
}
