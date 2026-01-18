import React from 'react'
import Container from './Container'
import ecom1 from '../assets/ecom1.png'

function Work() {
  return (
    <div className='py-[100px]'>
      <Container>
        <div className='w-[70%] mx-auto'>
          <h2 className='text-center text-[45px] font-rc font-bold'>My Work</h2>
          <p className='text-center  text-[20px] font-rc'>
            Here are some of the projects I’ve worked on.
            These projects reflect my learning journey and my focus on building clean, responsive, and user-friendly interfaces.
          </p>
        </div>
        <div className='pt-[50px]'>
          <div className='w-[50%] bg-gray-100'>
            <img src={ecom1} className='rounded-2xl mb-10'></img>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Work