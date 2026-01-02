import React from 'react'
import Container from './Container'

function About() {
    return (
        <div className='bg-gray-300 py-[100px]'>
            <Container>
                <div className='w-[70%] mx-auto '>
                    <h2 className='text-center'>About Me</h2>
                    <p className='text-center'>
                        I’m a Frontend Developer with experience in creating clean and responsive web interfaces. I
                        focus on writing structured, maintainable code and building designs that are simple, intuitive,
                        and easy to use. I enjoy translating ideas and designs into functional web experiences that work
                        smoothly across different devices and screen sizes.
                    </p>
                </div>
            </Container>
        </div>
    )
}

export default About