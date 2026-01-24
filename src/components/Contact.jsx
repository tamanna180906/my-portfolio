import React from 'react'
import Container from './Container'
import { IoIosMail, IoLogoLinkedin } from 'react-icons/io'
import { FaGithub, FaLinkedin, FaPhoneAlt } from 'react-icons/fa'
import { FaSquareInstagram } from 'react-icons/fa6'

function Contact() {
    return (
        <div className='bg-gray-100 py-[100px]'>
            <Container>
                <div className='mx-auto w-[60%]'>
                    <h2 className='text-center text-[45px] font-rc font-bold'>Contact Me</h2>
                    <p className='text-center pt-[10px] text-[20px] font-rc'>I’m open to freelance work, collaborations, or just a friendly chat.Feel free to reach out anytime.</p>
                </div>
                <div className='pt-[100px] flex justify-between'>
                    <div className='w-[48%]'>
                        <div className='flex pb-[20px] gap-3 items-center'>
                            <IoIosMail className='text-[30px]' />
                            <p className='font-rc text-[18px]'>tamannahasannavila@gmail.com</p>
                        </div>
                        <div className='py-[20px] w-[60%] flex gap-4 border-y border-gray-300'>
                            <a href='https://github.com/tamanna180906'>
                                <FaGithub className='text-[30px]' />
                            </a>
                            <a href='https://www.linkedin.com/in/tamanna-hasan-navila-4133203a8/'>
                                <FaLinkedin className='text-[30px]' />
                            </a>
                            <a href='https://www.instagram.com/tamannahasannavila?igsh=MW5yc3d4eHI4ZGFjYw%3D%3D'>
                                <FaSquareInstagram className='text-[30px]' />
                            </a>
                        </div>
                        <div className='pt-[20px] flex gap-3'>
                            <FaPhoneAlt className='text-[20px]' />
                            <p className='font-rc text-[18px]'>+880 1718-XXXXXX</p>
                        </div>
                    </div>
                    <div className='w-[1px] bg-gray-300'></div>
                    <div className='w-[48%]'>
                        <h2 className='text-[30px] font-rc font-bold' >Contact Form</h2>
                        <form className='gap-y-4 pt-[10px]'>
                            <input type='text' placeholder='Your Name' className='w-[500px] px-[20px] py-[10px] bg-amber-50 rounded font-rc border border-gray-200'></input>
                            <input type='email' placeholder='Your Email' className='mt-[20px] w-[500px] px-[20px] py-[10px] bg-amber-50 rounded font-rc border border-gray-200'></input>
                            <textarea rows="3" placeholder='Your Message' className='mt-[20px] w-[500px] px-[20px] py-[10px] bg-amber-50 rounded font-rc border border-gray-200'></textarea>
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