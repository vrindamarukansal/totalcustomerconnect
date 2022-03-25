import React,{useState} from 'react'
import {Button, TextField, Typography, Alert, Grid} from '@mui/material'
import { useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { login } from '../store/userSlice'
import { users } from '../assets/data'

const ServiceRecordForm = () => {
    let navigate = useNavigate()
    const dispatch = useDispatch()
    const [phone,setPhone] = useState('')
    const [zip, setZip] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        let phoneDigits = getDigits(phone)
        let user = users.find(item=> item.phone===parseInt(phoneDigits) && item.zip===parseInt(zip))
        if(typeof user!=='undefined'){
            dispatch(login(user))
            navigate('/welcome')
        }
        else setError('No matching records found')
    }

    //returns (###) ###-####
    const formatPhone = (input) => {
        input = getDigits(input);
        var size = input.length;
        if (size>0) {input="("+input}
        if (size>3) {input=input.slice(0,4)+") "+input.slice(4,11)}
        if (size>6) {input=input.slice(0,9)+"-" +input.slice(9)}
        setPhone(input)
        setError('')
    }

    const formatZip = (input) => {
        input = getDigits(input)
        if(input.length<6)
            setZip(input)
        setError('')
    }
    
    const getDigits = (value) => {
        return value.replace(/\D/g,'')
    }

    return(
        <>
            <Typography variant='h4' sx={{mb:2}}>
                Find your service records
            </Typography>
            <Grid container spacing={2} alignItems='center' sx={{mb:4}}>
                <Grid item xs={12} md={5}>
                    <TextField required
                        fullWidth
                        id="phone-number"
                        label="Phone Number"
                        helperText = '10 digit phone number'
                        value={phone}
                        onChange={(e)=> formatPhone(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} md={5}>
                    <TextField required
                        fullWidth
                        id="zipcode"
                        label="Zip Code"
                        helperText = '5 digit zip code'
                        value={zip}
                        onChange={(e)=> formatZip(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} md={2}>
                    <Button variant="contained"
                    disabled={!(phone.length>=14 && zip.length>=5)}
                    sx={{mb:2}}
                    onClick={(e)=> handleSubmit(e)}>
                        Submit
                    </Button>
                </Grid>
            </Grid>
            {error!=='' && 
                <Alert severity="error">{error}</Alert>
            }
        </>
    )
}

export default ServiceRecordForm