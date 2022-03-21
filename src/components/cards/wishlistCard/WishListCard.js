import React from "react";
import { useCart } from "../../../context/cart-context";
import "./wishlistcard.css";
const WishListCard = (props) => {
  const { cartDispatch } = useCart();
  const token = localStorage.getItem("token");
  return (
    <>
      <div className="wishlist-card-cont">
        <div className="wishlist-card-item">
          <div className="wish-list-img-sec">
            <img
              src="images/cross.png"
              className="wishlist-cancel"
              alt="close"
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
            {props.item.stock ? <p>In Stock</p> : <p>Out of Stock</p>}
          </span>
          <span
            onClick={() =>
              token
                ? cartDispatch({
                    type: "ADD_TO_CART",
                    payload: props.item,
                  })
                : alert("TOKEN UNAVILABLE")
            }
          >
            Add to cart
          </span>
        </div>
      </div>
    </>
  );
};

export default WishListCard;
