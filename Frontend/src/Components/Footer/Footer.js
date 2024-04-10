import React from "react";
import './Footer.css'
import facebook from '../Assets/facebook-icon.png'
import instagram from '../Assets/instagram-icon.png'
import youtube from '../Assets/youtube-icon.png'

const Footer = () => {
    return(
        <div className="footer">
            <div className="container row footer-container">
                <div className="footer-div">
                    <h3 className="footer-header">Event Pop</h3>
                    <p>A company you can trust with your special moments and you wont regret it.
                        We are the best when it comes to putting smiles on the faces of our clients.
                    </p>
                </div>
                <div className="footer-div">
                    <h3 className="footer-header">Information</h3>
                    <ul>
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                        <li><a>services</a></li>
                        <li><a>Terms and Condition</a></li>
                        <li><a>Become a partner</a></li>
                        <li><a>Privacy and Policy</a></li>
                    </ul>
                </div>
                <div className="footer-div">
                    <h3 className="footer-header">Customer Support</h3>
                    <ul>
                        <li><a>FAQ</a></li>
                        <li><a>Payment Option</a></li>
                        <li><a>Booking Tips</a></li>
                        <li><a>Become a partner</a></li>
                        <li><a>Contact Us</a></li>
                    </ul>
                </div>
                <div className="footer-div" >
                    <h3 className="footer-header last-header">I have a question</h3>
                    <ul>
                        <li><a>No.1 Kand street, Awka, Anambra, Nigeria</a></li>
                        <li><a>+2393939939393</a></li>
                        <li><a>info@eventpop.com</a></li>
                        <div className="footer-social-icons">
                            <img src={facebook} alt="" />
                            <img src={instagram} alt="" />
                            <img src={youtube} alt="" />
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;