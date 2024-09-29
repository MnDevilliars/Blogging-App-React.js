import React from 'react'

function Logo({
  width = '20px'
}) {
  return (
    <>
      <div style={{ width: width, height: width }} className='flex rounded-full bg-white border overflow-hidden md:w-[2px]'>
        <img
          className=''
          src="https://img.freepik.com/premium-vector/modern-unique-hexagon-letter-mn-logo-design-template-elegant-initial-mn-letter-logo-concept_1101554-976.jpg"
          alt="Logo"
        />
      </div>
    </>
  )
}

export default Logo
