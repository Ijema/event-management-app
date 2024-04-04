import React from "react";
import { Link } from "react-router-dom";
import Logo from '../Components/Assets/Logo.png'
import "../Styles/Header.css"

const Header = () => {
    return(
        <div class="header">
            <div class="header1">
                <img className='w-[80px] h-[50px]' src={Logo} alt="" />
                <p>info.eventpop@gmail.com</p>
                <p>social Icons</p>
                <Link to= '/signuplogin'><p>Login/Signup</p></Link>
            </div>
            <div class="menu">
                <div></div>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><select>
                                <option>Services</option>
                                <option>Weddings</option>
                                <option>Concert</option>
                                <option>Meetings</option>
                                <option>Conferences</option>
                            </select>
                        </li>
                        <li><Link to="/bookings">Bookings</Link></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </nav>
            </div>
            
        </div>
    )
}

export default Header;