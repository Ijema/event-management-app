import React from 'react'
import './ListPortfolio.css'
import { useState } from 'react'
import { useEffect } from 'react'
import cross_icon from '../../assets/cross_icon.png'
import { removePortfolioRoute, displayAllPortfolioRoute } from '../../Utils/AdminApiRoutes'

const ListPortfolio = () => {

  const[allPortfolio, setAllPortfolio] = useState([])

  const fetchInfo = async () =>{
    await fetch(displayAllPortfolioRoute)
    .then((res) =>res.json())
    .then((data) =>{setAllPortfolio(data)})
  }

  // Call fetchInfo function when the page load
  useEffect(() => {
    fetchInfo()
  }, [])

  const removeportfolio = async (id) =>{
    await fetch(removePortfolioRoute, {
      method: "POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({id:id})
    })
    await fetchInfo()
  }


  return (
    <div className='list-portfolio'>
      <h1>All Portfolio List</h1>
      <div className="listportfolio-format-main">
        <p>Portfolios</p>
        <p>Title</p>
        <p>Location</p>
        <p>Date</p>
        <p>Category</p>
        <p>Delete</p>
      </div>
      <div className="listportfolio-allportfolios">
        <hr />
        {allPortfolio.map((portfolio, index) =>{
          return <><div key={index} className="listportfolio-format-main listportfolio-format">
            <img src={portfolio.image} alt="" className="listportfolio-portfolio-icon" />
            <p>{portfolio.name}</p>
            <p>{portfolio.location}</p>
            <p>{portfolio.date}</p>
            <p>{portfolio.category}</p>
            <img onClick={() => {removeportfolio(portfolio.id)}} src={cross_icon} alt="" className="listportfolio-remove-icon" />
          </div>
          <hr />
          </>
        })}
      </div>
    </div>
  )
}

export default ListPortfolio