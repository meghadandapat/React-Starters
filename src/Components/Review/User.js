import React, { useState } from "react";
import reviews from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const User = () => {
  const [index, setIndex] = useState(0);
    const { name, job, image, text } = reviews[index];
    const handleNext= () => {
        // setIndex(index+1) do not mutate the state direcly
        //use the functional approach to acces current state
        setIndex((index) => {
            let newIndex = index + 1;
            return newIndex
        })
    }
    const handlePrev = () => {
        // setIndex(index-1) do not mutate the state direcly
        setIndex((index) => {
            let newIndex = index - 1;
            return newIndex
        })
    }
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={handlePrev}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={handleNext}>
          <FaChevronRight></FaChevronRight>
        </button>
      </div>
     
    </article>
  );
};

export default User;
