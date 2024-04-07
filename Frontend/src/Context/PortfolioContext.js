import React, { createContext, useEffect, useState } from 'react'

export const PortfolioContext = createContext(null)

const PortfolioContextProvider = (props) => {

    const [all_portfolio, setAll_Portfolio] = useState([])

    // useEffect

    const contextValue ={
        all_portfolio,
    }

  return (
    <PortfolioContextProvider value={contextValue}>
        {props.children}
    </PortfolioContextProvider>
  )
}

export default PortfolioContextProvider