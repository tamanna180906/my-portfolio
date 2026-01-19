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
        <div className='pt-[50px] flex justify-between'>
          <div className='w-[48%] p-10 bg-gray-100 rounded-2xl'>
            <h2 className='font-rc text-[20px] font-bold'>OREBI – E-Commerce Website UI</h2>
            <div className='bg-white mt-2'>
              <img src={ecom1} className='rounded-2xl px-10'></img>
            </div>
            <p className='pt-3 text-[14px] font-rc '>A responsive e-commerce website design inspired by modern online stores, focusing on clean layout,
              structured UI, and user-friendly navigation.</p>
            <p className='pt-4 text-[16px] font-rc '>Figma • HTML • Tailwind CSS • React</p>
            <div className="flex gap-3 mt-4">
              <a href="https://sign-log.netlify.app/" className="btn pt-[8px] pb-[11px] px-[25px] border border-gray-400 bg-gray-200 rounded ">Live Demo</a>
              <a href='https://github.com/tamanna180906/last-project' className="btn pt-[8px] pb-[11px] px-[25px] border border-gray-400  rounded ">Source Code</a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Work