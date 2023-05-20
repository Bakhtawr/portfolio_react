import React from "react";
import './contact.css';
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";
import { RiMessengerLine } from "@react-icons/all-files/ri/RiMessengerLine";
import {AiOutlineWhatsApp } from "@react-icons/all-files/ai/AiOutlineWhatsApp";
import { useRef } from 'react';
import emailjs from 'emailjs-com';
const Contact = () =>
{
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();  
      emailjs.sendForm('service_v45soam', 'template_yvtlea8', form.current, 'qbIystRx8ubh6rnbA')     
    };
    return(
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
             <div className="contact__options">
               <article className="contact__option">
                <AiOutlineMail className="contact__option-icon"/>
                <h4>193memon@gmail.com</h4>
                <a href="mailto:bakhtawermemon193@gmail.com">Send a Message</a>
               </article>
               <article className="contact__option">
                <RiMessengerLine className="contact__option-icon"/>
                <h4>Messenger</h4>
                <a href="#">Meymon.bakhtawer</a>
               </article>
               <article className="contact__option">
                <AiOutlineWhatsApp className="contact__option-icon"/>
                <h4>WhatsApp</h4>
                <a href="https://wa.me/+923133247286">Send us a Message</a>
               </article>
             </div>
              {/* END OF CONTACT OPTIONS */ }
             <form action="" ref={form} onSubmit={sendEmail}>
              <input type="text" name="name" placeholder="Your Full Name" required />
              <input type="email" name="email" placeholder="Enter Your Email" required />
              <textarea name=""  rows="7" placeholder="Your Message" required></textarea>
              <button type="submit" className="btn btn-primary">Send Message</button>
             </form>
            </div>
        </section>      
    )
}

export default Contact;