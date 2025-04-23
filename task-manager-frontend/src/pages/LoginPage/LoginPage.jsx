import React, { useState } from 'react';
import './LoginPage.css';
import user_icon from '../../assets/person.png';
import email_icon from '../../assets/email.png';
import password_icon from '../../assets/password.png';

const LoginPage = () => {
  const [action, setAction] = useState("Sign Up");
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation
    if (!name || !email || !password) {
      setError("All fields are required!");
    } else {
      setError('');
      console.log("Form Submitted", { name, email, password });
      // Perform further actions like API calls here
    }
  };

  const handleForgotPassword = () => {
    console.log("Redirecting to password reset page...");
    // You can redirect to a password reset page here or trigger a modal
  };

  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>

      <form onSubmit={handleSubmit} className="inputs">
        {action === "Sign Up" && (
          <div className="input">
            <img src={user_icon} alt="" />
            <input 
              type="text" 
              placeholder="Name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
          </div>
        )}
        
        <div className="input">
          <img src={email_icon} alt="" />
          <input 
            type="email" 
            placeholder="Email ID" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>

        <div className="input">
          <img src={password_icon} alt="" />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>

        {error && <div className="error-message">{error}</div>}

        <div className="submit-container">
          <button type="submit" className="submit">{action}</button>
        </div>
      </form>

      {action === "Login" && (
        <div className="forgot-password" onClick={handleForgotPassword}>
          Forgot Password? <span>Click here</span>
        </div>
      )}

      <div className="toggle-container">
        {action === "Sign Up" ? (
          <div className="toggle-text">
            Already have an account? 
            <span className="toggle-link" onClick={() => setAction("Login")}>Login</span>
          </div>
        ) : (
          <div className="toggle-text">
            Don't have an account? 
            <span className="toggle-link" onClick={() => setAction("Sign Up")}>Sign Up</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
