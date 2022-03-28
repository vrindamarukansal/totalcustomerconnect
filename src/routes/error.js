import React from 'react'
import { Typography, Button, Box } from '@mui/material'
import { useNavigate } from 'react-router'

const Error = () => {
    const navigate = useNavigate()
    return(
        <Box className='align-center full-height'>
            <Box>
            <Typography variant='h4'>Page does not exist</Typography>
            <Button onClick={()=> navigate(-1)}>
                Go back
            </Button>
            </Box>
        </Box>
    )
}

export default Error