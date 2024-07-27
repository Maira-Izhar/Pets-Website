import React, {useState} from 'react'
import './Login.css'
import emailIcon from '../../Assets/email.png'
import passIcon from '../../Assets/password.png'
import { useNavigate } from 'react-router-dom'
import { KJUR, b64utoutf8 } from 'jsrsasign';

export const Login = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        email: "",
        password: "",
    });
    const handleLogin = (e) => {
        e.preventDefault();
        const loggedUser = JSON.parse(localStorage.getItem("user"));
        const token = localStorage.getItem("token");
    
        if (!loggedUser || !token) {
          alert("No user found, please sign up first.");
          return;
        }
    
        const isValid = KJUR.jws.JWS.verify(token, { utf8: 'secretKey' }, ['HS256']);
        const decodedPayload = KJUR.jws.JWS.readSafeJSONString(b64utoutf8(token.split('.')[1]));
    
        if (isValid && input.email === decodedPayload.email && input.password === loggedUser.password) {
           localStorage.setItem("loggedin", true);
            navigate("/home")
        }
        else {
            alert("Wrong email or password, try again!");
        }

    };
  return (
    <form onSubmit={handleLogin}>
    <div className='container'>
           <div className='header'>
               <div className='text'>Login</div>
           </div>
           <div className='inputs'>
               <div className='input'>
                   <img src={emailIcon} alt='' />
                   <input type='email' placeholder="Email Id" required name="email" value={input.email} onChange={(e) => setInput({...input,[e.target.name]:e.target.value,})} />
               </div>
               <div className='input'>
                   <img src={passIcon} alt='' />
                   <input type='password' placeholder="Password" required name="password" value={input.password} onChange={(e) => setInput({...input,[e.target.name]:e.target.value,})}/>
               </div>
           </div>
           
          
           <div className='submit-container'>
               <button type="submit" className="submit">
               Login
               </button>
           </div>
       </div>
     </form>
  )
}

export default Login;
