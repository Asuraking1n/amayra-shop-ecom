import React, { useState } from "react";
import { useCart } from "../../../context/cart-context";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./cartcard.css";
const CartCard = (props) => {
  const [quantity, setQunatity] = useState(1);
  const { setCartProduct} = useCart()
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
    const response = await axios.delete(`/api/user/cart/${product._id}`, { headers: { authorization: token } })
    setCartProduct(response.data.cart)
    itemDltNotification()
  }

  const incItem = async (product) => {
    const response = await axios.post(`/api/user/cart/${product._id}`, { action: { type: 'increment' } }, { headers: { authorization: token } })
    setQunatity(response.data.cart.find((val) => val._id === product._id).qty);
    setCartProduct(response.data.cart)

  }

  const decItem = async (product) => {
    const response = await axios.post(`/api/user/cart/${product._id}`, { action: { type: 'decrement' } }, { headers: { authorization: token } })
    setQunatity(response.data.cart.find((val) => val._id === product._id).qty);
    setCartProduct(response.data.cart)
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
            <img src="images/cross.png" className="Cart-cancel" alt="close" onClick={() => deleteToWishlist(props.item)} />
            <img
              src={props.item.imgOne}
              className="Cart-img"
              alt="item"
            />
          </div>
          <span>{props.item.title}</span>
        </div>
        <div className="Cart-card-price">
          <span>₹ {props.item.price}</span>
          <div className="item-quantity">
            <span onClick={() => incItem(props.item) }>+</span>
            {quantity}
            <span onClick={() => decItem(props.item) }>-</span>
          </div>
          {quantity > -1 ? <span>₹{props.item.price * quantity}.00</span> : <div className="negQuantity">Quantity Can't be less than 0</div>}
        </div>
      </div>
    </>
  );
};

export default CartCard;
