import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import Signup from '../Signup/Signup'; // Import the Signup component

const Login = ({ onLogin, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
    console.log('Login submitted', { email, password });
    // Instead of calling onLogin and onClose, we now navigate to the OTP page
    navigate('/otp');
  };

  const handleSignupClick = () => {
    setShowSignup(true);
    // We don't call onClose() here to keep the signup popup open
  };

  if (showSignup) {
    return <Signup onClose={() => {
      setShowSignup(false);
      onClose(); // Close the login popup when closing the signup popup
    }} />;
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-left">
          <div className="login-left-up">
            <div className="login-logo">
              <div className="login-logo-img"></div>
              <h1>Investt+</h1>
            </div>
            <button onClick={onClose}><i className="ri-close-fill"></i></button>
            <div className="login-monolog">
              <div className="login-mono">
                <p>Manage Your Investments with Ease.</p>
              </div>
              <div className="line"></div>
            </div>
          </div>

          <div className="login-cc">
            <p>© {new Date().getFullYear()} Invest+. All Rights Reserved.</p>
          </div>
        </div>

        <div className="login-right">
          <div className="close-btn">
            <button onClick={onClose}><i className="ri-close-fill"></i></button>
          </div>
          <div className="login-content">
            <div className="login-title">
              <h2>Welcome to investt+</h2>
            </div>

            <div className="google-login">
              <div className="google-logo"></div>
              <p>Continue with Google</p>
            </div>
            <div className="or-bar">
              <div className="or-line"></div>
              <p>OR</p>
              <div className="or-line"></div>
            </div>

            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <div className="password">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <i
                  className={`ri-eye-${showPassword ? 'off' : ''}-line`}
                  onClick={() => setShowPassword(!showPassword)}
                ></i>
              </div>
              <button type="submit">Login</button>
            </form>

            <p>Don&apos;t have an account? <span onClick={handleSignupClick}>Sign up</span></p>
            <p><Link to="/forget">Forgot Password?</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;