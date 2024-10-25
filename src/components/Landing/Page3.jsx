import React, { useRef, useState, useEffect, useCallback } from "react";
import './Page3.css'

const Page3 = () => {
  const scrollContainerRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);

  const smoothScroll = useCallback((target, duration) => {
    const scrollContainer = scrollContainerRef.current;
    const start = scrollContainer.scrollLeft;
    const distance = target - start;
    let startTime = null;

    const animation = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      scrollContainer.scrollLeft = start + distance * easeInOutQuad(progress);

      if (progress < 1) {
        requestAnimationFrame(animation);
      } else {
        setIsScrolling(false);
      }
    };

    requestAnimationFrame(animation);
  }, []);

  const easeInOutQuad = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

  const getScrollDistance = useCallback(() => 
    window.innerWidth < 720 ? 250 : 300, []);

  const handleScroll = useCallback((direction) => {
    if (!isScrolling) {
      setIsScrolling(true);
      const scrollDistance = getScrollDistance();
      smoothScroll(scrollContainerRef.current.scrollLeft + direction * scrollDistance, 500);
    }
  }, [isScrolling, getScrollDistance, smoothScroll]);

  const handleNextClick = useCallback(() => handleScroll(1), [handleScroll]);
  const handleBackClick = useCallback(() => handleScroll(-1), [handleScroll]);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const handleWheel = (evt) => {
      evt.preventDefault();
      if (!isScrolling) {
        setIsScrolling(true);
        const scrollDistance = getScrollDistance();
        const direction = evt.deltaY > 0 ? 1 : -1;
        smoothScroll(scrollContainer.scrollLeft + direction * scrollDistance, 500);
      }
    };

    scrollContainer.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      scrollContainer.removeEventListener("wheel", handleWheel);
    };
  }, [isScrolling, getScrollDistance, smoothScroll]);

  const newsCards = [
    {
      id: 1,
      title: "Sensex Surges 550 Points, Nifty Tests 25000",
      content: "The Indian benchmark indices, Sensex and Nifty, witnessed a strong rally on October 8, 2024, driven by gains in banking, IT, and metal stocks.",
      date: "08 Oct 2024",
      image: "path/to/image1.jpg"
    },
    {
      id: 2,
      title: "Tata Steel, SAIL, Nalco Among Top Movers",
      content: "Shares of Tata Steel, Steel Authority of India (SAIL), and National Aluminium Company (Nalco) were among the top gainers in the morning trade.",
      date: "08 Oct 2024",
      image: "path/to/image2.jpg"
    },
    {
      id: 3,
      title: "Vodafone Idea Shares Surge on Debt Reduction Plans",
      content: "Shares of Vodafone Idea rallied after the company announced plans to reduce its debt burden through various measures.",
      date: "08 Oct 2024",
      image: "path/to/image3.jpg"
    },
    {
      id: 4,
      title: "Yes Bank Shares Dip Amidst Rising Concerns",
      content: "Shares of Yes Bank witnessed a decline amid growing concerns about the bank's financial health.",
      date: "08 Oct 2024",
      image: "path/to/image4.jpg"
    },
    {
      id: 5,
      title: "NMDC Shares Fall on Weak Demand for Iron Ore",
      content: "Shares of National Mineral Development Corporation (NMDC) declined due to weak demand for iron ore in the domestic market.",
      date: "08 Oct 2024",
      image: "path/to/image5.jpg"
    },
    {
      id: 6,
      title: "GMR Airports Infrastructure Shares Gain on Strong Passenger Traffic",
      content: "Shares of GMR Airports Infrastructure rose on the back of strong passenger traffic growth at its airports.",
      date: "08 Oct 2024",
      image: "path/to/image6.jpg"
    }
  ];

  return (
    <div className="page3">
      <div className="page3-title">
        <h4>Current Trends</h4>
        <p>Catch the Latest Buzz</p>
      </div>

      <div className="page3-content">
        <button className="page3-left-btn" onClick={handleBackClick} aria-label="Scroll back">
          <i className="ri-arrow-left-double-line"></i>
        </button>

        <div className="page3-card-holder" ref={scrollContainerRef}>
          {newsCards.map((card) => (
            <div key={card.id} className={`page3-card page3-card${card.id}`}>
              <div className="page3-card-img" style={{backgroundImage: `url(${card.image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
              <div className="page3-card-content">
                <div className="page3-card-news">
                  <h4>{card.title}</h4>
                  <p>{card.content}</p>
                </div>
                <h5>{card.date}</h5>
              </div>
            </div>
          ))}
        </div>

        <button className="page3-right-btn" onClick={handleNextClick} aria-label="Scroll forward">
          <i className="ri-arrow-right-double-fill"></i>
        </button>
      </div>
    </div>
  );
};

export default Page3;
