import React, { useRef } from 'react'
import "./join.css"
import emailjs from '@emailjs/browser';

function Join() {
  
  const form =useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_i1drl5j', 'template_yyk5kp8', form.current, 'Y9eKogmBZV77-TUbJ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <div className="join">
      <div className="j-left">
        <hr />
        <div>
          <span className='stroke-text'>ready to </span>
          <span>level up </span>
        </div>
        <div>
          <span className='stroke-text'>your body </span>
          <span>with us </span>
        </div>
      </div>
      <div className="j-right">
        <form ref={form} onSubmit={sendEmail} className="email">
          <input type="email" name='user-email' placeholder='Enter your email' />
          <button  type="submit"className='btn btn-email'>Join now</button>
        </form>
      </div>
    </div>
  )
}

export default Join