import React from "react";
import PriceCard from "../cards/priceCard/PriceCard"
import {useProduct} from '../../context/product-context'
import "./womensection.css"
const WomenSection = () => {
    const {products} = useProduct()
    return <>
    <div className="mensjacket-sec">
    <div className="mens-jacket-sec-card-cont">
        <div className="mens-jacket-sec-cont">
            <div className="mens-jacket-sec-cont-heading">
            WOMEN'S DRESSES <br />
            <span>AMAYRA'S SHOP CHOICE</span>
            </div>
            <div className="womens-jacket-cont">
            {products.slice(0,3).map((val,index)=>{
                return(
                    <div key={index}>
                    <PriceCard product={val}/>
                    </div>
                )
            })}
            </div>
        </div>
    </div>
    <div className="men-sec-img">
        <img src="images/amarya-img-2.jpg" alt="jacketsec" />
    </div>
    
    </div>
    </>;
};
export default WomenSection