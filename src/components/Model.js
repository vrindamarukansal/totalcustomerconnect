import React from 'react'
import { Grid, Paper, Box, Grow } from '@mui/material'

const Model = () => {
    const items = [1,2,3,4,5,6]
    const icon = (
        <Paper elevation={4}>
            <Box sx={{ 
                height: 200,
                backgroundColor: 'primary.dark',
                '&:hover': {
                    backgroundColor: 'primary.main',
                    opacity: [0.9, 0.8, 0.7], 
                }
            }}/>
        </Paper>
    )

    return(
        <Grid container spacing={4} alignItems='center' sx={{mb:4}}>
            {items.map((item, key)=>(
                <Grid item xs={12} md={4}>
                    <Grow
                    key={key}
                    in={true}
                    style={{ transformOrigin: '0 0 0' }}
                    {...{ timeout: 1000*item }}
                    >
                        {icon}
                    </Grow>
                </Grid>
            ))}
        </Grid>
    )
}

export default Model