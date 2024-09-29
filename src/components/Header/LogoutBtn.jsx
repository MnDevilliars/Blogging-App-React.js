import React from 'react'
import {logout} from '../../store/authSlice'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth';
import { useNavigate } from 'react-router-dom';

function LogoutBtn() {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const logoutHandler = () => {
        authService.logout()
        .then(() => dispatch(logout())
        )
        navigate("/")
    }

    return (
        <button
            className={`inline-block px-6 py-2 duration-300 hover:bg-[#0fa4af] hover:shadow shadow-white md:border-none border bg-transparent w-full rounded-full w-full' : ''}`}
            onClick={logoutHandler}
        >
            Logout
        </button>
    )
}

export default LogoutBtn