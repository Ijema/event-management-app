import React, { useState } from "react";
import PortfolioData from "../Data/Portfolio-data"

import '../Styles/Portfolio.css'


const Portfolio = () => {
  const [items, setItems] = useState(PortfolioData);
  const [active, setActive] = useState(null);
  
  const filterItem = (categItem) => {
    const updateItems = PortfolioData.filter((curElem) => {
      return curElem.category === categItem;
    });

    setItems(updateItems);
  };

  const handleClick = (index) => {
    setActive(index); // Set active state to the index of the clicked category
  };

  return (
    <>
      <h2 className="text-2xl font-bold mx-3 pt-5 pb-3">Portfolio</h2>
      <div className="container">
        <ul className="flex nav nav-pills justify-center">
          <li className="pr-3">
          <a
              className={active === 1 ? "nav-menu-link activates" : "nav-menu-link"}
              href="javascrip:0;"
              onClick={() => {
                filterItem("Wedding");
                handleClick(1); // Pass the index of the clicked category
              }}
            >
              Wedding
            </a>
          </li>
          <li className="nav-item pr-3">
            <a
              className={active === 2 ? "nav-menu-link activates" : "nav-menu-link"}
              href="javascrip:0;"
              onClick={() => {
                filterItem("Concert");
                handleClick(2);
              }}
            >
              Concert
            </a>
          </li>
          <li className="nav-item pr-3">
            <a
              className={active === 3 ? "nav-menu-link activates" : "nav-menu-link"}
              href="javascrip:0;"
              onClick={() => {
                filterItem("Meeting")
                handleClick(3)
              }}
            >
              Meeting
            </a>
          </li>
          <li className="nav-item pr-3">
            <a
              className={active === 4 ? "nav-menu-link activates" : "nav-menu-link"}
              href="javascrip:0;"
              onClick={() => {
                filterItem("Anniversary")
                handleClick(4)
              }}
            >
              Anniversary
            </a>
          </li>
          <li className="nav-item pr-3">
            <a
              className={active === 5 ? "nav-menu-link activates" : "nav-menu-link"}
              href="javascrip:0;"
              onClick={() => {
                setItems(PortfolioData)
                handleClick(5)
              }}
            >
              All
            </a>
          </li>
        </ul>
      </div>

      <div className="container-fluid mt-4">
        <div className="row">
          {items.map((elem) => {
            const { id, name, img } = elem;

            return (
              <div className="col-sm-4" id={id}>
                <div class="card mb-3">
                  {/* <div class="row no-gutters"> */}
                    {/* <div class="col-md-5"> */}
                      <img class="img-fluid" src={img} alt={name} />
                    {/* </div> */}
                  {/* </div> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
