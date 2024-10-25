import React, { useState, useRef, useEffect } from 'react';
import './Dash_nav.css';

const Dash_nav = ({ setActivePage }) => {
  const [activeTab, setActiveTab] = useState('Portfolio');
  const navRef = useRef(null);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    setActivePage(tabName);
  };

  const navItems = ['Portfolio', 'Holdings', 'Watchlist', 'Transactions'];

  useEffect(() => {
    const nav = navRef.current;
    if (nav) {
      const handleWheel = (e) => {
        e.preventDefault();
        nav.scrollLeft += e.deltaY;
      };
      nav.addEventListener('wheel', handleWheel, { passive: false });
      return () => {
        nav.removeEventListener('wheel', handleWheel);
      };
    }
  }, []);

  return (
    <nav className="sub-nav" ref={navRef}>
      {navItems.map((item) => (
        <button
          key={item}
          className={`sub-nav-item ${activeTab === item ? 'active' : ''}`}
          onClick={() => handleTabClick(item)}
        >
          {item}
        </button>
      ))}
    </nav>
  );
};

export default Dash_nav;