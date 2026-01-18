import React from 'react'
import Container from './Container'

function Navbar() {
  return (
    <div className='top-0 left-0 w-full fixed'>
      <Container>
        <div className='flex justify-between items-center bg-gray-200 py-[20px] px-[100px] rounded-b-lg'>
          <ul className='flex gap-20'>
            <li className='font-rc text-[16px] text-black'>Home</li>
            <li className='font-rc text-[16px] text-black'>About</li>
            <li className='font-rc text-[16px] text-black'>Work</li>
            <li className='font-rc text-[16px] text-black'>Contact</li>
          </ul>
          <div className=''>
            <button className='py-[15px] px-[40px] bg-gray-100 rounded-2xl font-rc text-[16px] '>Download CV</button>
          </div>
        </div>
        {/* <div class="h-[50px] w-[50px] bg-amber-700 fixed rounded-2xl">
          kkk         
        </div> */}
      </Container>
    </div>
  )
}


export default Navbar




