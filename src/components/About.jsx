import React from 'react'
import html from "../assets/html.jpg"
import Container from './Container'
import { FaBootstrap, FaCss3Alt, FaHtml5, FaJs, FaReact } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'

function About() {
    return (
        <div className='py-[150px]'>
            <Container>
                <div className='w-[70%] mx-auto '>
                    <h2 className='text-center text-[50px] font-rc font-bold'>About Me</h2>
                    <p className='text-center text-[20px] font-rc '>
                        I’m a Frontend Developer with experience in creating clean and responsive web interfaces. I
                        focus on writing structured, maintainable code and building designs that are simple, intuitive,
                        and easy to use. I enjoy translating ideas and designs into functional web experiences that work
                        smoothly across different devices and screen sizes.
                    </p>
                </div>
                <div className='pt-[100px]'>
                    <p className='font-bold font-rc text-center text-[26px]'>Skills & Technologies</p>
                    <div className='pt-[30px] flex justify-center gap-8 flex-wrap'>
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