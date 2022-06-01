
import "./ratedcard.css";
import StarRating from "./StarRate";
import { Link,  useNavigate } from "react-router-dom";
import { useCart } from "../../../context/cart-context";
import addToListService from "../../../services/addToListService";
import { useWishlist } from "../../../context/wishlist-context";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { debounce } from "lodash";
const RatedCard = (props) => {
    const navigate = useNavigate()
    const { cartProduct, setCartProduct } = useCart()
    const token = localStorage.getItem("token");
    const isoutOfStock = props.product.stock;
    const { wishListProduct,setWishListProduct } = useWishlist()

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
    const debounceCartData = debounce(()=>{
        token? addToCartHandler(props.product): navigate('/login')
    },250)

const debounceWishListData = debounce(()=>{
        token? addTowishListHandler(props.product):itemAddNotification('Please Login') && navigate('/login')
    },250) 



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
                    <StarRating rateCount={props.product.rating}/>
                    <div className="card-content-type">{props.product.type}</div>
                    <div className="card-content-name-like">
                        <Link
                            to={`/shop/` + props.product._id}
                            className="card-content-name-like"
                        >
                            <div className="card-content-name">{props.product.title}</div>
                        </Link>
                        <div className="card-like">
                        {
                            !wishListProduct.some(item=>item._id === props.product._id)  ?
                            <img
                                src="/images/like.png"
                                alt="like"
                                onClick={debounceWishListData}
                            />:
                            <img
                                src="/images/check-mark.png"
                                alt="like"
                            />
                        }
                            
                        </div>
                    </div>
                    {
                        props.product.stock?
                        cartProduct ? (
                        <>
                            {cartProduct.some((item) => item._id === props.product._id) ? (
                                <div className="addedToCart" onClick={()=>navigate('/cart')}>GO TO CART</div>
                            ) : (
                                <>
                                    <div
                                        className="card-animated-btn"
                                        onClick={debounceCartData}
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
                                onClick={debounceCartData}
                            >
                                $ {props.product.price}.00
                            </div>
                        </>
                    ):
                    <div style={{color:'red',marginTop:'1rem'}} > Out of Stock</div>
                    }
                </div>
            </div>
        </>
    );
};

export default RatedCard;
