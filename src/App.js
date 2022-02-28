
import "./App.css";
// import Homepage from "./components/Homepage";
import Navbar from "./components/navbar/Navbar";
// import ProductiListing from "./components/productListing/ProductiListing";
import SingleProductPage from "./components/singleProductPage/SingleProductPage";

function App() {
  return (
    <>
      
      <Navbar />
      <div className="main-cont">
      {/* <Homepage/> */}
      {/* <ProductiListing/> */}
      <SingleProductPage/>
      </div>
    </>
  );
}

export default App;
