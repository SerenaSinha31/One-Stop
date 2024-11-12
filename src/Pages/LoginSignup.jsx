// import React, { useState } from 'react'
// import'./CSS/LoginSignup.css'

// const LoginSignup = () => {
//   const[state,setState] = useState("Login ");

//   const login = async () =>{
//     console.log("Login Function Excuted")

//   }
//   const signUp = async () =>{
//     console.log("Sign Up Function Excuted")
//   }
//   return (
//     <div className='loginsignup'>
//       <div className="loginsignup-container">
//         <h2>{state}</h2>
//         <div className="loginsignup-feild">
//           {state==="Sign Up"?<input type="text" placeholder='Your Name'/>:<></>}
//           <input type="email" placeholder='Email Address'/>
//           <input type="password" placeholder='Password'/>
//         </div>
//         <button onClick={()=>{state==="Login"?login():signUp()}}>Continue</button>
//         {state==="Sign Up"? <div className="loginsignup-login">Already have an account? <span onClick={()=>{setState("Login")}}>Login here</span></div>: <div className="loginsignup-login">Already have an account? <span onClick={()=>{setState("Sign Up")}}>Click Here</span></div>}
       
       
//         <div className="loginsignup-agree">
//           <input type="checkbox"name=''id=''/>
//           <p>By continuing. I agree to the terms of use & privacy policy.</p>
//         </div>
//       </div>
  
//     </div>
//   )
// }

// export default LoginSignup


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/LoginSignup.css';

const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateForm = () => {
    if (state === "Sign Up" && !name.trim()) {
      setError("Name is required for Sign Up.");
      return false;
    }
    if (!email.trim()) {
      setError("Email is required.");
      return false;
    }
    if (!password.trim()) {
      setError("Password is required.");
      return false;
    }
    setError(""); // Clear error if all fields are valid
    return true;
  };

  const login = async () => {
    if (!validateForm()) return;
    console.log("Login Function Executed");
    navigate('/');  // Redirect to home page after login
  };

  const signUp = async () => {
    if (!validateForm()) return;
    console.log("Sign Up Function Executed");
    // Additional signup logic here
    setState("Login"); // Switch to login form after signing up
    setError("");      // Clear any errors
    setEmail("");      // Optionally clear the input fields
    setPassword("");
    setName("");
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h2>{state}</h2>
        <div className="loginsignup-feild">
          {state === "Sign Up" && (
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button onClick={() => { state === "Login" ? login() : signUp() }}>Continue</button>
        {state === "Sign Up" ? (
          <div className="loginsignup-login">
            Already have an account? <span onClick={() => { setState("Login"); setError(""); }}>Login here</span>
          </div>
        ) : (
          <div className="loginsignup-login">
            Don't have an account? <span onClick={() => { setState("Sign Up"); setError(""); }}>Sign Up here</span>
          </div>
        )}
        <div className="loginsignup-agree">
          <input type="checkbox" id="termsCheckbox" />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;

