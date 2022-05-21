import React from 'react'
import Footer from '../../components/footer/Footer'
import Insta from '../../components/instagram/Insta'
import "./log-reg.css"
import { Link } from 'react-router-dom'
const ForgetPassword = () => {
  return (
    <>
      <div className="log-reg-sec forget-bg">
        <form>
          <div className="form-heading forget-pass">
            Forgot Password ?
          </div>
          <input type="email" className='form-username' placeholder='email address' />

          <div className="form-btn"><button>Send Mail With Magic Link</button></div>
          <div className="remember-me-cont">
            <div className="remember-me">
              <Link to='/login' className='link'> Login</Link>
            </div>
            <span>Privacy Policy</span>
          </div>
        </form>
      </div>
      <Insta />
      <Footer />
    </>
  )
}

export default ForgetPassword