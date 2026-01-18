import React from 'react'
import Container from './Container'
import pro3 from "../assets/pro3.jpg"

function Banner() {
  return (
    <div className='bg-gray-100 pt-[200px] pb-[100px]'>
      <Container>
        <div className='flex justify-between'>
          <div className='w-[70%] pt-10'>
            <h2 className='font-rc text-[50px] text-gray-800'>Hello, I’m </h2>
            <h2 className='font-rc text-[50px] text-gray-800'>Tamanna Hasan Navila </h2>
            <h2 className='font-rc text-[50px] font-bold text-gray-800'>Frontend Web Developer  </h2>
            <p className='pr-[100px] pt-5 font-rc text-[20px] text-gray-800'>I create websites that are visually clean, fully 
              responsive, and user-friendly, aiming to provide a simple and smooth experience for everyone who visits.</p>
          </div>
          <div className='h-[400px] w-[400px] bg-amber-200 rounded-full flex items-center justify-center overflow-hidden'>
            <img className='object-cover h-full w-full' src={pro3}></img>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Banner