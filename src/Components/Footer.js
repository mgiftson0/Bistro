import React from 'react'
import Logo from '../Assets/Logo.svg';
import {BsTwitter} from 'react-icons/bs';
import {SiLinkedin} from 'react-icons/si';
import { BsYoutube } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer-wrapper'>
      <div className="footer-section-one">
        <div className="footer-logo-container">
            <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
            <BsTwitter />
            <SiLinkedin />
            <BsYoutube />
            <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
            <span>Quality</span>
            <span>Help</span>
            <span>Share</span>
            <span>Careers</span>
            <span>Menu</span>
            <span>Work</span>
        </div>
        <div className="footer-section-columns">
            <span>(233)55-876-4881</span>
            <span>Bistro@food.com</span>
            <span>press@Bistrofood.com</span>
            <span>contact@Bistrofood.com</span>
        </div>
        <div className="footer-section-columns">
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
            <span>Copyright@Bistro 2024</span>
        </div>
      </div>
    </div>
  )
}

export default Footer;
