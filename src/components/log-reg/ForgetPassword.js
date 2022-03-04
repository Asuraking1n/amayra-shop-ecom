import React from 'react'
import Footer from '../footer/Footer'
import Insta from '../instagram/Insta'
import "./log-reg.css"
const ForgetPassword = () => {
  return (
    <>
    <div className="log-reg-sec forget-bg">
        <form>
            <div className="form-heading forget-pass">
            Forgot Password ?
            </div>
            <input type="email" className='form-username' placeholder='email address'/>
            
            <div className="form-btn"><button>Send Mail With Magic Link</button></div>
            <div className="remember-me-cont">
            <div className="remember-me">
                or Login
            </div>
            <span>Privacy Policy</span>
            </div>
        </form>
    </div>
    <Insta/>
    <Footer/>
</>
  )
}

export default ForgetPassword