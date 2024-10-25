import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Mainnav.css';

const Mainnav = ({ user }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleProfileClick = () => {
    navigate('/profile');
  };

  const handleWalletClick = () => {
    navigate('/wallet');
  };

  const handleNotificationClick = () => {
    navigate('/notifications');
  };

  return (
    <div className="main-nav">
      <div className="main-nav-left">
        <div className="main-nav-logo">
          <Link to="/dashboard">
            <div className="logo">
              <img
                className="logo-img"
                src="https://www.investtplus.com/Img-Vid/investtplus%20logo.jpg"
                alt="Investt+ logo"
              />
              <h1>Investt+</h1>
            </div>
          </Link>
        </div>
        <button className="menu-btn" aria-label="Toggle menu" onClick={toggleMenu}>
          <i className="ri-menu-3-line"></i>
        </button>
      </div>
      <div className={`main-nav-menu ${menuOpen ? 'active' : ''}`}>
        <button className="close-menu-btn" aria-label="Close menu" onClick={toggleMenu}>
          <i className="ri-close-line"></i>
        </button>
        <div className="main-nav-links">
          <Link to="/explore">Explore</Link>
          <Link to="/dashboard">Dashboard</Link>
        </div>
        <div className="main-nav-right">
          <div className="wallet-icon" onClick={handleWalletClick}>
            <i className="ri-wallet-3-line"></i>
            <span className="icon-text">Wallet</span>
          </div>
          <div className="notification-icon" onClick={handleNotificationClick}>
            <i className="ri-notification-2-fill"></i>
            <span className="icon-text">Notifications</span>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <i className="ri-search-2-line"></i>
          </div>
          <div className="profile-icon" onClick={handleProfileClick}>
            <div className="profile-circle">
              {user && user.profilePicture ? (
                <img src={user.profilePicture} alt={user.name} />
              ) : (
                <span>{user && user.name ? user.name.charAt(0).toUpperCase() : 'U'}</span>
              )}
            </div>
            <span className="icon-text">Profile</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainnav;