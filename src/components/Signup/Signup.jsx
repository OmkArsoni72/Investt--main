import React, { useState } from "react";
import "./Signup.css"; // Linking the CSS file
import Login from "../Login/Login"; // Import the Login component

const Signup = ({ onClose }) => {
  const [showLogin, setShowLogin] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add signup logic here
    console.log("Signup form submitted");
  };

  const handleLoginClick = () => {
    setShowLogin(true);
    // We don't call onClose() here to keep the login popup open
  };

  if (showLogin) {
    return <Login onClose={() => {
      setShowLogin(false);
      onClose(); // Close the signup popup when closing the login popup
    }} />;
  }

  return (
    <div className="signup-page">
      <div className="signup-container">
        <div className="signup-left">
          <div className="signup-left-up">
            <div className="signup-logo">
              <div className="signup-logo-img"></div>
              <h1>Investt+</h1>
            </div>
            <button onClick={onClose}>
              <i className="ri-close-fill"></i>
            </button>
            <div className="signup-monolog">
              <div className="signup-mono">
                <p>Start Your Investment Journey Today.</p>
              </div>
              <div className="line"></div>
            </div>
          </div>

          <div className="signup-cc">
            <p>© {new Date().getFullYear()} Invest+. All Rights Reserved.</p>
          </div>
        </div>

        <div className="signup-right">
          <div className="close-btn">
            <button onClick={onClose}>
              <i className="ri-close-fill"></i>
            </button>
          </div>
          <div className="signup-content">
            <div className="signup-title">
              <h2>Welcome to investt+</h2>
            </div>

            <div className="google-signup">
              <div className="google-logo"></div>
              <p>Continue with Google</p>
            </div>
            <div className="or-bar">
              <div className="or-line"></div>
              <p>OR</p>
              <div className="or-line"></div>
            </div>

            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email Address" required />
              <input type="tel" placeholder="Phone Number" required />
              <button type="submit">Continue</button>
            </form>

            <p>
              Already have an account? <span onClick={handleLoginClick}>Log in</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
