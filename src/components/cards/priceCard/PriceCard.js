import "./pricecard.css";
import { Link,useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useCart } from "../../../context/cart-context";
import { useWishlist } from "../../../context/wishlist-context";
import addToListService from "../../../services/addToListService";
import { debounce } from "lodash";
const RatedCard = (props) => {
    const { cartProduct, setCartProduct } = useCart()
    const token = localStorage.getItem("token");
    const isoutOfStock = props.product.stock;
    const { wishListProduct,setWishListProduct } = useWishlist()
    const navigate = useNavigate()
    const itemAddNotification=(msg)=>toast(msg)
    const addToCartHandler = async (product) => {
        const response = await addToListService('cart',product,token)
        setCartProduct(response.data.cart)

    }
    const addTowishListHandler = async (product) => {
        const response = await addToListService('wishlist',product,token)
        setWishListProduct(response.data.wishlist)
    }

    const debounceCartData = debounce(()=>{
            token? addToCartHandler(props.product): navigate('/login')
        },200)
    
    const debounceWishListData = debounce(()=>{
            token? addTowishListHandler(props.product):itemAddNotification('Please Login') && navigate('/login')
        },200)      

    return (
        <>
            <div className="price-card-cont">
                <Link
                    to={`/shop/` + props.product._id}
                >
                    <div id="price-card-img">
                        <img src={props.product.imgTwo} alt="card" id="cardHoverImg" />
                        <img src={props.product.imgOne} alt="card" />
                        {!isoutOfStock ? (
                            <div className="outOfStockLabel">Out of stock</div>
                        ) : null}
                    </div></Link>
                <div className="rated-card-content">
                    <div className="card-content-type">{props.product.type}</div>
                    <div className="card-content-name-like">
                        <Link
                            to={`/shop/` + props.product._id}
                            className="card-content-name-like"
                        >
                            <div className="card-content-name">{props.product.title}</div></Link>
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
                    {props.product.stock?
                        cartProduct ? (
                        <>
                            {cartProduct.some((item) => item._id === props.product._id) ? (
                                <div className="addedToCartPrice" onClick={()=>navigate('/cart')}>Go To Cart</div>
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
                    <div style={{color:'red',fontSize:'1.6rem',marginTop:'1rem'}} > Out of Stock</div>
                    }
                </div>
            </div>
        </>
    );
};

export default RatedCard;
