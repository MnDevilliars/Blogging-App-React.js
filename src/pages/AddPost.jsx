import React from 'react'
import {Container, PostForm} from '../components'

function AddPost() {
  return (
    <div className='py-8 bg-gradient-to-r from-gray-800 via-gray-900 to-yellow-800'>
        <Container>
            <PostForm />
        </Container>
    </div>
  )
}

export default AddPost