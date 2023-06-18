import { Grid } from '@mui/material'
import React from 'react'
import Header from '../UI/Header/Header'
import { Outlet } from 'react-router-dom'

export default function RootRoute() {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Header />
            </Grid>
            <Grid item xs={12}>
                <Outlet />
                <h1>
                    heeeelkkljkljkljkljlkjljljljljlkjkljkljlkjlkjlkjlkjljlkjljjljljljljlkj
                </h1>
            </Grid>
        </Grid>
    )
}
