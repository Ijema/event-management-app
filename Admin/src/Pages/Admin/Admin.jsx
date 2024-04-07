import React from 'react'
import './Admin.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import {Routes, Route} from 'react-router-dom'
import ListPortfolio from '../../Components/ListPortfolio/ListPortfolio'
import AddPortfolio from '../../Components/AddPortfolio/AddPortfolio'

const Admin = () => {
  return (
    <div className='admin'>
        <Sidebar />
        <Routes>
            <Route path='/addportfolio' element={<AddPortfolio />}/>
            <Route path='/listportfolio' element={<ListPortfolio />}/>
        </Routes>
    </div>
  )
}

export default Admin