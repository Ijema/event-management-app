import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from '../Assets/Header-Logo.png'
import facebook from '../Assets/facebook-icon.png'
import instagram from '../Assets/instagram-icon.png'
import youtube from '../Assets/youtube-icon.png'
import './Header.css'

const Header = () => {

    const [selectedOption, setSelectedOption] = useState('')
    const [menu, SetMenu] = useState('Home')
    const navigate = useNavigate()

    const handleChange = (e) =>{
        const selectedValue = e.target.value
        setSelectedOption(selectedValue)
        navigate(selectedValue) //Redirect to the selected link
    }

    return(
        <div class="header">
            <div class="header-top">
                <div className="header-logo">
                    <img src={Logo} alt="" />
                    <p>EVENT POP</p>
                </div>
                <p>info.eventpop@gmail.com</p>
                <div className="header-social-icons">
                    <img src={facebook} alt="" />
                    <img src={instagram} alt="" />
                    <img src={youtube} alt="" />
                </div>
                {localStorage.getItem('auth-token')
                    ? <button onClick={() =>{localStorage.removeItem('auth-token'); window.location.replace('/')}}>Logout</button>
                    : <Link to='/login' className='link'><button>Login</button></Link>
                }
            </div>
            <div class="header-menu">
                <div></div>
                <nav>
                    <ul>
                        <li onClick={()=>{SetMenu('Home')}}><Link to='/' className={menu==="home" ? "link" : <></>}>Home</Link></li>
                        <li><Link to="/about-us">About Us</Link></li>
                        <li><select value={selectedOption} onChange={handleChange}>
                                <option value=''>Portfolio</option>
                                <option value='/wedding'>Weddings</option>
                                <option value='/concert'>Concert</option>
                                <option value='/birthday'>Birthday</option>
                                <option value='/conference'>Conference</option>
                            </select>
                        </li>
                        <li><Link to="/bookings">Bookings</Link></li>
                        <li><Link to="/about-us">Blog</Link></li>
                        <li><Link to="/about-us">Contact Us</Link></li>
                    </ul>
                </nav>
            </div>
            
        </div>
    )
}

export default Header;