import React from "react";
import {useProduct} from '../../context/product-context'
import PriceCard from '../cards/priceCard/PriceCard'
import "./mensjacket.css"
const MensJacket = () => {
    const {products} = useProduct()
    
    return <>
    <div className="mensjacket-sec">
    <div className="men-sec-img">
        <img src="images/amarya-img-1.jpg" alt="jacketsec" />
    </div>
    <div className="mens-jacket-sec-card-cont">
        <div className="mens-jacket-sec-cont">
            <div className="mens-jacket-sec-cont-heading">
            MEN'S JACKETS <br />
            <span>AMAYRA'S SHOP CHOICE</span>
            </div>
            <div className="mens-jacket-cont">
            {products.slice(6,9).map((val,index)=>{
                return(
                    <div key={index}>
                    <PriceCard product={val}/>
                    </div>
                )
            })}
            
            </div>
        </div>
    </div>
    </div>
    </>;
};

export default MensJacket;
