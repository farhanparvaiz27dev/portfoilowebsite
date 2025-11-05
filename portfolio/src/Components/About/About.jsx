import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img1.jpg'
const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" srcset="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Hello! I'm Farhan Parvaiz, a passionate frontend developer based in Pakistan. I specialize in creating visually appealing and user-friendly web applications using modern technologies like React.js. With a keen eye for design and a commitment to writing clean, efficient code, I strive to deliver exceptional digital experiences that engage and inspire users.</p>
                        <p> I develop responsive and interactive websites that provide seamless user experiences across various devices. My expertise includes working with modern frontend frameworks like React.js to build dynamic web applications. I am dedicated to writing clean, efficient code and continuously improving my skills to stay updated with the latest industry trends.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p> <hr style={{width: '90%'}} /></div>  
                        <div className="about-skill"><p>java script</p> <hr style={{width: '70%'}} /></div>  
                        <div className="about-skill"><p>Bootstrap</p> <hr style={{width: '90%'}} /></div>  
                        <div className="about-skill"><p>React js</p> <hr style={{width: '80%'}} /></div>  
                        <div className="about-skill"><p>Node js</p> <hr style={{width: '70%'}} /></div>  
                    </div>
                </div>
            </div>
            <div className="about-achievements"> 
                <div className="about-achievement">
                    <h1>2+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>50+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>Happy CLIENTS</p>
                </div>
            </div>
        </div>
    )
}

export default About