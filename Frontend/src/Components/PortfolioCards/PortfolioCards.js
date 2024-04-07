import React from 'react'
import './PortfolioCards.css'
import { Link } from 'react-router-dom'

const PortfolioCards = (props) => {
  return (
    <div className='cards'>
        <Link to={`/portfolio/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link> 
    </div>
  )
}

export default PortfolioCards