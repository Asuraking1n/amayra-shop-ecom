import React, { useState,useEffect } from "react";
import StarRate from "../../components/cards/ratedCard/StarRate";
import Footer from '../../components/footer/Footer'
import Insta from '../../components/instagram/Insta'
import AdditionalInfo from "./AdditionalInfo";
import { toast } from "react-toastify";
import Review from "./Review";
import {useParams,Link,useNavigate} from 'react-router-dom'
import { useWishlist } from "../../context/wishlist-context";
import "./singlepage.css";
import axios from "axios";
import { debounce } from "lodash";
import addToListService from "../../services/addToListService";
import { useCart } from "../../context/cart-context";
const SingleProductPage = () => {
  const navigate = useNavigate()
  const {id} = useParams();
  const [isReview, setIsReview] = useState(false);
  const [productData,setProductData] = useState([]);
  const [reviewData,setReviewData] = useState({
    name:'',
    email:'',
    review:''
  })
  const {cartProduct,setCartProduct} = useCart()
  const {wishListProduct,setWishListProduct} = useWishlist()
  const [imgShow, setImgShow] = useState('');
  const token = localStorage.getItem("token");
  const notify= (msg)=>toast.success(msg)
  const addToCartHandler = async (product) => {
    const response = await addToListService('cart',product,token)
    setCartProduct(response.data.cart)
    
}
const addTowishListHandler = async (product) => {
  const response =await addToListService('wishlist',product,token)
  setWishListProduct(response.data.wishlist)
}

  useEffect(()=>{
    axios.get(`/api/products/${id}`)
    .then(response=>setProductData(response.data.product) )
    .catch((e)=>notify('Error Occured Retry'))
  },[id])

  let name,val
  const handelReview=(e)=>{
    name = e.target.name
    val = e.target.value
    setReviewData({...reviewData,[name]:val})
  }
  const debounceCartData = debounce(()=>{
    token? addToCartHandler(productData) && notify('Item added to cart'): navigate('/login')
},250)

const debounceWishListData = debounce(()=>{
  token ? addTowishListHandler(productData) && notify('item added to Wishlist'):navigate('/login')
},250) 

  return (
    <>{!productData?
    (
      <>
      <div className="error-sec">
        <img src="https://c.tenor.com/51cJwccNPl4AAAAi/capoo-bugcat.gif" alt="load" /> 
        <span>Sorry we got some Error. Please go back</span>
        </div>
      </>
    )
    :(<>
      <div className="single-product-sec-cont">
        <div className="single-product-cont">
          <div className="single-product-img-sec">
            <div className="img-sec-small">
              <div className="smallimg-item">
                <img
                  src={productData.imgOne}
                  onClick={() => setImgShow(productData.imgOne)}
                  alt="item"
                />
              </div>
              <div className="smallimg-item">
                <img
                  src={productData.imgTwo}
                  onClick={() => setImgShow(productData.imgTwo)}
                  alt="item"
                />
              </div>
              <div className="smallimg-item">
                <img
                  src={productData.imgThree}
                  onClick={() => setImgShow(productData.imgThree)}
                  alt="item"
                />
              </div>
              <div className="smallimg-item">
                <img
                  src={productData.imgFour}
                  onClick={() => setImgShow(productData.imgFour)}
                  alt="item"
                />
              </div>
            </div>
            <div className="img-sec-main-img">
              <img src={ imgShow.length<1?productData.imgOne:imgShow} alt="main" />
            </div>
          </div>
          <div className="single-product-description">
            <div className="go-back">
            <Link to='/shop' className="go-back">
              <img src="/images/fill-right-arrow.png" alt="arrow" />
              BACK
            </Link>
            </div>
            <StarRate rateCount={productData.rating}/>
            <div className="product-name">
              {productData.title}
            </div>
            <div className="product-price">
              <span>$1000</span>
              ${productData.price}
            </div>
            <p className="product-des">
              {productData.description}
            </p>
            {!productData.stock?<span className="outOfStockTextShow">Out of stock</span>:null}
            <div className="product-card-btn-cont">
              <input type="text" placeholder="1" />
              {productData.stock?
                !cartProduct.some((data) => data._id === productData._id)?
                <span 
                onClick={debounceCartData}
              >add to cart</span>:
              <span>Item added in cart</span>
              :
              <span>Out Of Stock</span>
              }
            </div>
            {
              !wishListProduct.some(item=>item._id === productData._id)?
              <div className="add-to-wishlist" onClick={debounceWishListData }>
              <img src="/images/like.png" alt="heart" />
              add to wishlist
            </div>:
            <div className="add-to-wishlist" onClick={()=>navigate('/wishlist')}>
              <img src="/images/check-mark.png" alt="heart" />
              Go to Wishlist
            </div>
            }
            
          </div>
        </div>
        <div className="product-tags">
          <div className="products-cat">
            <span>Categories:</span>
            {productData.categoryName}
          </div>
          <div className="products-cat">
            <span>Tags:</span>
            {productData.tags}
          </div>
        </div>
        <div className="review-additionInfo-cont">
          <span onClick={() => setIsReview(false)}>ADDITIONAL INFORMATION</span>
          <span onClick={() => setIsReview(true)}>reviews</span>
        </div>
        {!isReview ? (
          <AdditionalInfo size={productData.size}/>
        ) : (
          <div className="review-sec">
            <div className="show-review-sec">
              <div className="review-count">2 reviews</div>
              <Review />
              <Review />
              <Review />
            </div>
            <div className="submit-review">
              <div className="review-count">add a review</div>
              <div className="submit-review-des">
                Your email address will not be published. Required fields are
                marked <span>*</span>
              </div>
              <div className="review-input-cont">
                <div className="mini-heading">
                  your rating <span>*</span>
                </div>
                <textarea onChange={handelReview} value={reviewData.review} name="review" id="input-review"></textarea>
              </div>
              <div className="review-name-email">
                <input onChange={handelReview} value={reviewData.name} name='name' type="text" placeholder="Name" />
                <input onChange={handelReview} value={reviewData.email} name='email' type="email" placeholder="Email" />
              </div>
              <span className="review-submit-btn">Submit</span>
            </div>
          </div>
        )}
        <Insta />
        <Footer />
      </div>
      </>)}
    </>
  );
};

export default SingleProductPage;
