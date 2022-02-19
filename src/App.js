import "./App.css";
import BodySection from "./components/bodySection/BodySection";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="main-cont">
        <BodySection />
      </div>
    </>
  );
}

export default App;
