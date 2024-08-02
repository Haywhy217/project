import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import How from '../How/How.jsx'
import Partners from '../Partners/Partners.jsx'
import Overlay from '../Overlay/Overlay.jsx'

import Hero from '../components/Hero/Hero'
import Slideshow from '../components/Slideshow/Slide'
import Testimonies from '../components/Testimonial/Testimonies'
import MobileApp from '../components/MobileAppSection/MobileApp'
import Readmore from '../components/MobileAppSection/Readmore'

function HomePage() {
  return (
    <>
        <Header/>
        <Overlay/>
        <Hero/>
        <Slideshow/>
        <How/>
        <Partners/>
        <Testimonies/>
        <MobileApp/>
        <Readmore/>
        <Footer/>
    </>
  )
}

export default HomePage