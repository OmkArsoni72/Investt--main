import React, { useState, useRef, useEffect } from 'react';
import './Explore_nav.css';

const Explore_nav = ({ setActivePage }) => {
  const [activeTab, setActiveTab] = useState('Stocks');
  const navRef = useRef(null);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    setActivePage(tabName);
  };

  const navItems = ['Stocks', 'Mutual_Funds', 'Fixed_Deposit', 'Insurance'];

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
          {item.replace('_', ' ')}
        </button>
      ))}
    </nav>
  );
};

export default Explore_nav;
