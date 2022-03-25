import React from 'react'
import { useSelector } from 'react-redux'
import { Typography } from '@mui/material'

const Welcome = () => {
    const {userInfo} = useSelector(state=> state.user)
    return(
        <div>
            <Typography variant='h4' gutterBottom>Welcome {userInfo.name}</Typography>
            <Typography variant='button' display='block' gutterBottom>Phone: {userInfo.phone}</Typography>
            <Typography variant='button' display='block' gutterBottom>Zip: {userInfo.zip}</Typography>
        </div>
    )
}

export default Welcome