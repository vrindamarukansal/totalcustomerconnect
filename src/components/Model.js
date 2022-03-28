import React from 'react'
import { Grid, Paper, Box, Grow, Typography } from '@mui/material'

const Model = () => {
    const items = [1,2,3,4,5,6]

    return(
        <Grid container spacing={4} alignItems='center' sx={{mb:4}}>
            {items.map((item, key)=>(
                <Grid item xs={12} md={4} key={key}>
                    <Grow
                    key={key}
                    in={true}
                    style={{ transformOrigin: '0 0 0' }}
                    {...{ timeout: 1000*item }}
                    >
                        <Paper elevation={4}>
                            <Box className='align-center' 
                                sx={{ 
                                height: 200,
                                backgroundColor: 'secondary.main',
                                '&:hover': {
                                    opacity: [0.9, 0.8, 0.7], 
                                },
                            }}>
                                <Typography variant='overline'>Vehicle {key}</Typography>
                            </Box>
                        </Paper>
                    </Grow>
                </Grid>
            ))}
        </Grid>
    )
}

export default Model