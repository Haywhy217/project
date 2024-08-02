import React from 'react'
import styles from './GetInTouch.module.css'
import Lady from '../../assets/images/Ellipse6.png'


const GetInTouch = () => {
  return (
    <div className={styles.container}>
      <div className={styles.section1}>
        <div className={styles.textinputs}>
        <h1 className={styles.heading}>Get in touch with us?</h1>
        <p className={styles.para1}>Fill out this form and our specialist will contact you shortly for detailed consultation.</p>
        </div>
        <div className={styles.quote}>
          <blockquote>
            <h1 className={styles.heading2}>"Great Experience working with them"</h1>
            <p className={styles.para2}>The delivery process is seamless and <br /> the website is user friendly</p>
            <div className={styles.testimonial} >
            <img src={Lady}/>
              <div className={styles.testimonialpara}>
              <h3>Ronald Richards</h3>
              <p className={styles.testimonialpara2}>Software Tester</p>
              </div>
            </div>
          </blockquote>
        </div>
      </div>
      <div className={styles.inputs}>
        <div className={styles.nameinput}> 

          <div className={styles.input}>
            <label htmlFor="firstName"> First Name </label>
            <input type='text' id='firstName'/>
          </div>
          <div className={styles.input}>
            <label htmlFor="lastName">Last Name</label>
            <input type='text'id='lastName'/>
          </div>
        </div>
        <div className={styles.input}>
        <label htmlFor='subject'>Subject</label>
            <input type='text'id='subject'/>
        </div>
        <div className={styles.input}>
        <label htmlFor='email address'>Email Address</label>
          <input typeof='email'id='email'/>
        </div>
        <div className={styles.input}>
        <label htmlFor='messages'>Messages</label>
          <textarea rows={10} cols={40}> </textarea>
        </div>
        <div className={styles.submit}>Send Message</div>
      </div>
    </div>
  )
}

export default GetInTouch