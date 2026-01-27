import React from 'react'
import Container from './Container'
import pro3 from "../assets/pro3.jpg"

function Banner() {
  return (
    <div className='bg-gray-100 pt-[120px] md:pt-[150px] lg:pt-[200px] pb-[50px] md:pb-[75px] lg:pb-[100px]'>
      <Container>
        <div className='flex justify-between'>
          <div className='lg:w-[70%] md:w-[70%] w-full lg:pt-10 pt-5 text-center md:text-start lg:text-start'>
            <h2 className='font-rc text-[24px] md:text-[30px] lg:text-[50px] text-gray-800'>Hello, I’m </h2>
            <h2 className='font-rc text-[24px] md:text-[30px] lg:text-[50px] text-gray-800'>Tamanna Hasan Navila </h2>
            <h2 className='font-rc text-[28px] md:text-[36px] lg:text-[50px] font-bold text-gray-800'>Frontend Web Developer  </h2>
            <p className='lg:pt-5 pt-2 font-rc text-[16px] md:text-[18px] lg:text-[20px] text-gray-800'>I create websites that are visually clean, fully
              responsive, and user-friendly, aiming to provide a simple and smooth experience for everyone who visits.</p>
          </div>
          <div className='mt-8 lg:mt-0 flex justify-center lg:justify-end'>
            <div className='md:h-[250px] md:w-[250px] lg:h-[400px] lg:w-[400px] rounded-full overflow-hidden lg:block md:block hidden'>
              <img className='object-cover h-full w-full' src={pro3} alt="Tamanna" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Banner