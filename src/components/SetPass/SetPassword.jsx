import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SetPassword.css'; // Link to the CSS file

const SetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add password setting logic here
    console.log('New password submitted');
  };

  return (
    <div className="set-password-page">
      <div className="set-password-container">
        <div className="set-password-left">
          <div className="set-password-left-up">
            <div className="set-password-logo">
              <div className="set-password-logo-img"></div>
              <h1>Investt+</h1>
            </div>
            <div className="set-password-monolog">
              <div className="set-password-mono">
                <span>Secure Access to Your</span>
                <span>Investments in Minutes.</span>
              </div>
              <div className="line"></div>
            </div>
          </div>

          <div className="set-password-left-down">
            <div className="set-password-img"></div>
            <div className="set-password-cc">
              <p>© {new Date().getFullYear()} Invest+. All Rights Reserved.</p>
            </div>
          </div>
        </div>

        <div className="set-password-right">
          <div className="set-password-right-up">
            <p><Link to="/">Home</Link> | <Link to="#">Support</Link></p>
          </div>

          <div className="set-password-right-down">
            <div className="set-password-content">
              <h1>Set Your New Password</h1>
              <p>Create a strong and secure password to regain access to your account.</p>
              <form onSubmit={handleSubmit}>
                <input 
                  type="password" 
                  placeholder="New Password" 
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
                <input 
                  type="password" 
                  placeholder="Confirm New Password" 
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <button type="submit">Continue</button>
              </form>
              
              <p>Password Requirements:</p>
              <ul>
                <li>At least 8 characters long</li>
                <li>Include both upper and lowercase letters</li>
                <li>At least one number and one special character</li>                       
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetPassword;