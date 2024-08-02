import React from 'react'
import styles from './FAQ.module.css'

const FAQuestions = () => {
  return (
    <div className={styles.faqcontainer}>
      <div className={styles.title}>
        <h4>FREQUENTLY ASKED QUESTIONS</h4>
        <h1>Here Are Some Questions You Might Have in Mind</h1>
      </div>
      <div className={styles.faqlists}>
        <ul className={styles.faqlist}>
          <li>
            <input type='radio' name='faq' id='one' checked/>
            <label htmlFor='one' className={styles.faqlabel} >How did we get started?</label>
            <div className={styles.para}>
            CarryGo Logistics started 2005 and our aim is to ensure swift delivery of goods across different countries.
            </div>
          </li>
          <li>
            <input type='radio' name='faq' id='two'/>
            <label htmlFor='two'className={styles.faqlabel} >Can I track and track delivery person while on transit</label>
            <div className={styles.para}>
            Yes, you can always track the delivery person on transit.
          You can track your shipment by visiting our website and entering your unique tracking number provided at the time of booking. You'll receive real-time updates on the status and location of your shipment.
            </div>
          </li>
          <li>
            <input type='radio' name='faq' id='three'/>
            <label htmlFor='three'className={styles.faqlabel} >How can I get started</label>
            <div className={styles.para}>
            You can get started by always visiting our website, it is user friendly, easy to navigate.
            </div>
          </li>
          <li>
            <input type='radio' name='faq' id='four'/>
            <label htmlFor='four' className={styles.faqlabel} >What services does your company provide?</label>
            <div className={styles.para}>
            We offer a wide range of logistics services including freight forwarding, warehousing, distribution, customs clearance, and transportation services.
            </div>
          </li>
          <li>
            <input type='radio' name='faq' id='five'/>
            <label htmlFor='five' className={styles.faqlabel}>Do you provide international shipping</label>
            <div className={styles.para}>
            Yes, we offer international shipping services to various destinations worldwide. Our extensive network ensures reliable and efficient delivery of goods across borders.
            </div>
          </li>
          
        </ul>
      </div>
    </div>
  )
}

export default FAQuestions
