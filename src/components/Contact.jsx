import React from 'react'
import Container from './Container'
import { IoIosMail, IoLogoLinkedin } from 'react-icons/io'
import { FaGithub, FaLinkedin, FaPhoneAlt } from 'react-icons/fa'
import { FaSquareInstagram } from 'react-icons/fa6'

function Contact() {
    return (
        <div className='bg-gray-100 lg-py-[100px] md:py-[80px] py-[50px]'>
            <Container>
                <div className='mx-auto lg:w-[60%] md:w-[80%] w-full'>
                    <h2 className='text-center text-[24px] md:text-[30px] lg:text-[50px] font-rc font-bold'>Contact Me</h2>
                    <p className='text-center lg:pt-[10px] pt-[0px] text-[16px] md:text-[18px] lg:text-[20px] font-rc'>I’m open to freelance work, collaborations, or just a friendly chat.Feel free to reach out anytime.</p>
                </div>
                <div className='lg:pt-[100px] md:pt-[80px] pt-[50px] lg:flex md:flex justify-between'>
                    <div className='lg:w-[48%] md:w-[48%] w-full'>
                        <div className='flex lg:pb-[20px] md:pb-[15px] pb-[10px] gap-3 items-center'>
                            <IoIosMail className='lg:text-[30px] md:text-[25px] text-[20px]' />
                            <p className='font-rc lg:text-[18px] md:text-[16px] text-[12px]'>tamannahasannavila@gmail.com</p>
                        </div>
                        <div className='lg:py-[20px] md:py-[15px] py-[10px] w-[60%] flex gap-4 border-y border-gray-300'>
                            <a href='https://github.com/tamanna180906'>
                                <FaGithub className='lg:text-[30px] md:text-[25px] text-[20px]' />
                            </a>
                            <a href='https://www.linkedin.com/in/tamanna-hasan-navila-4133203a8/'>
                                <FaLinkedin className='lg:text-[30px] md:text-[25px] text-[20px]' />
                            </a>
                            <a href='https://www.instagram.com/tamannahasannavila?igsh=MW5yc3d4eHI4ZGFjYw%3D%3D'>
                                <FaSquareInstagram className='lg:text-[30px] md:text-[25px] text-[20px]' />
                            </a>
                        </div>
                        <div className='lg:pt-[20px] md:pt-[15px] pt-[10px] flex gap-3'>
                            <FaPhoneAlt className='lg:text-[20px] md:text-[16px] text-[12px]' />
                            <p className='font-rc lg:text-[18px] md:text-[16px] text-[12px]'>+880 1718-XXXXXX</p>
                        </div>
                    </div>
                    <div className='w-[1px] hidden lg:block md:block bg-gray-300'></div>
                    <div className='lg:w-[48%] md:w-[48%] w-full lg:pt-0 md:pt-0 pt-5'>
                        <h2 className='lg:text-[30px] md:text-[25px] text-[20px] font-rc font-bold' >Contact Form</h2>
                        <form className='gap-y-4 pt-[10px]'>
                            <input type='text' placeholder='Your Name' className='lg:w-[500px] w-full px-[20px] py-[10px] bg-amber-50 rounded font-rc border border-gray-200'></input>
                            <input type='email' placeholder='Your Email' className='mt-[20px] lg:w-[500px] w-full  px-[20px] py-[10px] bg-amber-50 rounded font-rc border border-gray-200'></input>
                            <textarea rows="3" placeholder='Your Message' className='mt-[20px] lg:w-[500px] w-full  px-[20px] py-[10px] bg-amber-50 rounded font-rc border border-gray-200'></textarea>
                            <button type='submit' className='text-center mt-[20px] px-[50px] py-[10px] bg-gray-300 rounded font-rc border border-gray-200'>
                                Send Message
                            </button>
                        </form>
                        <p className='font-rc text-[16px] pt-[20px] text-gray-500 '>I usually reply within 24 hours.</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Contact