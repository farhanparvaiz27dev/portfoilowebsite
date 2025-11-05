import React from 'react'
import './Footer.css'
import footer_logo from '../../Assets/logo2.svg'
import user_icon from '../../Assets/user_icon.svg'
const Footer = () => {
  return (
    <div className='footer'>
     <div className="footer-top">
        <div className="footer-top-left">
            <img src={footer_logo} alt="" />
            <p>I`m Frontend developer from,Pakistan with 2 years of Exprience.</p>
        </div>
        <div className="footer-top-right">
            <div className="footer-eamil-input">
                <img src={user_icon} alt="" />
                <input type="email" name="" placeholder='Enter your email' />
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div>
     </div>
     <hr />
     <div className="footer-bottom">
        <p className='footer-bottom-left'>&copy; 2025 Farhan. All Rights Reserved.</p>
        <div className="footer-bottom-rihgt">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
     </div>
    </div>
  )
}

export default Footer