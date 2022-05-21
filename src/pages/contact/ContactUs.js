import React from 'react'
import './contact.css'
import Footer from '../../components/footer/Footer'
import Insta from '../../components/instagram/Insta'
const ContactUs = () => {
    return (
        <>
            <div className="contact-con-sec">
                <div className="contact-sec-heading">Want Our Assistance ?</div>
                <div className="contact-card-cont">
                    <div className="contact-cards">
                    <img src="https://thumbs.gfycat.com/EvenSkinnyAmericanavocet-max-1mb.gif" alt="map" />
                    <span>Varanasi</span>
                    </div>
                    <div className="contact-cards">
                        <img src="https://thumbs.gfycat.com/AmpleTenderArkshell-size_restricted.gif" alt="phone" />
                        <span>7880647181</span>
                    </div>
                    <div className="contact-cards">
                        <img src="https://cdn.dribbble.com/users/2113992/screenshots/14510264/gmail_animation.gif" alt="mail" />
                        <span className='c-mail'>amayra@shops.com</span>
                    </div>
                </div>
            </div>
            <Insta/>
            <Footer/>
        </>
    )
}

export default ContactUs