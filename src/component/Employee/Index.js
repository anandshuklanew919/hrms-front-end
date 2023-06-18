import React from 'react'
import { Grid } from '@mui/material'
import { Outlet } from 'react-router-dom'

export default function EmployeeRoot() {
    return (
        <Grid item xs={12}>
            <Outlet />
        </Grid>
    )
}
