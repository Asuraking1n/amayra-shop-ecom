import React from "react";
import "./ratedcard.css"
const StarRating = ({rateCount}) => {
    return (
      <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              id="star-btn"
              className={index <= (rateCount) ? "on" : "off"}
            >
              <span className="star">&#9733;</span>
            </button>
          );
        })}
      </div>
    );
  };

export default StarRating;