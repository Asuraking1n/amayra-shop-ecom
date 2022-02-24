
import "./App.css";
// import Homepage from "./components/Homepage";
import Navbar from "./components/navbar/Navbar";
import ProductiListing from "./components/productListing/ProductiListing";

function App() {
  return (
    <>
      
      <Navbar />
      <div className="main-cont">
      {/* <Homepage/> */}
      <ProductiListing/>
      </div>
    </>
  );
}

export default App;
