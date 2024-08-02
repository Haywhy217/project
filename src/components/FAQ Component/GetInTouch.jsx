import React from 'react'
import './GetInTouch.css'
const GetInTouch = () => {
  return (
    <div className='container'>
      <div className='section-1'>
        <div className='text-inputs'>
        <h1 className='heading'>Get in touch with us?</h1>
        <p className='para1'>Fill out this form and our specialist will contact you shortly for detailed consultation.</p>
        </div>
        <div className='quote'>
          <blockquote>
            <h1 className='heading2'>"Great Experience working with them"</h1>
            <p className='para2'>The delivery process is seamless and the website is user friendly</p>
            <div className='testimonial' >
  
              <div className='testimonial-para'>
              <h3>- Ronald Richards</h3>
              <p>Software Tester</p>
              </div>
            </div>
          </blockquote>
        </div>
      </div>
      <div className='inputs'>
        <div className='name-input'>
          <div className='firstname'>First Name
            <input type='text'/>
          </div>
          <div className='lastname'>Last Name
            <input type='text'/>
            </div>
        </div>
        <div className='input'>Email Address
          <input typeof='email' />
        </div>
        <div className='message-input'>Messages
          <input type='text' />
        </div>
        <div className='submit'>Send Message</div>
      </div>

    </div>
  )
}

export default GetInTouch