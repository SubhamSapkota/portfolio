import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'
const Footer = () => {
  return (
    <div className='footer'>
       <img src={Wave} alt="" style={{ width: '100%'}} />
       <div className="f-content">
        <span>shuvam760@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/lsubhaml/">
          <Insta color='white' size='3rem'/>
          </a>

          <a href="https://www.facebook.com/llshuvamll">
          <Facebook color='white' size='3rem'/>
          </a>
          <a href="https://github.com/subhamsapkota">
          <Github color='white' size='3rem'/>
          </a>
          
          <a href="https://www.linkedin.com/in/subham-sapkota-92a298265/">
          <Linkedin color='white' size='3rem'/>
          </a>
          
        </div>
       </div>
    </div>
  )
}

export default Footer
