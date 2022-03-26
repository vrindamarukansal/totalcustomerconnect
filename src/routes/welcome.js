import React,{useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { Box, Typography, Divider } from '@mui/material'
import Model from '../components/Model'
import Loading from '../components/Loading'

const Welcome = () => {
    const {userInfo} = useSelector(state=> state.user)
    const [loading,setLoading] = useState(true) //mock fetching data state

    useEffect(()=>{
        setTimeout(()=>
            setLoading(false),
        1000)
    },[])

    return(
        <>
        <Box sx={{mb:4}}>
            <Typography variant='h4' gutterBottom>Welcome {userInfo.name}</Typography>
            <Typography variant='button' display='block' gutterBottom>Phone: {userInfo.phone}</Typography>
            <Typography variant='button' display='block' gutterBottom>Zip: {userInfo.zip}</Typography>
        </Box>
        <Divider sx={{mb:4}}/>
        {loading? <Loading/>:<Model/>}
        </>
    )
}

export default Welcome