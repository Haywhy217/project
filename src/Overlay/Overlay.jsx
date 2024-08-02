import React from 'react';
import "./Overlay.css";
// import 'tailwindcss/tailwind.css';


function Overlay() {
  return (
    <div className="Backimage">
        <div className='Supply'>
        <p className='line'>Streamline Your<br/> Supply Chain. <br/>Deliver Success.</p>
        <p className='empower'>We provide seamless logistics solutions that empower businesses to thrive.</p>
        </div>
        <div className='Low'>
            <input className='Shad' type="text" placeholder='Enter package #ID' />
            <button className='Tssk'>Track package</button>
        </div>
    </div>
    )
}

export default Overlay
