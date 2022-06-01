import React, { useState } from "react";
import { useCart } from "../../../context/cart-context";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./cartcard.css";
import { DeleteListService } from "../../../services/DeleteListService";
import IncDecService from "../../../services/IncDecService";
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

  const deleteToCart = async (product) => {
    const response = await DeleteListService('cart',product._id,token)
    setCartProduct(response.data.cart)
    itemDltNotification()
  }

  const incItem = async(product) => {
    const response = await IncDecService('increment',product._id,token)
    setQunatity(response.data.cart.find((val) => val._id === product._id).qty);
    setCartProduct(response.data.cart)
  }
  const decItem = async(product) => {
    const response = await IncDecService('decrement',product._id,token)
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
            <img src="images/cross.png" className="Cart-cancel" alt="close" onClick={() => deleteToCart(props.item)} />
            <img
              src={props.item.imgOne}
              className="Cart-img"
              alt="item"
            />
          </div>
          <span>{props.item.title}</span>
        </div>
        <div className="Cart-card-price">
          <span>$ {props.item.price}</span>
          <div className="item-quantity">
          <span onClick={() => {quantity <= 1?deleteToCart(props.item): decItem(props.item)} }>-</span>
            {quantity}
            <span onClick={() => incItem(props.item) }>+</span>
            
          </div>
          {quantity > -1 ? <span>$ {props.item.price * quantity}.00</span> : <div className="negQuantity">Quantity Can't be less than 0</div> && setQunatity(0)}
        </div>
      </div>
    </>
  );
};

export default CartCard;
