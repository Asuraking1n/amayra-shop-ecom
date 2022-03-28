import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductContextProvider } from "./context/product-context";
import { CartContextProvider } from "./context/cart-context";
import { WishlistContextProvider } from "./context/wishlist-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <WishlistContextProvider>
        <CartContextProvider>
          <ProductContextProvider>
            <App />
          </ProductContextProvider>
        </CartContextProvider>
      </WishlistContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
