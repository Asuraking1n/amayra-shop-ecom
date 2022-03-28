import React from 'react'
import './wishlist.css'
import Insta from '../instagram/Insta'
import Footer from '../footer/Footer'
import WishListCard from '../cards/wishlistCard/WishListCard'
import Filterdata from '../../context/Filterdata'
const WishList = () => {
  let wishlistData = JSON.parse(localStorage.getItem('wishlistData'))
  wishlistData = Filterdata(wishlistData)
  return (
    <>
        <div className="wishlist-sec-cont">
            <div className="wishlist-sec-heading">
            Wishlist
            </div>
            <div className="wishlist-product-heading">
                product name
                <div className="wishlist-heading-second">
                    <span>unit price</span>
                    <span>stock status</span>
                </div>
            </div>
            <div className="wishcard-cont">
            {!wishlistData?<h1>WishList is Empty</h1>:
            wishlistData.map((val,id)=>{
              return(
                <WishListCard key={id} item={val}/>
              )
            })
            }
            </div>
        </div>
        <Insta/>
        <Footer/>
    </>
  )
}

export default WishList