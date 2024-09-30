import React, { useState } from 'react'
import authService from '../appwrite/auth'
import { useDispatch } from 'react-redux'
import { login as authLogin } from '../store/authSlice'
import { Button, Logo, Input } from './index'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

function Login() {
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    const login = async (data) => {
        setError("");
        try {
            const session = await authService.login(data);

            if (session) {
                const userData = await authService.getCurrentUser()

                if (userData) {
                    dispatch(authLogin({ userData }));
                    navigate("/")
                }
            }
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div className='w-full flex items-center justify-center py-10 px-2 bg-gradient-to-r from-gray-800 via-gray-900 to-yellow-800'>
            <div className='mx-auto max-w-lg backdrop-blur-xl text-[#E0E0E0] rounded-xl p-5 md:p-8 border border-[#afdde5] shadow-[0_4px_15px_rgba(255,255,255,0.5)]'>
                <div className='mb-4 flex justify-center'>
                    <Logo width='65px' />
                </div>
                <h2 className='text-center text-2xl font-bold leading-tight text-[#afdde5]'>
                    Sign in to your account
                </h2>
                <p className='text-center my-2 text-[#afdde5]'>
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to='/signup'
                        className="font-medium text-[#4FD1C5] hover:text-[#ffffff] hover:underline transition-all duration-300"
                    >
                        Sign Up
                    </Link>
                </p>
                {error && console.log(error)}
                <form onSubmit={handleSubmit(login)} className='mt-2'>
                    <div className='space-y-3'>
                        <Input
                            label="Email: "
                            placeholder="Enter your email"
                            type="email"
                            className=""
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address",
                                }
                            })}
                        />
                        <Input
                            label="Password: "
                            placeholder="Enter your password"
                            type="password"
                            className=" mb-8"
                            {...register("password", {
                                required: true
                            })}
                        />
                        <Button
                            type='submit'
                            className='w-full border border-[#afdde5] bg-gray-800 hover:bg-gray-900 duration-300 text-white font-bold text-lg py-2 rounded-lg shadow-md'
                        >
                            Sign In
                        </Button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Login