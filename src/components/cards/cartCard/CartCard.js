import React, { useState } from "react";
import { useCart } from "../../../context/cart-context";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./cartcard.css";
const CartCard = (props) => {
  const [quantity, setQunatity] = useState(1);
  const { setCartProduct } = useCart()
  const token = localStorage.getItem("token");
  const itemDltNotification = () => toast.success('🦄 Item Deleted', {
    position: "top-right",
    autoClose: 600,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  const deleteToWishlist = async (product) => {
    const response = await axios.delete(`/api/user/cart/${product.id}`, { headers: { authorization: token } })
    setCartProduct(response.data.cart)
    itemDltNotification()
  }

  return (
    <>
      <div className="Cart-card-cont">
        <ToastContainer
          position="top-right"
          autoClose={600}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
        />
        <div className="Cart-card-item">
          <div className="wish-list-img-sec">
            <img src="images/cross.png" className="Cart-cancel" alt="close" onClick={() => deleteToWishlist(props)} />
            <img
              src="images/card/women-2.jpeg"
              className="Cart-img"
              alt="item"
            />
          </div>
          <span>{props.itemName}</span>
        </div>
        <div className="Cart-card-price">
          <span>₹ {props.price}</span>
          <input
            type="number"
            onChange={(e) => setQunatity(e.target.value) || props.calAmount(props.price * quantity)}
            className="item-quantity"
            value={quantity}
          />
          {quantity > -1 ? <span>₹{props.price * quantity}.00</span> : <div className="negQuantity">Quantity Can't be less than 0</div>}
        </div>
      </div>
    </>
  );
};

export default CartCard;
