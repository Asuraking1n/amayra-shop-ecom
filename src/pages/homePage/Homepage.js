import React from 'react'
import "./homepage.css"
import BodySection from "../../components/bodySection/BodySection"
import TiltCard from '../../components/cards/tiltCard/TiltCard'
import MensJacket from '../../components/mensJacket/MensJacket'
import ShoesSection from '../../components/shoesSection/ShoesSection'
import WomenSection from '../../components/woMenSection/WomenSection'
import BestSelling from '../../components/bestSelling/BestSelling'
import Footer from '../../components/footer/Footer'
import Insta from '../../components/instagram/Insta'
const Homepage = () => {

  return (
    <>
        
        <BodySection/>
        <div className="tilt-card-section">
        <TiltCard delay={2} itemCount={4} itemName={"men's jacket"} imgSrc={"/images/category/jacket.jpg"}/>
        <TiltCard delay={2} itemCount={2} itemName={"men's shirt"} imgSrc={"/images/category/shirt.jpg"}/>
        <TiltCard delay={2} itemCount={7} itemName={"shoes"} imgSrc={"/images/category/shoes.jpeg"}/>
        <TiltCard delay={2} itemCount={3} itemName={"clothing"} imgSrc={"/images/category/clothing.jpeg"}/>
        <TiltCard delay={2} itemCount={9} itemName={"women's dress"} imgSrc={"/images/category/women-cloth.jpg"}/>
        </div>
        <MensJacket/>
        <ShoesSection/>
        <WomenSection/>
        <BestSelling/>
        <Insta/>
        <Footer/>
        
    </>
  )
}

export default Homepage