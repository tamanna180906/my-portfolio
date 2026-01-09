import React from 'react'
import html from "../assets/html.jpg"
import Container from './Container'

function About() {
    return (
        <div className='py-[150px]'>
            <Container>
                <div className='w-[70%] mx-auto '>
                    <h2 className='text-center text-[50px] font-rc font-bold '>About Me</h2>
                    <p className='text-center text-[20px] font-rc '>
                        I’m a Frontend Developer with experience in creating clean and responsive web interfaces. I
                        focus on writing structured, maintainable code and building designs that are simple, intuitive,
                        and easy to use. I enjoy translating ideas and designs into functional web experiences that work
                        smoothly across different devices and screen sizes.
                    </p>
                </div>
                <div className='pt-[100px]' >
                    <div>
                        <div>
                            <img className='h-[50px] w-[50px]' src={html}></img>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default About