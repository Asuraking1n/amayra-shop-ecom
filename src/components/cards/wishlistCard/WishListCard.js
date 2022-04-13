import React from "react";
import { useCart } from "../../../context/cart-context";
import axios from "axios";
import "./wishlistcard.css";
import { useWishlist } from "../../../context/wishlist-context";
const WishListCard = (props) => {
  const { setCartProduct } = useCart();
  const token = localStorage.getItem("token");
  const {setWishListProduct} = useWishlist()
  const addToCartHandler = async (product) => {
    const response = await axios.post('/api/user/cart', { product }, { headers: { authorization: token } })
    setCartProduct(response.data.cart)
    
}

const deleteToWishlist = async (product) => {
  const response = await axios.delete(`/api/user/wishlist/${product._id}`,{ headers: { authorization: token } })
  setWishListProduct(response.data.wishlist)
  
}

  return (
    <>
      <div className="wishlist-card-cont">
        <div className="wishlist-card-item">
          <div className="wish-list-img-sec">
            <img
              src="images/cross.png"
              className="wishlist-cancel"
              alt="close"
              onClick={()=>deleteToWishlist(props.item)}
            />
            <img
              src="images/card/women-2.jpeg"
              className="wishlist-img"
              alt="item"
            />
          </div>
          <span>{props.item.title}</span>
        </div>
        <div className="wishlist-card-price">
          <span>₹ {props.item.price}</span>
          <span>
            {props.item.stock ? <p style={{color:'green'}}>In Stock</p> : <p style={{color:'red'}}>Out of Stock</p>}
          </span>
          <span
            onClick={() => addToCartHandler(props.item)}
          >
            Add to cart
          </span>
        </div>
      </div>
    </>
  );
};

export default WishListCard;
