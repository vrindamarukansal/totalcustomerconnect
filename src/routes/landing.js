import React,{useEffect} from 'react'
import ServiceRecordForm from '../components/Form'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../store/userSlice'

const Landing = () => {
    const dispatch = useDispatch()
    const {authenticated} = useSelector(state=>state.user)

    useEffect(()=>{
        if(authenticated)
            dispatch(logout())
    },[dispatch])

    return(
        <ServiceRecordForm/>
    )
}

export default Landing