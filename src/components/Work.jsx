import React from 'react'
import Container from './Container'
import ecom1 from '../assets/ecom1.png'
import ecom2 from '../assets/ecom2.png'

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
          <div className='w-[32%] p-5 bg-gray-100 rounded-2xl'>
            <h2 className='font-rc text-[16px] font-bold'>OREBI – E-Commerce Website UI</h2>
            <div className='bg-white mt-2'>
              <img src={ecom1} className='rounded-2xl px-5'></img>
            </div>
            <p className='pt-2 text-[10px] font-rc '>A responsive e-commerce website design inspired by modern online stores, focusing on clean layout,
              structured UI, and user-friendly navigation.</p>
            <p className='pt-2 text-[12px] font-rc '>API • JavaScript • Tailwind CSS • React</p>
            <div className="flex gap-3 mt-4">
              <a href="https://sign-log.netlify.app/" className="btn pt-[6px] pb-[7px] px-[25px] border border-gray-400 bg-gray-200 rounded font-rc text-[12px] font-bold ">Live Demo</a>
              <a href='https://github.com/tamanna180906/last-project' className="btn pt-[6px] pb-[7px] px-[25px] border border-gray-400 rounded font-rc text-[12px] font-bold">Source Code</a>
            </div>
          </div>
          <div className='w-[32%] p-5 bg-gray-100 rounded-2xl'>
            <h2 className='font-rc text-[16px] font-bold'>Hekto – E-Commerce Website Design</h2>
            <div className='bg-white mt-2'>
              <img src={ecom2} className='rounded-2xl px-5'></img>
            </div>
            <p className='pt-2 text-[10px] font-rc '>A modern and responsive e-commerce website design inspired by 
              the Hekto UI Kit, focusing on clean layout and user-friendly navigation.</p>
            <p className='pt-2 text-[12px] font-rc '> HTML • Tailwind CSS • React</p>
            <div className="flex gap-3 mt-4">
              <a className="btn pt-[6px] pb-[7px] px-[25px] border border-gray-400 bg-gray-200 rounded font-rc text-[12px] font-bold ">Live Demo</a>
              <a className="btn pt-[6px] pb-[7px] px-[25px] border border-gray-400 rounded font-rc text-[12px] font-bold">Source Code</a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Work