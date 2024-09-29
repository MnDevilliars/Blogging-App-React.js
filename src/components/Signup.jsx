import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Input, Button, Logo } from './index'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../store/authSlice'

function Signup() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [error, setError] = useState("");
    const { register, handleSubmit } = useForm();

    const create = async (data) => {
        setError("")
        try {
            const userData = await authService.createAccount(data)
            if (userData) {
                const userData = await authService.getCurrentUser()
                if (userData) dispatch(login(userData))
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }

    }

    return (
        <div className='w-full flex items-center justify-center py-10 px-2 bg-gradient-to-r from-gray-800 via-gray-900 to-yellow-800'>
            <div className='mx-auto max-w-lg backdrop-blur-xl text-[#E0E0E0] rounded-xl p-5 md:p-8 border border-[#afdde5] shadow-[0_4px_15px_rgba(255,255,255,0.5)]'>
                <div className='mb-4 flex justify-center'>
                    <Logo width='65px' />
                </div>
                <h2 className='text-center text-2xl font-bold leading-tight text-[#afdde5]'>
                    Sign up to create account
                </h2>
                <p className='text-center my-2 text-[#afdde5]'>
                    Already have an account?&nbsp;
                    <Link
                        to='/login'
                        className="font-medium text-[#4FD1C5] hover:text-[#ffffff] hover:underline transition-all duration-300"
                    >
                        Sign In
                    </Link>
                </p>
                {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}

                <form onSubmit={handleSubmit(create)} className='mt-2'>
                    <div className='space-y-3'>
                        <Input
                            label="Full Name: "
                            placeholder="Enter your full name"
                            {...register("username", {
                                required: true
                            })}
                        />
                        <Input
                            label="Email: "
                            placeholder="Enter your email"
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
                            className='mb-3'
                            placeholder="Enter your password"
                            {...register("password", {
                                required: true
                            })}
                        />
                        <Button
                            type='submit'
                            className='w-full border border-[#afdde5] bg-gray-800 hover:bg-gray-900 duration-300 text-white font-bold text-lg py-2 rounded-lg shadow-md'
                        >
                            Create Account
                        </Button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Signup