import React from 'react'
import './SearchCard.css'
import {Link} from 'react-router-dom'
const SearchCard = (props) => {
  return (
    <>
    <Link to={`/shop/` + props.product._id} className='searchLink'>
        <div className="search-card-cont">
            <div className="search-card-img-sec">
                <img src={props.product.imgOne} alt="profile" />
            </div>
            <div className="search-card-title-sec">
                <span>
                {props.product.title}
                </span>
                ₹ {props.product.price}
            </div>
        </div>
      </Link>
    </>
  )
}

export default SearchCard