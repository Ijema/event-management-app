import React from 'react'
import './Admin.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import {Routes, Route} from 'react-router-dom'
import AddProduct from '../../Components/AddProduct/AddProduct.jsx'
// import ListProduct from '../../Components/ListProduct/ListProduct'
import ListPortfolio from '../../Components/ListPortfolio/ListPortfolio.jsx'
import ListBooking from '../../Components/ListBooking/ListBooking.jsx'
import ListUsers from '../../Components/ListUsers/ListUsers.jsx'
import AddPortfolio from '../../Components/AddPortfolio/AddPortfolio.jsx'

const Admin = () => {
  return (
    <div className='admin'>
        <Sidebar />
        <Routes>
            <Route path='/addportfolio' element={<AddPortfolio />}/>
            <Route path='/listportfolio' element={<ListPortfolio />}/>
            <Route path='/listbookings' element={<ListBooking />}/>
            <Route path='/listusers' element={<ListUsers />}/>
        </Routes>
    </div>
  )
}

export default Admin