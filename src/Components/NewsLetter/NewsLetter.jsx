import React from 'react'
import './NewsLetter.css'


export default function NewsLetter() {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Suscribe To Our NewsLetter and Stay updated</p>
        <div>
            <input type="email" placeholder='Your Email id'/>
            <button>Suscribe</button>
        </div>
      
    </div>
  )
}
