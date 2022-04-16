import React,{useEffect} from 'react'
import Footer from '../footer/Footer'
import Insta from '../instagram/Insta'
import { useLocation,useNavigate } from 'react-router-dom'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './payment.css'
const SucessPayment = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const redirectNotification = () => toast.success(`🦄 Redirection to shop....`, {
        position: "top-right",
        autoClose: 5500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    useEffect(()=>{
        redirectNotification()
        setTimeout(()=>{
            navigate('/shop')
        },6000)
    },[navigate])

    return (
        <>
            <div className="log-reg-sec">
                <div className="succes-cont">
                    Payment SuccessFull
                    <img src="https://c.tenor.com/BntXpMlrGuEAAAAC/check-correct.gif" alt="success" />
                    <span> {location.state.payer.name.given_name}</span>
                    <span>ID : {location.state.id}</span>
                    <span>Date : {location.state.create_time}</span>
                    <span id='quote'>{location.state.purchase_units[0].description}</span>
                </div>
            </div>
            <Insta />
            <Footer />
        </>
    )
}

export default SucessPayment