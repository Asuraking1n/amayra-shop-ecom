import "./App.css";
import Login from "./components/log-reg/Login";
import Register from "./components/log-reg/Register";
import Homepage from "./components/Homepage";
import Navbar from "./components/navbar/Navbar";
import ProductiListing from "./components/productListing/ProductiListing";
import SingleProductPage from "./components/singleProductPage/SingleProductPage";
import ForgetPassword from "./components/log-reg/ForgetPassword";
import Mockman from "mockman-js";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import WishList from "./components/wishlist/WishList";
import Cart from "./components/cart/Cart";
import Error404 from "./components/404errorpage/Error404";
import ContactUs from './components/contact/ContactUs'

function App() {
  return (
    <><Router>
      <Navbar />
      <div style={{ height: 'auto', width: 'auto', overflow: 'hidden', position: 'relative' }}>
        <div className="main-cont">

          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/shop" element={<ProductiListing />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/wishlist" element={<WishList/>} />
            <Route exact path="/cart" element={<Cart/>} />
            <Route exact path="/mockman" element={<Mockman/>} />
            <Route exact path="/contact-us" element={<ContactUs/>} />
            <Route exact path="/forget-password" element={<ForgetPassword />} />
            <Route exact path="/shop/:id" element={<SingleProductPage />} />
            <Route path="*" element={<Error404/>} />
          </Routes>

        </div>
      </div>
    </Router>
    </>
  );
}

export default App;
