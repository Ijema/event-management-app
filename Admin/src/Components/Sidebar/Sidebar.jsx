import React from 'react'
import './Sidebar.css'
import {Link} from 'react-router-dom'
import add_product_icon from '../../assets/Product_Cart.svg'
import list_product_icon from '../../assets/Product_list_icon.svg'
import user_icon from '../../assets/user icon.png'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Link to={'/addportfolio'} style={{textDecoration: "none"}}>
            <div className="sidebar-item">
                <img src={add_product_icon} alt="" />
                <p>Add Portfolio</p>
            </div>
        </Link>
        <Link to={'/listportfolio'} style={{textDecoration: "none"}}>
            <div className="sidebar-item">
                <img src={list_product_icon} alt="" />
                <p>Portfolio List</p>
            </div>
        </Link>
        <Link to={'/listbookings'} style={{textDecoration: "none"}}>
            <div className="sidebar-item">
                <img src={list_product_icon} alt="" />
                <p>Booking List</p>
            </div>
        </Link>
        <Link to={'/listusers'} style={{textDecoration: "none"}}>
            <div className="sidebar-item">
                <img src={user_icon} alt="" className='user-img'/>
                <p>Users</p>
            </div>
        </Link>
    </div>
  )
}

export default Sidebar