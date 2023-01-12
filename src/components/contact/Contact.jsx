import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import {useState} from 'react'
import './contact.css'

const Contact = () => {
  const form = useRef();
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      await emailjs.sendForm('service_jlo1ivo', 'template_ukverpo', form.current, 'Y4vlOq6kDQpzSaVlX')
      e.target.reset()
      setSubmitSuccess(true);
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    } catch (error) {
      console.log(error.text);
    }
  };
  return (
    <section id="contact">
    {submitSuccess && <p className="neon-light">Submit successful</p>}
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>austineokafor.e@gmail.com</h5>
            <a href="mailto:austineokafor.e@gmail.com" target="_blank">Send a mail</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Egbonu Kenechukwu</h5>
            <a href="https://m.me/julys.august" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+2349077570157</h5>
            <a href="https://api.whatsapp.com/send?phone=+2349077570157" target="_blank">Send a Dm</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="17" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact