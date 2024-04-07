import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from '../Assets/Logo.png'
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
                <img className='w-[80px] h-[50px]' src={Logo} alt="" />
                <p>info.eventpop@gmail.com</p>
                <p>social Icons</p>
                {localStorage.getItem('auth-token')
                    ? <button onClick={() =>{localStorage.removeItem('auth-token'); window.location.replace('/')}}>Logout</button>
                    : <Link to='/login' className='link'><button>Login</button></Link>
                }
            </div>
            <div class="menu">
                <div></div>
                <nav>
                    <ul>
                        <li onClick={()=>{SetMenu('Home')}}><Link to='/' className={menu==="home" ? "link" : <></>}>Home</Link></li>
                        <li><a href="#">About Us</a></li>
                        <li><select value={selectedOption} onChange={handleChange}>
                                <option value=''>Portfolio</option>
                                <option value='/wedding'>Weddings</option>
                                <option value='/concert'>Concert</option>
                                <option value='/birthday'>Birthday</option>
                                <option value='/conference'>Conferences</option>
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