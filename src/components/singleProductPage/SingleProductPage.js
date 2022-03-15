import React, { useState,useEffect } from "react";
import StarRate from "../cards/ratedCard/StarRate";
import Insta from "../instagram/Insta";
import Footer from "../footer/Footer";
import AdditionalInfo from "./AdditionalInfo";
import Review from "./Review";
import {useParams,Link} from 'react-router-dom'
import "./singlepage.css";
import axios from "axios";

const SingleProductPage = () => {
  const {id} = useParams();
  const [isReview, setIsReview] = useState(false);
  const [productData,setProductData] = useState([]);
  const [reviewData,setReviewData] = useState({
    name:'',
    email:'',
    review:''
  })
  const [imgShow, setImgShow] = useState('');


  useEffect(()=>{
    axios.get(`/api/products/${id}`)
    .then(response=>setProductData(response.data.product) )
    .catch((e)=>console.log(e))
  },[id])

  let name,val
  const handelReview=(e)=>{
    name = e.target.name
    val = e.target.value
    setReviewData({...reviewData,[name]:val})
  }
  

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
            <StarRate />
            <div className="product-name">
              {productData.title}
            </div>
            <div className="product-price">
              <span>₹10000</span>
              ₹{productData.price}
            </div>
            <p className="product-des">
              {productData.description}
            </p>
            <div className="product-card-btn-cont">
              <input type="text" placeholder="1" />
              <span>add to cart</span>
            </div>
            <div className="add-to-wishlist">
              <img src="/images/like.png" alt="heart" />
              add to wishlist
            </div>
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
