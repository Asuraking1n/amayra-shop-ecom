import React,{useState} from 'react'
import Footer from '../../components/footer/Footer'
import Insta from '../../components/instagram/Insta'
import "./log-reg.css"
import {Link,useNavigate} from 'react-router-dom'
import { LoginAPIservice } from '../../services/LoginAPIservice'
const Login = () => {
  const navigate = useNavigate()
  const [userDetails,setUserDetails] = useState({
    email:'',
    password:''
  })
  
  const dummyUser = {
    email: "nishant88tiwari@gmail.com",
    password: "Nishant",
  };
  const applyDummyData=(e)=>{
    e.preventDefault();
    setUserDetails(dummyUser)
  }
  const LoginDataHandler=(e)=>{
    let name = e.target.name
    let val=e.target.value
    setUserDetails({...userDetails,[name]:val})
  }

  const submitData=async(e)=>{
    e.preventDefault();
    try {
      const res = await LoginAPIservice(userDetails)
      localStorage.setItem('token',res.data.encodedToken)
      navigate('/')
    } catch (error) {
      alert("USER NOT FOUND")
    }
    
  }
  
  return (
    <>
        <div className="log-reg-sec">
            <form>
                <div className="form-heading">
                Login
                </div>
                <input type="email" value={userDetails.email} onChange={LoginDataHandler} name='email' className='form-username' placeholder='username or email address'/>
                <input type="password" value={userDetails.password} onChange={LoginDataHandler} name='password' className='form-username' placeholder='password'/>
                <div className="form-btn" onClick={applyDummyData}><button>CLICK TO APPLY DUMMY DATA</button></div>
                <div className="form-btn" onClick={submitData}><button>LOG IN</button></div>
                <div className="remember-me-cont">
                <div className="remember-me">
                    <input type="checkbox"  />
                    remember me
                </div>
                <span> <Link to='/forget-password' className='link'> Lost your password?</Link></span>
                </div>
            </form>
        </div>
        <Insta/>
        <Footer/>
    </>
  )
}

export default Login