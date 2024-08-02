import React from 'react'
import Styles from './Testimon.module.css'
import Test from  '../../assets/images/Testi.png'

const Testimonies = () => {
  return (
    <div className= {Styles.container}>
            <h3 className={Styles.Heading}>OUR TESTIMONIALS</h3>
            <div className={Styles.subheading}>
            <h1>Hear from satisfied customers about their experience with our services.</h1>
        </div>
        <div className={Styles.testimony}>
            <img src={Test} alt="img." className='testimony' />
        </div>
    </div> 
    
  )
}

export default Testimonies