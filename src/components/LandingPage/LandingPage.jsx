import React from 'react'
import "./Landingpage.css";

function LandingPage() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
      <div className='textstructure '>
        <div className='masker'>
          <div className='text text1'>
            <h1>We Create</h1>
          </div>
          <div className='text text2'>
          <div className="lpbox"></div>
            <h1>Eye Opening</h1>
          </div>
          <div className='text text3'>
            <h1>Presentation</h1>
          </div> 
        </div>
      </div>
      <div className='bottom'>
        <p>For public and private companies</p>
        <p>From the first pitch to IPO</p>
        <div className="start">
          <button className='stbtn' type='submit' >Start the Project</button>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
