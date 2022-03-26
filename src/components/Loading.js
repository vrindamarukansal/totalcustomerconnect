import React from 'react'
import { Grid, Skeleton } from '@mui/material'

const Loading = () => {
    return(
        <Grid container alignItems='center'>
            <Grid item xs={12}>
                <Skeleton animation='wave' />
                <Skeleton animation="wave" />
                <Skeleton animation="wave" />
            </Grid>
        </Grid>
    )
}

export default Loading