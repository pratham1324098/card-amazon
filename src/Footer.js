import React from 'react'
import './Footer.css'
import { Link } from "react-router-dom";
import ScrollToTop from 'react-scroll-to-top';
const top = () =>{
  window.scrollTo({
    top:0,
    behavior:"smooth"
  });
};
function Footer() {
  return (
    <>
      <div onClick={top} className="back">
        Back To Top
      </div>
      <div className="footer-container">
        <div>
          <div className="footer-title">Get to Know Us</div>
          <div>About Us</div>
          <div>Careers</div>
          <div>Press Releases</div>
          <div>Amazon Cares</div>
          <div>Gift a Smile</div>
          <div>Amazon Science</div>
        </div>
        <div>
          <div className="footer-title">Connect with Us</div>
          <div className="footer-facebook">
            <a href="https://www.facebook.com">Facebook</a> 
          </div>
          <div className="footer-instagram">
            <a href="https://www.instagram.com">Instagram</a> 
          </div>
          <div className="footer-twitter">
            <a href="https://www.twitter.com">Twitter</a> 
          </div>
        </div>
        <div>
          <div className="footer-title">Make Money with Us</div>
          <div>Sell on Amazon</div>
          <div>Sell under Amazon Accelerator</div>
          <div>Amazon Global Selling</div>
          <div>Become an Affiliate</div>
          <div>Fulfilment by Amazon</div>
          <div>Advertise Your Products</div>
          <div>Amazon Pay on Merchants</div>
        </div>
        <div>
          <div className="footer-title">Let Us Help You</div>
          <div>COVID-19 and Amazon</div>
          <div>Your Account</div>
          <div>Returns Centre</div>
          <div>100% Purchase Protection</div>
          <div>Amazon App Download</div>
          <div>Help</div>
        </div>
      </div>
      <hr />
    </>
  )
}

export default Footer
