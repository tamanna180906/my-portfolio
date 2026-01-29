import React, { useState } from 'react'
import Container from './Container'
import { RxCross1 } from 'react-icons/rx'
import { FaBarsStaggered } from 'react-icons/fa6'

function Navbar() {
  let [show, setShow] = useState(false)
  return (
    <div className='top-0 left-0 w-full fixed'>
      <Container className="">
        <div className='flex justify-between items-center bg-gray-200 py-[20px] lg:px-[100px] rounded-b-lg'>
          <div className=''>
            <ul className={`lg:flex gap-x-20 items-center lg:bg-transparent absolute px-0 w-full lg:static transition-all
            ${show==true?"bg-gray-100 top-[93px]":"top-[-300px] "}
            text-center space-y-2 lg:space-y-0 py-2 z-[-100]
              `}>
              <li className='font-rc text-[16px] text-black'>Home</li>
              <li className='font-rc text-[16px] text-black'>About</li>
              <li className='font-rc text-[16px] text-black'>Work</li>
              <li className='font-rc text-[16px] text-black'>Contact</li>
            </ul>
            <div className='lg:hidden absolute top-[50%] translate-y-[-50%] left-6' onClick={() => setShow(!show)}>
              {show ? <RxCross1 /> : <FaBarsStaggered />}
            </div>
          </div>
          <div className='pr-[10px] lg:pr-0'>
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