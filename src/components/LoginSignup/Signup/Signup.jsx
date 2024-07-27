import React, {useState} from 'react'
import './Signup.css'
import userIcon from '../../Assets/user.png'
import emailIcon from '../../Assets/email.png'
import passIcon from '../../Assets/password.png'
import { useNavigate } from 'react-router-dom'
import { KJUR } from 'jsrsasign';

const Signup = () => {
    const navigate = useNavigate();
    const [action, setAction] = useState("Sign Up");
    const [input, setInput] = useState({
        name: "",
        email: "",
        password: "",
    });

  
    const handleSubmit = (e) => {
        e.preventDefault();
        const secretKey = 'secretKey';
        const header = { alg: 'HS256', typ: 'JWT' };
        const payload = { email: input.email };
        const sHeader = JSON.stringify(header);
        const sPayload = JSON.stringify(payload);
        const token = KJUR.jws.JWS.sign('HS256', sHeader, sPayload, { utf8: secretKey });
    
        localStorage.setItem("user", JSON.stringify(input));
        localStorage.setItem("token", token);
        navigate("/login")
    };

  return (
  <form onSubmit={handleSubmit}>
 <div className='container'>
        <div className='header'>
            <div className='text'>{action}</div>
        </div>
        <div className='inputs'>
            {action === "Login"?<div></div>: <div className='input'>
                <img src={userIcon} alt='' />
                <input type='text' placeholder="Name" required name="name" value={input.name} onChange={(e) => setInput({...input,[e.target.name]:e.target.value,})}/>
            </div>}
           
            <div className='input'>
                <img src={emailIcon} alt='' />
                <input type='email' placeholder="Email Id" required name="email" value={input.email} onChange={(e) => setInput({...input,[e.target.name]:e.target.value,})} />
            </div>
            <div className='input'>
                <img src={passIcon} alt='' />
                <input type='password' placeholder="Password" required name="password" value={input.password} onChange={(e) => setInput({...input,[e.target.name]:e.target.value,})}/>
            </div>
        </div>
        {action === "Sign Up"?<div></div>: <div className="forgot-password"><span>Forgot Password?</span></div>}
       
        <div className='submit-container'>
            <button type="submit" className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Sign Up");
     
          }}>
            Sign Up
            </button>
           
            <button type="submit" className={action === "Sign Up"? "submit gray" : "submit"}onClick={() => {
            setAction("Login");
        }}>
          
          
          
            Login
            </button>
        </div>
        

    </div>
  </form>
   
  )
}

export default Signup