import React, { useEffect, useState } from 'react'
import appwriteService from '../appwrite/database'
import { Container, Loader, PostCard } from '../components'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Home() {
    const [posts, setPosts] = useState([])

    const authStatus = useSelector((state) => state.auth.status);
    const navigate = useNavigate();

    useEffect(() => {
        if (authStatus) {
            appwriteService.getPosts()
                .then((post) => {
                    if (post) {
                        setPosts(post.documents)
                    }
                })
        } else (setPosts([]))
    }, [authStatus])

    if (authStatus && posts.length === 0) {
        return (
            <div className='w-full py-8 mt-4 text-center bg-gradient-to-r from-gray-800 via-gray-900 to-yellow-800'>
                <Container>
                    <div className='flex flex-wrap justify-center items-center'>
                        <div className='flex flex-col gap-3 items-center justify-center text-center my-8'>
                            <h1 className='text-2xl font-bold text-[#964734] duration-200 hover:text-[#afdde5] cursor-pointer'>
                                &#128577; Oops !!! no post available
                            </h1>
                            <Loader />
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

    if (!authStatus) {
        return (
            <div className='w-full flex items-center justify-center bg-gradient-to-r from-gray-800 via-gray-900 to-yellow-800'>
                <Container className='flex justify-center items-center'>
                    <div className='flex flex-col gap-3 items-center md:w-1/2 justify-center text-center my-8'>
                        <section className='px-5 sm:px-5 mb-4 md:mb-8'>
                            <h1 className='text-[#afdde5] text-2xl font-bold mb-3 md:text-3xl duration-300'>Welcome to Story Nest</h1>
                            <p className='text-white text-[16px]'>Discover insightful <b>stories, expert opinions, and discussions from our community of passionate writers.</b> Join us to share your own voice, engage with others, and explore content that matters to you.</p>
                        </section>
                        <h1 className='text-xl font-bold transition duration-300 text-[#afdde5] hover:text-[#ffdcd3] cursor-pointer'>
                            Login to read posts
                        </h1>
                        <Loader />

                        <div className='flex justify-center items-center gap-4'>
                            <button
                                className='bg-gray-400 py-2 px-8 md:px-9 rounded-lg duration-300 hover:text-white hover:bg-gray-500 text-black/90 font-bold text-[18px]'
                                onClick={() => navigate("/login")}
                            >
                                Login
                            </button>
                            <button
                                className='bg-gray-400 py-2 px-4 md:px-5 rounded-lg duration-300 hover:text-white hover:bg-gray-500 text-black/90 font-bold text-[18px]'
                                onClick={() => navigate("/signup")}
                            >
                                Register Now
                            </button>
                        </div>

                    </div>
                </Container>
            </div>
        )
    }

    return (
        <div className='flex items-center py-12 justify-center bg-gradient-to-r from-gray-800 via-gray-900 to-yellow-800'>
            <Container>
                <div className='flex flex-col justify-center items-center'>
                    <div className='sm:w-1/2 border border-[#959595]'>
                        {
                            posts.map((post) => (
                                <div key={post.$id} className='w-full'>
                                    <PostCard {...post} className='shadow-lg hover:shadow-xl transition-shadow duration-300 bg-[#afdde5] text-[#003135] rounded-md' />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </Container>
        </div>
    )


}
export default Home