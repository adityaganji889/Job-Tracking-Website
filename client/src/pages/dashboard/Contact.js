import React from 'react'
import { FaInstagram, FaLinkedin, FaGithub, FaPhone, FaMailBulk } from 'react-icons/fa';
import { ImPhone, ImMail } from 'react-icons/im'

const Contact = () => {
  return (
    <div>
        <div className='form'>
        {/* info */}
        <div className='info'>
          <h1>
            Contact<span> Us</span>:
          </h1>
          <p>
          You can reach us out at :<br/><br/>
                    <ImMail/> adityaganji889@gmail.com, adityaganji89@gmail.com<br/>
                    <ImPhone/> +91-9082195422,9653124526,8369232660<br/>
                    <FaInstagram/>
                    <a href="https://www.instagram.com/adityaganji889/" target="_blank" style={{color:'black'}}>
                     <span>  Instagram</span>
                  </a><br/>
                  <FaLinkedin/>
                    <a href="https://www.linkedin.com/in/aditya-ganji-40725b1b2/" target="_blank" style={{color:'black'}}>
                     <span>  Linkedin</span>
                  </a><br/>
                  <FaGithub/>
                    <a href="https://github.com/adityaganji889" target="_blank" style={{color:'black'}}>
                     <span>  Github</span>
                  </a><br/>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact;