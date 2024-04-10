import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './SelectedPortfolio.css'
import PortfolioCards from '../PortfolioCards/PortfolioCards'
import { displaySelectedPortfolioRoute } from '../../Utils/ApiRoutes'

const SelectedPortfolio = ({ category }) => {
    const [selectedPortfolio, setSelectedPortfolio] = useState([])

    useEffect(() => {
        fetch(`displaySelectedPortfolioRoute/${category}`)
        .then((response)=>response.json())
        .then((data)=>setSelectedPortfolio(data))
      },[category])


  return (
    <div className='portfolio'>
        <h2>{category} Portfolio</h2>
        <hr />
        <div className='portfolio-items'>
            {selectedPortfolio.map((item, i) =>{
                return <PortfolioCards key={i} id={item.id} image={item.image} />
            })}
        </div>
    </div>
  )
}

export default SelectedPortfolio