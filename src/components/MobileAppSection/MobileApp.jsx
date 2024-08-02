import React from 'react'
import Firstscreen from '../../assets/images/Firstscreen.png'
import H from '../../assets/images/H.png'
import ios from '../../assets/images/ios.png'
import Styles from './MobileApp.module.css'



function MobileApp() {
  return (
    <div className={Styles.appSection}>
      <div className={Styles.textContainer}>
        <h1 className={Styles.font}>Download Our Mobile App </h1>
        <p className={Styles.sub}>Your pocket-sized logistic partner.Track, Manage, Ship on the go.Get the App Now.
         </p>
<div className={Styles.ios}>
  <img src={ios} alt="img."/>
  </div>
    
      </div>

      
      <div className= {Styles.H}>
        <img src={H} alt="img." />
      </div>
<div className={Styles.Hgreen}>
  <img src={Firstscreen} alt="img."/>
</div>
    </div>
  )
}

export default MobileApp