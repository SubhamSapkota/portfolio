import React, { useContext, useState } from 'react'
import './Contact.css'
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { themeContext } from '../../Context';
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const form = useRef();
  const[done, setDone] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_q7t0kfb', 'template_oed6mre', form.current, {
        publicKey: 'MMBVWe0-xAySp-WhP',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setDone(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div className='contact-form' id="Contact">
      <div className="w-left">
        <div className="awesome">
           {/* darkMode */}
           <span style={{color: darkMode?'white': ''}}>Get in Touch</span>
          <span>Contact me</span>
          <div className="blur c-blur1" style={{ background: "#ABF1FF94"}}></div>
        </div>
      </div>

      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user" placeholder="Name" />

          <input type="email" name="user_email" className="user" placeholder="Email" />

          <textarea name="message" className="user" placeholder='Message'/>

          <input type="submit" value="Send" className="button" />
          <span>{done && "Thanks for contacting me"}</span>

          <div className="blur c-blur2" style={{background: "var(--purple)"}}></div>
        </form>
      </div>
    </div>
  )
}

export default Contact
