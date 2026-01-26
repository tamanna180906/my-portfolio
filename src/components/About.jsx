import React from 'react'
import html from "../assets/html.jpg"
import Container from './Container'
import { FaBootstrap, FaCss3Alt, FaHtml5, FaJs, FaReact } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'

function About() {
    return (
        <div className='lg-py-[150px] md:py-[100px] py-[50px]'>
            <Container>
                <div className='lg:w-[70%] md:w-[80%] w-full mx-auto'>
                    <h2 className='text-center text-[24px] md:text-[30px] lg:text-[50px] font-rc font-bold'>About Me</h2>
                    <p className='text-center text-[16px] md:text-[18px] lg:text-[20px] font-rc '>
                        I’m a Frontend Developer with experience in creating clean and responsive web interfaces. I
                        focus on writing structured, maintainable code and building designs that are simple, intuitive,
                        and easy to use. I enjoy translating ideas and designs into functional web experiences that work
                        smoothly across different devices and screen sizes.
                    </p>
                </div>
                <div className='lg-pt-[100px] md:pt-[75px] pt-[50px] '>
                    <p className='font-bold font-rc text-center lg:text-[26px] md:text-[22px] text-[18px]'>Skills & Technologies</p>
                    <div className='lg:pt-[30px] md:pt-[20px] pt-[10px] flex justify-center gap-x-8 gap-y-4 flex-wrap'>
                        <div className="flex items-center gap-2">
                            <FaHtml5 className="text-orange-500 text-2xl" />
                            <span>HTML</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <FaCss3Alt className="text-blue-500 text-2xl" />
                            <span>CSS</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <SiTailwindcss className="text-sky-400 text-2xl" />
                            <span>Tailwind</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <FaJs className="text-yellow-400 text-2xl" />
                            <span>JavaScript</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <FaReact className="text-cyan-400 text-2xl" />
                            <span>React</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <FaBootstrap className="text-purple-600 text-2xl" />
                            <span>Bootstrap</span>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default About