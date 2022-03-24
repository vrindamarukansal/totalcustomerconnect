import React,{useState} from 'react'
import {Button, TextField, Typography, Alert, Grid} from '@mui/material'
import { useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { login } from '../store/userSlice'
import { users } from '../assets/data'

const ServiceRecordForm = () => {
    let navigate = useNavigate()
    const dispatch = useDispatch()
    const [phone,setPhone] = useState({value:'', error:''})
    const [zip, setZip] = useState({value:'', error:''})
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        let phoneDigits = phone.value.replace(/\D/g,'')
        let isValidPhone = phoneDigits.length===10
        let isValidZip = zip.value.length===5

        if(isValidPhone && isValidZip){
            let user = users.find(item=> item.phone===parseInt(phoneDigits) && item.zip===parseInt(zip.value))
            if(typeof user!=='undefined'){
                dispatch(login(user))
                navigate('/welcome')
            }
            else setError('No matching records found')
        }
        else {
            if(!isValidPhone) setPhone({...phone, error:'Enter a valid phone number'})
            if(!isValidZip) setZip({...zip, error:'Enter a valid zip code'})
        }
    }
    //returns (###) ###-####
    const formatPhone = (input) => {
        input = input.replace(/\D/g,'');
        var size = input.length;
        if (size>0) {input="("+input}
        if (size>3) {input=input.slice(0,4)+") "+input.slice(4,11)}
        if (size>6) {input=input.slice(0,9)+"-" +input.slice(9)}
        setPhone({value:input, error:''})
        setError('')
    }

    const formatZip = (input) => {
        input = input.replace(/\D/g,'')
        if(input.length<6)
            setZip({value:input, error:''})
        setError('')
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
                        error= {phone.error===''?false:true}
                        id="phone-number"
                        label="Phone Number"
                    // defaultValue="Phone number"
                        helperText = {phone.error===''?'10 digit phone number':phone.error}
                        value={phone.value}
                        onChange={(e)=> formatPhone(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} md={5}>
                    <TextField required
                        fullWidth
                        error= {zip.error===''?false:true}
                        id="zipcode"
                        label="Zip Code"
                        helperText = {zip.error===''?'5 digit zip code':zip.error}
                        value={zip.value}
                        onChange={(e)=> formatZip(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} md={2}>
                    <Button variant="contained"
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