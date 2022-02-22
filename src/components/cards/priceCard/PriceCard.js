import React from 'react'
import "./pricecard.css"
const RatedCard = (props) => {
  return (
    <>
        <div className="price-card-cont">
            <div className="price-card-img">
                <img src={props.imgSrc} alt="card" />
            </div>
            <div className="rated-card-content">
                <div className="card-content-type">Clothing</div>
                <div className="card-content-name-like">
                    <div className="card-content-name">{props.name}</div>
                    <div className="card-like"> <img src="images/like.png" alt="like" /></div>
                </div>
                <div className="card-animated-btn">
                ₹ 1500.00
                </div>
            </div>
        </div>
    </>
  )
}

export default RatedCard