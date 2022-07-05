import {useDispatch} from 'react-redux'
import { useEffect } from 'react'
import { logout } from '../store/actions/handleLogIn';
import {Navigate} from 'react-router-dom'
const Logout = () =>{
    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(logout())
    })
    return <Navigate to="/" />
}

export default Logout