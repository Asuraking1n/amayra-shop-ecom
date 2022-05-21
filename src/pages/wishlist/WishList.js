import React from 'react'
import './wishlist.css'
import Footer from '../../components/footer/Footer'
import Insta from '../../components/instagram/Insta'
import Filterdata from '../../context/Filterdata'
import { useWishlist } from '../../context/wishlist-context'
import WishListCard from '../../components/cards/wishlistCard/WishListCard'
const WishList = () => {

  let {wishListProduct} = useWishlist()
  const  wishListProductData = Filterdata(wishListProduct)
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
            {wishListProductData.length < 1?<h1>WishList is Empty</h1>:
            wishListProductData.map((val,id)=>{
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