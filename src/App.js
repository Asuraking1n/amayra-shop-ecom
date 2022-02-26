
import "./App.css";
import Homepage from "./components/Homepage";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      
      <Navbar />
      <div className="main-cont">
      <Homepage/>
      </div>
    </>
  );
}

export default App;
