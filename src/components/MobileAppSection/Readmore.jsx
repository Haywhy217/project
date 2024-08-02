import React from 'react'
import B from '../../assets/images/B.png'
import styles from './Readmore.module.css'


const Readmore = () => {
  return (
    <div className={styles.container}>
        <div className={styles.heading}>
            <h4 className={styles.thading}>TRENDING NEW ARTICLES</h4>
        </div>
        <div className={styles.subheading}>
            <h1>Stay Ahead of the Curve:Latest Logistics Insights</h1>
        </div>
        <div className={styles.Bmore}>
          <img src={B} alt="img." />

        </div>

    </div>
    
  )
}

export default Readmore