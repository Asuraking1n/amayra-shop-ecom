import React from "react";
import "./ratedcard.css";
import StarRating from "./StarRate";
import { Link,useNavigate } from "react-router-dom";
import { useCart } from "../../../context/cart-context";
import { useWishlist } from "../../../context/wishlist-context";
const RatedCard = (props) => {
    const { cartState,cartDispatch } = useCart();
    const {wishlistDispatch} = useWishlist()
    const navigate = useNavigate()
    const token = localStorage.getItem("token");
    const isoutOfStock = props.product.stock;
    
    return (
        <>
            <div className="rated-card-cont">
                <div id="rated-card-img">
                    <img src={props.product.imgTwo} alt="card" id="cardHoverImg" />
                    <img src={props.product.imgOne} alt="card" />
                    {!isoutOfStock ? (
                        <div className="outOfStockLabel">Out of stock</div>
                    ) : null}
                </div>
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
                        <div className="card-like" >
                            <img src="images/like.png" alt="like" onClick={()=>token ? wishlistDispatch({type:'ADD_TO_WISHLIST',payload:props.product}) || navigate('/shop'):alert("PLEASE LOGIN OR REGISTER FIRST") || navigate('/register')}/>
                        </div>
                    </div>
                    {cartState.cart ? (
                        <>
                            {cartState.cart.some((item) => item._id === props.product._id) ? (
                                <div className="addedToCart">Item Added In Cart</div>
                            ) : (
                                <>
                                    <div
                                        className="card-animated-btn"
                                        onClick={() =>
                                            token
                                                ? cartDispatch({
                                                    type: "ADD_TO_CART",
                                                    payload: props.product,
                                                })
                                                : alert("PLEASE LOGIN OR REGISTER FIRST") || navigate('/register')
                                        }
                                    >
                                        ₹ {props.product.price}.00
                                    </div>
                                </>
                            )}
                        </>
                    ) : (
                        <>
                            <div
                                className="card-animated-btn"
                                onClick={() =>
                                    token
                                        ? cartDispatch({
                                            type: "ADD_TO_CART",
                                            payload: props.product,
                                        })
                                        : alert("TOKEN UNAVILABLE")
                                }
                            >
                                ₹ {props.product.price}.00
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default RatedCard;
