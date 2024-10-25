import React, { useState, useEffect } from "react";
import "./Landing.css";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";

const Landing = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="landing">
      <main className="content">
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
      </main>
      {showScrollButton && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          Scroll to Top
        </button>
      )}
    </div>
  );
};

export default Landing;
