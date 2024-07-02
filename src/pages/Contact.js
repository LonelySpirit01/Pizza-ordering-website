import React from 'react'
import Pizzaleft from "../assets/pizzaLeft.jpg"
import "../Styles/Contact.css"

function Contact() {
  return (
    <div className='contact'> 
      <div className='leftSide' style={{ backgroundImage: `url(${Pizzaleft})` }}></div>
      <div className='rightSide'>
        <form id='contact' method='post'>
            <label htmlFor='name'>Full name</label>
            <input name='name' placeholder='Enter your name' type='text'/>
            <label htmlFor='email'>Email</label>
            <input name='email' placeholder='Enter your email' type='email'/>
            <label htmlFor='Feedback/Message'>Message </label>
            <textarea rows='6' placeholder='Enter Message' type="text">  </textarea>
            <button type='submit'>submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
