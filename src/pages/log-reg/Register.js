import React,{useState} from 'react'
import Footer from '../../components/footer/Footer'
import Insta from '../../components/instagram/Insta'
import "./log-reg.css"
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import SignupAPIservice from '../../services/SignupAPIservice'
const Register = () => {
  const navigate = useNavigate()
  const [userData,setUserData] = useState({
    name:"",
    email:"",
    password:"",
    confirmPassword:"",
  })
  let name,value;
  const handelInput=(e)=>{
    name = e.target.name
    value = e.target.value
    setUserData({...userData,[name]:value})
  }
  const addNewUser=async(e)=>{
    e.preventDefault();
    if(userData.password === userData.confirmPassword){
      try{
        const response = await SignupAPIservice(userData)
        localStorage.setItem('token',response.data.encodedToken)
        navigate('/')
      }catch (error){
        console.log(error)
      }
    }else{
      alert('password dont match')
    }
  }
  return (
    <>
    <div className="log-reg-sec ">
        <form>
            <div className="form-heading">
            Register
            </div>
            <input type="text" name='name' className='form-username' onChange={handelInput} value={userData.name} placeholder='name'/>
            <input type="text" name='email' className='form-username' onChange={handelInput} value={userData.email} placeholder='email address'/>
            {/* <input type="date" className='form-username' onChange={handelInput} value={userData.} placeholder='Date of Birth'/> */}
            <input type="password" name='password'  className='form-username' onChange={handelInput} value={userData.password} placeholder='enter password'/>
            <input type="password" name='confirmPassword'  className='form-username' onChange={handelInput} value={userData.confirmPassword} placeholder='enter password again'/>
            <div className="form-btn"><button onClick={addNewUser}>Let me in</button></div>
            <div className="remember-me-cont">
            <div className="remember-me">
                  <Link to='/login' className='link'> Login</Link>
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

export default Register