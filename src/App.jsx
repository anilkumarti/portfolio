import React from 'react'
import HeroSection from './compoment/Hero/HeroSection'
import './App.css'
import Projects from './compoment/Projects/Projects'
import Skills from './compoment/Skill/Skills'
import Contact from './compoment/Contact/Contact'
import Footer from './compoment/Footer/Footer'


const App = () => {
  return (
    <div>
     <HeroSection/>
     <Projects/>
     <Skills/>
     <Contact/>
     <Footer/>
    </div>
  )
}

export default App
