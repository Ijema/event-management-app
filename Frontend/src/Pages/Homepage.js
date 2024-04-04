import React from "react";
import OurSevices from "../Components/Our-services";
import Header from "../Components/Header";
import Portfolio from "../Components/Portfolio";
import Reviews from "../Components/reviews";
import Hero from "../Components/Hero";

const Homepage = () => {
    return(
        <div className="overflow-hidden">
            <div className="px-2">
                <Hero />
                <OurSevices />
                <Portfolio />
                <Reviews />
            </div>
        </div>
    )
}


export default Homepage