import React, { useState } from 'react';
import './Contact.css';
import theme_pattren from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import location_icon from '../../assets/location_icon.svg';

const Contact = () => {
  const [result, setResult] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [popupType, setPopupType] = useState(""); 

  const showPopupMessage = (type, message) => {
    setPopupType(type);
    setResult(message);
    setShowPopup(true);
    
    // Auto hide popup after 4 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    
    const formData = new FormData(event.target);
    formData.append("access_key", "4a5ea62b-3dee-4961-a525-c2f15204c7ea");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      
      if (data.success) {
        showPopupMessage("success", "✅ Message sent successfully! I'll get back to you soon.");
        event.target.reset();
      } else {
        showPopupMessage("error", "❌ Something went wrong. Please try again or contact me directly.");
      }
    } catch (error) {
      showPopupMessage("error", "❌ Network error. Please check your connection and try again.");
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div id='contact' className='contact'>
      {/* Popup Notification */}
      {showPopup && (
        <div className={`popup-overlay ${showPopup ? 'show' : ''}`} onClick={closePopup}>
          <div 
            className={`popup-message ${popupType}`} 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="popup-content">
              <div className="popup-icon">
                {popupType === 'success' ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" 
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 8V12M12 16H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" 
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="popup-text">
                <p>{result}</p>
              </div>
              <button className="popup-close" onClick={closePopup}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <div className="popup-progress">
              <div className="popup-progress-bar"></div>
            </div>
          </div>
        </div>
      )}

      <div className="contact-title">
        <h1>Get In Touch</h1>
        <img src={theme_pattren} alt="" />
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>I'm currently available to take on new projects, so feel free to send me a message about anything you'd like me to work on. You can contact me anytime.</p>
          
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="Email" />
              <p>farhanparvaiz@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="Phone" />
              <p>+92 313 1234567</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="Location" />
              <p>Lahore, Pakistan</p>
            </div>
          </div>
        </div>

        <div className="contact-right">
          <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" placeholder='Your Name' name='name' required />
            
            <label>Your Email</label>
            <input type="email" placeholder='Your Email' name='email' required />
            
            <label>Write your message here</label>
            <textarea name="message" rows="8" placeholder='Enter Your Message' required></textarea>
            
            <button type='submit' className='contact-submit'>
              <span>Send Message</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" 
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;