import React from 'react'
import Navbar from '../components/Navbar/navbar'
import Intro from '../components/Intro/intro'
import About from '../components/About/about'
import Skills from '../components/Skills/skills'
import Projects from '../components/Project/projects'
import Contact from '../components/Contact/contact'
import Footer from '../components/Footer/footer'
function Home() {
  return (
    <>
        <Navbar/>
        <Intro/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default Home