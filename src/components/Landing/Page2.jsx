import React from 'react';
import './Page2.css';

const Page2 = () => {
  const features = [
    {
      id: 'Mutual-funds',
      title: 'Mutual Funds',
      description: '"Investing in mutual funds is like planting seeds—you nurture them, and over time, they grow into a lush financial garden." Where your small contributions create big possibilities',
      imageClass: 'page2-card-img-left1',
      isLeft: true
    },
    {
      id: 'Stock-market',
      title: 'Stock Market',
      description: '"The stock market is a roller coaster—embrace the ride, focus on the long term, and enjoy the view from the top."',
      imageClass: 'page2-card-img-right1',
      isLeft: false
    },
    {
      id: 'Investment-guild',
      title: 'Personal Investment Guide',
      description: 'Receive expert advice and guidance tailored to your personal investment needs from SEBI registered experts',
      imageClass: 'page2-card-img-left2',
      isLeft: true
    },
    {
      id: 'Portfolio-management',
      title: 'Portfolio Management',
      description: 'A well-diversified portfolio is like a symphony—each instrument plays its part, creating beautiful harmony."',
      imageClass: 'page2-card-img-right2',
      isLeft: false
    }
  ];

  const FeatureCard = ({ feature }) => (
    <div className={`page2-${feature.isLeft ? 'left' : 'right'}-card`} id={feature.id}>
      {feature.isLeft && <div className={feature.imageClass}></div>}
      <div className="page2-card-content">
        <h4>{feature.title}</h4>
        <p>{feature.description}</p>
      </div>
      {!feature.isLeft && <div className={feature.imageClass}></div>}
    </div>
  );

  return (
    <section className="page2">
      <div className="page2-title">
        <h4>Why Choose Investt+</h4>
        <p>Dependable. User-Friendly. Affordable.</p>
      </div>

      <div className="page2-cards">
        {features.map((feature) => (
          <FeatureCard key={feature.id} feature={feature} />
        ))}
      </div>
    </section>
  );
};

export default Page2;