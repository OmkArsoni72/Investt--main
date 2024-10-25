import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Page1.css';
import Signup from '../Signup/Signup';

const Page1 = () => {
  const [showSignup, setShowSignup] = useState(false);

  const handleSignupClick = () => {
    setShowSignup(true);
  };

  const handleCloseSignup = () => {
    setShowSignup(false);
  };

  return (
    <section className="page1">
      <div className="page1-content">
        <div className="page1-left">
          <div className="page1-title">
            <h1>
              Making the <span className="highlight">future today!</span>
            </h1>
            <p>Your Ultimate Stock Trading Companion for Smarter Investments.</p>
            <button onClick={handleSignupClick} className="cta-button">
              Get started <i className="ri-arrow-right-s-line"></i>
            </button>
          </div>
        </div>
        <div className="page1-right">
          <div className="page1-img" aria-hidden="true"></div>
        </div>
      </div>
      {showSignup && <Signup onClose={handleCloseSignup} />}
    </section>
  );
};

export default Page1;
