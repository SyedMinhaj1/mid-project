// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import LandingPage from './components/LandingPage/LandingPage.jsx'
import Marquee from './components/marquee/marquee.jsx'
import Cards_1 from './components/Cards1/Cards_1.jsx'

function App() {
  return (
    <div className='w-full min-h-screen text-white bg-zinc-900'>
      <Navbar />
      <LandingPage />
      <Marquee />
      <Cards_1/>
    </div>
  )
}

export default App
