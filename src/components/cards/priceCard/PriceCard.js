import React from "react";
import "./pricecard.css";
import { Link} from "react-router-dom";
import { useCart } from "../../../context/cart-context";
import { useWishlist } from "../../../context/wishlist-context";
import axios from 'axios'
const RatedCard = (props) => {
    const { cartProduct,setCartProduct } = useCart()
    const token = localStorage.getItem("token");
    const isoutOfStock = props.product.stock;
    const {setWishListProduct} = useWishlist()
    const addToCartHandler = async (product) => {
        const response = await axios.post('/api/user/cart', { product }, { headers: { authorization: token } })
        setCartProduct(response.data.cart)
        
    }
    const addTowishListHandler = async (product) => {
        const response =await axios.post('/api/user/wishlist', { product }, { headers: { authorization: token } })
        setWishListProduct(response.data.wishlist)
    }

    return (
        <>
            <div className="price-card-cont">
                <div id="price-card-img">
                    <img src={props.product.imgTwo} alt="card" id="cardHoverImg" />
                    <img src={props.product.imgOne} alt="card" />
                    {!isoutOfStock ? (
                        <div className="outOfStockLabel">Out of stock</div>
                    ) : null}
                </div>
                <div className="rated-card-content">
                    <div className="card-content-type">{props.product.type}</div>
                    <div className="card-content-name-like">
                        <Link
                            to={`/shop/` + props.product._id}
                            className="card-content-name-like"
                        >
                            <div className="card-content-name">{props.product.title}</div></Link>
                            <div className="card-like">
                                
                                <img
                                    src="images/like.png"
                                    alt="like"
                                    onClick={() => addTowishListHandler(props.product)}
                                />
                            </div>
                        
                    </div>
                    {cartProduct ? (
                        <>
                            {cartProduct.some((item) => item._id === props.product._id) ? (
                                <div className="addedToCartPrice">Item Added In Cart</div>
                            ) : (
                                <>
                                    <div
                                        className="card-animated-btn"
                                        onClick={() => addToCartHandler(props.product)}
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
                                onClick={() => addToCartHandler(props.product)}
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
