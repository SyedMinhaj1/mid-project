import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import LandingPage from './components/LandingPage/LandingPage.jsx'
import Marquee from './components/marquee/marquee.jsx'
import Cards_1 from './components/Cards1/Cards_1.jsx'
import Cards_2 from './components/Cards2/Cards_2.jsx' 
import About from './components/About/About.jsx'

function App() {
  return (
    <div className='w-full min-h-screen text-white bg-zinc-900'>
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Cards_1/>
      <Cards_2 />
    </div>
  )
}

export default App
