import React from 'react'
import { Grid } from '@mui/material'
import { Outlet } from 'react-router-dom'

export default function MasterRoot() {
    return (
        <Grid item xs={12}>
            <Outlet />
        </Grid>
    )
}
