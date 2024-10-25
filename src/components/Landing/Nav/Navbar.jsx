import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "../../Login/Login";
import "./Navbar.css";

const Navbar = () => {
  const [isNavMenuActive, setNavMenuActive] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const navRef = useRef(null);
  const navigate = useNavigate();

  const handleLogin = () => {
    setLoggedIn(true);
    setShowLogin(false);
    navigate('/dashboard');
  };

  const handleLogout = () => {
    setLoggedIn(false);
    navigate('/');
  };

  const toggleMenu = () => {
    setNavMenuActive(!isNavMenuActive);
  };

  const toggleDropdown = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveMenu(null);
      }
    };

    window.addEventListener("click", handleOutsideClick);
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const closeMenus = () => {
    setNavMenuActive(false);
    setActiveMenu(null);
  };

  const renderDropdownMenu = (menuItems, menuName) => (
    <div className={`dropdown-menu ${activeMenu === menuName ? "active" : ""}`} style={{ display: activeMenu === menuName ? "block" : "none" }}>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link to={item.path} onClick={() => { closeMenus(); navigateToSection(item.id); }}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  const navigateToSection = (sectionId) => {
    navigate('/#' + sectionId);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const productMenuItems = [
    { label: "Mutual Funds", path: "/#Mutual-funds", id: "Mutual-funds" },
    { label: "Stock Market", path: "/#Stock-market", id: "Stock-market" },
    { label: "Investment Guide", path: "/#Investment-guild", id: "Investment-guild" },
    { label: "Portfolio Management", path: "/#Portfolio-management", id: "Portfolio-management" },
  ];

  const companyMenuItems = [
    { label: "About Us", path: "/about-us" },
    { label: "Contact Us", path: "/contact-us" },
  ];

  return (
    <>
      {showLogin && <Login onLogin={handleLogin} onClose={() => setShowLogin(false)} />}
      
      <nav className="nav" ref={navRef}>
        <div className="nav-logo">
          <Link to="/" onClick={closeMenus}>
            <div className="logo">
              <img
                className="logo-img"
                src="https://www.investtplus.com/Img-Vid/investtplus%20logo.jpg"
                alt="Investt+ logo"
              />
              <h1>Investt+</h1>
            </div>
          </Link>
          <button className="menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
            <i className="ri-menu-3-line"></i>
          </button>
        </div>
        <div className={`nav-menu ${isNavMenuActive ? "active" : ""}`}>
          <div className="dropdown">
            <button onClick={() => toggleDropdown('products')} className="dropdown-toggle">
              Products<i className="ri-arrow-drop-down-line"></i>
            </button>
            {renderDropdownMenu(productMenuItems, 'products')}
          </div>
          <div className="dropdown">
            <button onClick={() => toggleDropdown('company')} className="dropdown-toggle">
              Company<i className="ri-arrow-drop-down-line"></i>
            </button>
            {renderDropdownMenu(companyMenuItems, 'company')}
          </div>
          <div className="support">
            <Link to="/support" onClick={closeMenus}>
              <h4>Support</h4>
            </Link>
          </div>
          <div className="login-btn">
            <button onClick={() => isLoggedIn ? handleLogout() : setShowLogin(true)}>
              {isLoggedIn ? "Logout" : "Login"}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
