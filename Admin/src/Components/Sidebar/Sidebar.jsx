import React from 'react'
import './Sidebar.css'
import {Link} from 'react-router-dom'
import add_portfolio_icon from '../../assets/Product_Cart.svg'
import list_portfolio_icon from '../../assets/Product_list_icon.svg'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Link to={'/addportfolio'} style={{textDecoration: "none"}}>
            <div className="sidebar-item">
                <img src={add_portfolio_icon} alt="" />
                <p>Add Portfolio</p>
            </div>
        </Link>
        <Link to={'/listportfolio'} style={{textDecoration: "none"}}>
            <div className="sidebar-item">
                <img src={list_portfolio_icon} alt="" />
                <p>Portfolio List</p>
            </div>
        </Link>
    </div>
  )
}

export default Sidebar