import React, { useState } from "react";
import people from "../Data/Reviews-data";

import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Reviews = () => {
    const [index, setIndex] = useState(0);
    const { img, name, desc } = people[index];

    const checkNumber = (number) => {
        if (number > people.length - 1) {
            return 0;
        }
        if (number < 0) {
            return people.length - 1;
        }
        return number;
    };

    const prevReview = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        });
    };

    const nextReview = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        });
    };

    return (
        <>
            <h2 className="text-2xl font-bold mx-3 pt-5 pb-3">Reviews</h2>
            <div className="relative flex flex-col justify-center items-center">
                <div className="rounded-full bg-green-500 w-[200px] h-[200px] mt-4">
                    <img src={img} alt="review image" className="w-[190px] h-[200px] rounded-full" />
                    <span className="mt-[-40px]"> 
                        {<FormatQuoteIcon style= {{ fontSize: 30, backgroundColor: "green", borderRadius: 50, color: "white", marginTop: -320, marginLeft: -10, width: 50, height: 50 }} />}
                    </span>
                </div>
                <p className="my-2 text-xl font-bold">{name}</p>
                <p className="w-[50%] text-justify">{desc}</p>
                <div className="button-container">
                    <button className="prev-btn" onClick={prevReview}>
                        {<ArrowBackIosIcon />}
                    </button>
                    <button className="next-btn" onClick={nextReview}>
                        {<ArrowForwardIosIcon />}
                    </button>{" "}
                    <br />
                </div>
            </div>
        </>
    );
};

export default Reviews;
