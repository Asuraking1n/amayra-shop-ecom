import React from "react";
import { useCart } from "../../../context/cart-context";
import "./wishlistcard.css";
import { useWishlist } from "../../../context/wishlist-context";
import { ToastContainer, toast } from 'react-toastify';
import addToListService from "../../../services/addToListService";
import 'react-toastify/dist/ReactToastify.css';
import { debounce } from "lodash";
import { DeleteListService } from "../../../services/DeleteListService";
const WishListCard = (props) => {
  const {cartProduct, setCartProduct } = useCart();
  const token = localStorage.getItem("token");
  const {setWishListProduct} = useWishlist()

const addToCartHandler = async (product) => {
  const response = await addToListService('cart',product,token)
  setCartProduct(response.data.cart)
}
const deleteToWishlist = async (product) => {
  const response = await await DeleteListService('wishlist',product._id,token)
  setWishListProduct(response.data.wishlist)
  itemDltNotification()
  
}

const itemDltNotification = () => toast.success('🦄 Item Deleted', {
  position: "top-right",
  autoClose: 600,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  });

  const debounceCartData = debounce(()=>{
    token&& addToCartHandler(props.item)
},250)

  return (
    <>
      <div className="wishlist-card-cont">
      <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
        />
        <div className="wishlist-card-item">
          <div className="wish-list-img-sec">
            <img
              src="images/cross.png"
              className="wishlist-cancel"
              alt="close"
              onClick={()=>deleteToWishlist(props.item)}
            />
            <img
              src={props.item.imgOne}
              className="wishlist-img"
              alt="item"
            />
          </div>
          <span>{props.item.title}</span>
        </div>
        <div className="wishlist-card-price">
          <span>$ {props.item.price}</span>
          <span>
            {props.item.stock ? <p style={{color:'green'}}>In Stock</p> : <p style={{color:'red'}}>Out of Stock</p>}
          </span>
          {
            props.item.stock?
            !cartProduct.some((data) => data._id === props.item._id)?
            <span
            onClick={debounceCartData }
          >
            Add to cart
          </span>:
          <span>Added in Cart</span>
          :
          <span>Out Of Stock</span>
          }
          
        </div>
      </div>
    </>
  );
};

export default WishListCard;
