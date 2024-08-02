import React from 'react'
import "./How.css"
import Frame103 from './Frame 103.png'

const How = () => {
  return (
     <section className='howpadding'>
        <div className='spaces'>
          <p className='work'>How it works</p>
          <p className='Free'>Experience Hassle-Free Logistics <br/> in 3 Easy Steps.</p>    
        </div>
        <div className='links'>
        <img src={ Frame103 } alt="webflow" />
        </div>      
      </section>
  )
}

export default How
