
import "./App.css";
// import Login from "./components/log-reg/Login";
import Register from "./components/log-reg/Register";
// import Homepage from "./components/Homepage";
import Navbar from "./components/navbar/Navbar";
// import ProductiListing from "./components/productListing/ProductiListing";
// import SingleProductPage from "./components/singleProductPage/SingleProductPage";

function App() {
  return (
    <>
      <div style={{height:'auto',width:'auto',overflow:'hidden'}}>
      <Navbar />
      <div className="main-cont">
      {/* <Homepage/> */}
      {/* <ProductiListing/> */}
      {/* <SingleProductPage/> */}
      {/* <Login/> */}
      <Register/>
      </div>
      </div>
    </>
  );
}

export default App;
