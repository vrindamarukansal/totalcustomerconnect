import React from 'react'
import { Typography, Fade, Box } from '@mui/material'

const Wip = () => {
    return(
        <Box>
            <Typography variant='h4'>Page under construction</Typography>
            <Fade in={true}>
                <Typography variant='overline'>Coming up soon</Typography>
            </Fade>
        </Box>
    )
}

export default Wip