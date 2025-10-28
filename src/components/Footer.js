import React from 'react';
import './Footer.css'
import logo from '../images/Logo.svg'
import social from '../images/Social Media Icons.svg'
import location from'../images/location.svg'
import call from '../images/call-calling.svg'
import sms from '../images/sms (1).svg'
import arrow from '../images/arrow-right (1).svg'
function Footer(){
    return(
    <div className='Main-footer'>
        <div className='footer1'>
            <p>Get a surprise  discount by registering !</p>
            <p>Join our email subscription now to get updates on promotions and coupons.</p>
            <div className='footer11'>
            <input type="text" placeholder='Enter mobile number'/>
            <button >Submit</button>
            </div>
           
            
        </div>
        <div className='footer2 text-start'>
            <div className='footer3'> 
                <p><img  src={logo} alt={logo}/></p>
                <p>Empowering farmers with quality agricultural products and expert knowledge since 1987.</p>
                <img src={social} alt={social}/>
            </div>
            <div className="footer4 ">
                <p >Products</p>
                <ul >
                    <li ><img src={arrow} alt={arrow} className="me-1" />Animal Nutrition</li>
                    <li><img src={arrow} alt={arrow} className="me-1"/>Crop Care</li>
                    <li><img src={arrow} alt={arrow} className="me-1"/>Fertilizer</li>
                    <li><img src={arrow} alt={arrow} className="me-1"/>Nano Products</li>
                    <li><img src={arrow} alt={arrow} className="me-1"/>Farming Equipment</li>
                    <li><img src={arrow} alt={arrow} className="me-1"/>Specialty Plant Nutrirents</li>
                </ul>
            </div>
            
            <div className="footer5 ">
            <p>Quick Links</p>
            <ul className="footer8">
                <li>Home</li>
                <li>About US</li>
                <li>Corporate Website</li>
                <li>Stores</li>
                <li>Blog</li>
                <li>FAQ</li>
                <li>Contact Us</li>
            </ul>
            </div>
            <div className="footer6 ">
                <p>Our Services</p>
                <ul>
                    <li>Crop Doctor Consultation</li>
                    <li>Products Enquiry</li>
                    <li>Drone Spraying</li>
                    <li>Satellite based soil Insights</li>
                </ul>
                </div>
            <div className="footer7 ">
            <p>Contact US</p>
            <ul>
                <li >
                <img src={location} alt="location"className='contact-icon' />Prestige Ferozes, 3rd<br/>
                    Floor, No.74, Cunningham Road,<br/>
                    Bengaluru - 560052
                </li>
                <li> <img src={call} alt="calling"className='contact-icon'/>Call: 0987654321</li>
                <li><img src={sms} alt="sms"className='contact-icon'/>Email : support@farmsapp.in</li>
            </ul>
            </div>
        </div>
        <div className='bottom-footer'>
            <p>© 2025 Farmsapp. All rights reserved.</p>
            <div className='bottom-footer1'>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Shipping Policy</p>
            </div>
            </div>
    </div>
)
}

export default Footer;