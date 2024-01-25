import React, { useRef } from 'react'
import './contact.css'
// import walmart from '../../assets/walmart.png'
import adobe from '../../assets/adobe.png'
import microsoft from '../../assets/microsoft.png'
// import facebook from '../../assets/facebook.png'
import gitH from '../../assets/git.png'
import vscode from '../../assets/vscode.png'
import twitterIcon from '../../assets/twitter.png'
import facebookIcon from '../../assets/facebook-icon.png'
import instagramIcon from '../../assets/instagram.png'
import youTubeIcon from '../../assets/youtube.png'
import emailjs from '@emailjs/browser';


function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fuwj3i4', 'template_ow2dlhg', form.current, '2dAzqvXdgNPPZcvCQ')
      .then((result) => {
        e.target.reset()
        alert('Email Sent!')
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contactPage'>
        <div id="clients">
        <h1 className="contactPageTitle">
            Software I use
        </h1>
        <p className="clientDesc">
        These are some of the software I use on a day to day basis.
        </p>
        <img src={adobe} alt="software" className="clientImg" />
        <img src={microsoft} alt="software" className="clientImg" />
        <img src={vscode} alt="software" className="clientImg" />
        <img src={gitH} alt="software" className="clientImg" />
        </div>
        <div id="contact">
          <div className="contactPageTitle">
            Contact Me
          </div>
          <span className="contactDesc">Please fill up the form below so we can talk opportunities.</span>
          <form className='contactForm' ref={form} onSubmit={sendEmail}>
            <input type="text" className='name' name='from_name' placeholder='Your Name'/>
            <input type="email" className="email" name='from_email' placeholder='Your Email'/>
            <textarea name="message" className="msg" cols="30" rows="10">Message</textarea>
            <button type="submit" value="send" className='submitBtn'>Submit</button>
          </form>
        </div>
        <div className="links">
          <img src={facebookIcon} alt="linkImage" className="link" />
          <img src={twitterIcon} alt="linkImage" className="link" />
          <img src={instagramIcon} alt="linkImage" className="link" />
          <img src={youTubeIcon} alt="linkImage" className="link" />
        </div>
    </section>
  )
}

export default Contact
