// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import LandingPage from './components/LandingPage/LandingPage'
import Marquee from './components/Marquee/Marquee'

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
