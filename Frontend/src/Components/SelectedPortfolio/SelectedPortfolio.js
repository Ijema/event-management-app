import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './SelectedPortfolio.css'
import PortfolioCards from '../PortfolioCards/PortfolioCards'

const SelectedPortfolio = ({ category }) => {
    const [selectedPortfolio, setSelectedPortfolio] = useState([])

    useEffect(() => {
        fetch(`http://localhost:4000/portfolio/${category}`)
        .then((response)=>response.json())
        .then((data)=>setSelectedPortfolio(data))
      },[category])

    // useEffect(() => {
    //     const fetchSelectedPortfolio = async () =>{
    //         try {
    //             const response = await axios.get('http://localhost:4000/portfolio/${category}')
    //             setSelectedPortfolio(response.data)
    //         } catch (error) {
    //             console.log('Error Fetching Portfolio', error)
    //         }
    //     }
    //     fetchSelectedPortfolio()
    // }, [category])

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