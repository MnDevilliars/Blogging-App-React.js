import React, { useState, useEffect } from 'react'
import { Container, PostCard, Loader } from '../components'
import appwriteService from '../appwrite/database'

function AllPost() {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([])

    useEffect(() => { }, [])

    appwriteService.getPosts([])
        .then((posts) => {
            if (posts) {
                setPosts(posts.documents)
                setLoading(true)
            }
        })

    if (!loading) return (
        <div className='w-full py-8 mt-4 text-center bg-gradient-to-r from-gray-800 via-gray-900 to-yellow-800'>
            <Container>
                <div className='flex flex-wrap justify-center items-center'>
                    <div className='flex flex-col gap-3 items-center justify-center text-center my-8'>
                        <h1 className='text-2xl font-bold text-[#964734] duration-200 hover:text-[#afdde5]'>
                            &#128512; Posts are loading
                        </h1>
                        <Loader />
                    </div>
                </div>
            </Container>
        </div>
    )

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

export default AllPost