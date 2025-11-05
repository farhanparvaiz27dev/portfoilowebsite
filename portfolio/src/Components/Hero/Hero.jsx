import React from 'react'
import './Hero.css'
import heroImage from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Hero = () => {
  return (
    <div id='home' className='hero'> 
    <img src={heroImage} alt="" />
    <h1><span>I'm Farhan Parvaiz, </span>Frontend developer based in Pakistan.</h1>
    <p>Enthusiastic and detail-oriented Software Developer with hands-on experience in Python and C++ projects, including AI assistants, automation tools, and management systems.</p>
    <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">Connect With Me </AnchorLink>
          </div>
        <div className="hero-resume">My resume</div>
    </div>
    </div>
  )
}

export default Hero