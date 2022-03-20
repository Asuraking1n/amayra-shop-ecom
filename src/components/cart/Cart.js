import React, { useState } from "react";
import "../cart/cart.css";
import Insta from "../instagram/Insta";
import Footer from "../footer/Footer";
import CartCard from "../cards/cartCard/CartCard";
const Cart = () => {
  const [isAddress, setIsaddress] = useState(false);
  const [finalAddress, setfinalAddress] = useState("india");
  const [address, setAddress] = useState();


  let cartData = JSON.parse(localStorage.getItem('cartData'))


cartData = cartData.filter((value, index) => {
  const _value = JSON.stringify(value);
  return index === cartData.findIndex(obj => {
    return JSON.stringify(obj) === _value;
  });
});


console.log(cartData)
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
              {!cartData ? (
                <div className="empty-cart">
                  <img src="https://pa1.narvii.com/7524/15c809fa552c2a2dadd9a7bbb3bced5b7de5ac3ar1-600-600_hq.gif" alt="bin" />
                </div>
              ) : (
                <>
                  {cartData.map((val, id) => {
                    return (
                      <CartCard
                        key={id}
                        itemName={val.title}
                        price={val.price}
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
                <span>₹800.00</span>
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
                      />{" "}
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
                <span>₹800.00</span>
              </div>
              <button className="check-btn">proceed to checkout</button>
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
