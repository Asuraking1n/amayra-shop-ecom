import "./App.css";
import {useEffect } from "react";
import Login from "./pages/log-reg/Login";
import Register from "./pages/log-reg/Register";
import Homepage from "./pages/homePage/Homepage";
import Navbar from "./components/navbar/Navbar";
import ProductiListing from "./pages/productListing/ProductiListing";
import SingleProductPage from "./pages/singleProductPage/SingleProductPage";
import ForgetPassword from "./pages/log-reg/ForgetPassword";
import Mockman from "mockman-js";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import WishList from "./pages/wishlist/WishList";
import Cart from "./pages/cart/Cart";
import Error404 from "./pages/404errorpage/Error404";

import ContactUs from './pages/contact/ContactUs'
import SucessPayment from "./components/payment/SucessPayment";

function App() {
  let location = useLocation()
  useEffect(() => {
    window.scrollTo(0,0)
  }, [location])
  
  return (
    <>
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
            <Route path="/success" element={<SucessPayment/>} />
            <Route path="*" element={<Error404/>} />
          </Routes>
          
        </div>
      </div>
      <ToastContainer
                position="top-right"
                autoClose={60}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                
            />
            
    </>
  );
}

export default App;
