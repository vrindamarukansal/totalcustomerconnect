import React,{useState} from 'react'
import {Button, TextField, Typography, Alert, Grid} from '@mui/material'
import { useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { login } from '../store/userSlice'
import { fetchUser } from '../assets/mockData'
import CircularProgress from '@mui/material/CircularProgress';

const ServiceRecordForm = () => {
    let navigate = useNavigate()
    const dispatch = useDispatch()
    const [phone,setPhone] = useState({value:'',error:false})
    const [zip, setZip] = useState({value:'',error:false})
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        let phoneDigits = getDigits(phone.value)
        fetchUser(phoneDigits, zip.value)
        .then(res=> {
            dispatch(login(res))
            navigate('/welcome') 
            setLoading(false)
        })
        .catch(()=> {
            setError('No matching records found') 
            setLoading(false)
        })
    }

    //returns (###) ###-####
    const formatPhone = (input) => {
        input = getDigits(input);
        var size = input.length;
        if (size>0) {input="("+input}
        if (size>3) {input=input.slice(0,4)+") "+input.slice(4,11)}
        if (size>6) {input=input.slice(0,9)+"-" +input.slice(9)}
        setPhone({...phone, value:input})
    }

    const formatZip = (input) => {
        input = getDigits(input)
        if(input.length<6)
            setZip({...zip, value:input})
    }

    const getDigits = (value) => {
        return value.replace(/\D/g,'')
    }

    return(
        <div data-testid='search-record-form'>
            <Typography variant='h4' sx={{mb:4}}>
                Find your service records
            </Typography>
            <Grid container spacing={2} alignItems='center' sx={{mb:4}}>
                <Grid item xs={12} md={5}>
                    <TextField required
                        fullWidth
                        id="phone-number"
                        label="Phone Number"
                        helperText ={phone.error?'enter a valid 10 digit number':'10 digit phone number'}
                        value={phone.value}
                        error={phone.error}
                        onChange={(e)=> formatPhone(e.target.value)}
                        onBlur={()=> {
                            if(phone.value.length<14)
                                setPhone({...phone, error:true})
                        }}
                        onFocus={()=> {
                            setError('')
                            setPhone({...phone, error:false})
                        }}
                    />
                </Grid>
                <Grid item xs={12} md={5}>
                    <TextField required
                        fullWidth
                        id="zipcode"
                        label="Zip Code"
                        helperText ={zip.error?'enter a valid 5 digit code':'5 digit area code'}
                        value={zip.value}
                        error={zip.error}
                        onChange={(e)=> formatZip(e.target.value)}
                        onBlur={()=> {
                            if(zip.value.length<5)
                                setZip({...zip, error:true})
                        }}
                        onFocus={()=> {
                            setError('')
                            setZip({...zip, error:false})
                        }}
                    />
                </Grid>
                <Grid item xs={12} md={2}>
                    <Button variant="contained"
                    disabled={!(phone.value.length>=14 && zip.value.length>=5)||loading}
                    sx={{mb:2}}
                    endIcon={loading?<CircularProgress size={10}/>:null}
                    onClick={(e)=> handleSubmit(e)}>
                        Submit
                    </Button>
                </Grid>
            </Grid>
            {error!=='' && 
                <Alert severity="error">{error}</Alert>
            }
        </div>
    )
}

export default ServiceRecordForm