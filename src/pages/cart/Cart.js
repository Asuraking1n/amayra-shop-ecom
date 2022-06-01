import React, { useState,useEffect} from "react";
import "../cart/cart.css";
import Footer from '../../components/footer/Footer'
import Insta from '../../components/instagram/Insta'
import CartCard from "../../components/cards/cartCard/CartCard";

import { useCart } from "../../context/cart-context";
import PayPal from "../../components/payment/PayPal";

const Cart = () => {
  const [isAddress, setIsaddress] = useState(false);
  const [finalAddress, setfinalAddress] = useState("india");
  const [checkout,setCheckout] = useState(false)
  const [address, setAddress] = useState();
  const [totalAmount,setTotalAmount] = useState(0)
  const {cartProduct} = useCart()
  
  
useEffect(() => {
  return setTotalAmount(cartProduct.reduce((acc,val)=>acc = acc+(val.qty>0&&val.qty*Number(val.price)),0))
}, [cartProduct])

 
  const changeAddress = (e) => {
    setAddress(e.target.value);
  };

  return (
    <>
      <div className="cart-container-section">
        <div className="cart-container-heading">Cart</div>
        <div className="cart-container">
          <div className="cart-item-cont">
            <div className="cart-cards-cont">
              {cartProduct.length<1 ? (
                <div className="empty-cart">
                  <img src="https://pa1.narvii.com/7524/15c809fa552c2a2dadd9a7bbb3bced5b7de5ac3ar1-600-600_hq.gif" alt="bin" />
                </div>
              ) : (
                <>
                  {cartProduct.map((val, id) => {
                    return (
                      <CartCard
                        key={id}
                        item={val}
                        
                      />
                    );
                  })}
                </>
              )}
            </div>
          </div>
          <div className="cart-box-cont">
            <div className="cart-box-sec">
              <div className="cart-subtotal">
                subtotal
                <span>${totalAmount}.00</span>
              </div>
              <div className="cart-subtotal cart-add">
                shipping
                <div className="cart-address">
                  Shipping to <span>{finalAddress}</span>
                  {isAddress ? (
                    <div>
                      <input
                        type="text"
                        placeholder="Enter Address"
                        onChange={changeAddress}
                      />
                      <button
                        onClick={() =>
                          setIsaddress(false) || address.length < 1
                            ? setAddress("INDIA")
                            : setfinalAddress(address)
                        }
                      >
                        SUBMIT
                      </button>
                    </div>
                  ) : (
                    <button onClick={() => setIsaddress(true)}>
                      Change address
                    </button>
                  )}
                </div>
              </div>
              <div className="cart-total">
                Total
                <span>$ 
                {totalAmount}.00</span>
              </div>
              <div className="paybtn">{checkout?<PayPal payingAmount={totalAmount} /> :<button className="check-btn" onClick={()=>setCheckout(true)}>proceed to checkout</button>}</div>
            </div>
          </div>
        </div>
      </div>
      <Insta />
      <Footer />
    </>
  );
};

export default Cart;
