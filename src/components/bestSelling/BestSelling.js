import React from "react";
import "./bestselling.css";
import {useProduct} from '../../context/product-context'
import PriceCard from "../cards/priceCard/PriceCard"
const BestSelling = () => {
  const {products} = useProduct()
  return (
    <>
      <div className="best-selling-sec">
        <div className="bestselling-title">BEST SELLING PRODUCTS</div>
        <div className="scrolling-cont">
        <div className="best-selling-card-cont">
        {products.slice(4,9).map((val,index)=>{
                return(
                    <div key={index}>
                    <PriceCard pID={val._id} imgSrcTwo={val.imgTwo} imgSrcOne={val.imgOne} stock={val.stock} name={val.title} type={val.type} price={val.price}/>
                    </div>
                )
            })}
          
        </div>
        </div>
        
      </div>
    </>
  );
};

export default BestSelling;
