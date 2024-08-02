import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import LandingPage from './components/LandingPage/LandingPage.jsx'
import Marquee from './components/marquee/marquee.jsx'

function App() {
  return (
    <div className='w-full min-h-screen text-white bg-zinc-900'>
      <Navbar />
      <LandingPage />
      <Marquee />
    </div>
  )
}

export default App
