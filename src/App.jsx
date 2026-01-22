import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Work from './components/Work'
import About from './components/About'
import Contact from './components/Contact'

function App() {

  return (
    <>
     <Navbar/>
     <Banner/>
     <About/>
     <Work/>
     <Contact/>
    </>
  )
}

export default App
