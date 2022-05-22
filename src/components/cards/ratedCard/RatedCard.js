import React from "react";
import "./ratedcard.css";
import StarRating from "./StarRate";
import { Link,  useNavigate } from "react-router-dom";
import { useCart } from "../../../context/cart-context";
import addToListService from "../../../services/addToListService";
import { useWishlist } from "../../../context/wishlist-context";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const RatedCard = (props) => {
    const navigate = useNavigate()
    const { cartProduct, setCartProduct } = useCart()
    const token = localStorage.getItem("token");
    const isoutOfStock = props.product.stock;
    const { setWishListProduct } = useWishlist()

    const addToCartHandler = async (product) => {
        const response = await addToListService('cart',product,token)
        setCartProduct(response.data.cart)
        itemAddNotification('Item Added to Cart')
    }
    const addTowishListHandler = async (product) => {
        const response = await addToListService('wishlist',product,token)
        setWishListProduct(response.data.wishlist)
        itemAddNotification('Item Added to WishList')
    }

    const itemAddNotification = (msg) => toast.success(`🦄 ${msg}`, {
        position: "top-right",
        autoClose: 600,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });




    return (
        <>

            <div className="rated-card-cont">
                <Link
                    to={`/shop/` + props.product._id}
                >
                    <div id="rated-card-img">
                        <img src={props.product.imgTwo} alt="card" id="cardHoverImg" />
                        <img src={props.product.imgOne} alt="card" />
                        {!isoutOfStock ? (
                            <div className="outOfStockLabel">Out of stock</div>
                        ) : null}
                    </div></Link>
                <div className="rated-card-content">
                    <StarRating />
                    <div className="card-content-type">{props.product.type}</div>
                    <div className="card-content-name-like">
                        <Link
                            to={`/shop/` + props.product._id}
                            className="card-content-name-like"
                        >
                            <div className="card-content-name">{props.product.title}</div>
                        </Link>
                        <div className="card-like">
                            <img
                                src="images/like.png"
                                alt="like"
                                onClick={() => token? addTowishListHandler(props.product):itemAddNotification('Please Login') && navigate('/login')}

                            />
                        </div>
                    </div>
                    {
                        props.product.stock?
                        cartProduct ? (
                        <>
                            {cartProduct.some((item) => item._id === props.product._id) ? (
                                <div className="addedToCart">Item Added In Cart</div>
                            ) : (
                                <>
                                    <div
                                        className="card-animated-btn"
                                        onClick={() => token? addToCartHandler(props.product):itemAddNotification('Please Login') && navigate('/login')}
                                    >
                                        $ {props.product.price}.00
                                    </div>
                                </>
                            )}
                        </>
                    ) : (
                        <>
                            <div
                                className="card-animated-btn"
                                onClick={() => token? addToCartHandler(props.product):itemAddNotification('Please Login') && navigate('/login')}
                            >
                                $ {props.product.price}.00
                            </div>
                        </>
                    ):
                    <div className="card-animated-btn"> Out of Stock</div>
                    }
                </div>
            </div>

        </>

    );
};

export default RatedCard;
