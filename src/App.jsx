import React from 'react'
import style from './App.module.css'
import Header from './Component/Header/Header.jsx'
import Hero from './Component/Hero/Hero.jsx'
// import Courses from './Component/Course/Course.jsx'
import About from './Component/About/About.jsx'
import Courses from './Component/Course/Course.jsx'
import Footer from './Component/Footer/Footer.jsx'
import Contact from './Component/Contact/Contact.jsx'

function App() {
  return (
    <div>
          <Header/>
          <Hero/>
          <Courses/>
          <About/>
          <Contact/>
          <Footer/>
    </div>

  )
}

export default App