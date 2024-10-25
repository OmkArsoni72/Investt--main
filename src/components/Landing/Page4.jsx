import React, { useState, useCallback, memo } from 'react';
import './Page4.css';

const FAQ = memo(({ question, answer, isVisible, onToggle, index }) => (
  <div className="page4-question">
    <div className={`page4-q${index + 1}`} onClick={onToggle}>
      <h4>{question}</h4>
      <i className={`ri-arrow-${isVisible ? 'up' : 'down'}-s-line`}></i>
    </div>
    {isVisible && <p>{answer}</p>}
  </div>
));

const faqData = [
  {
    question: 'What is Investt+?',
    answer: 'Investt+ is a comprehensive investment platform designed to help individuals make informed financial decisions and manage their investments efficiently.',
  },
  {
    question: 'How does Investt+ help with investment planning?',
    answer: 'Investt+ offers personalized investment planning tools, helping users create a portfolio tailored to their financial goals, risk tolerance, and investment horizon.',
  },
  {
    question: 'What types of investment products are available on Investt+?',
    answer: 'Investt+ provides access to a wide range of investment products, including mutual funds, stocks, bonds, and portfolio management services.',
  },
  {
    question: 'Is Investt+ suitable for beginner investors?',
    answer: 'Yes, Investt+ is designed for both beginners and experienced investors. It offers easy-to-understand educational resources, investment guides, and expert recommendations.',
  },
  {
    question: 'How secure is my data and investments with Investt+?',
    answer: 'Investt+ prioritizes the security of your personal data and investments. It employs advanced encryption, multi-factor authentication, and regulatory compliance.',
  },
  {
    question: 'What is the cost of using Investt+?',
    answer: 'Investt+ offers various pricing plans, including free access to basic features and premium plans that provide advanced tools, personalized consultations, and portfolio management services.',
  },
  {
    question: 'Can I track my investments in real-time on Investt+?',
    answer: 'Yes, Investt+ provides real-time tracking of your portfolio, offering insights into market trends, asset performance, and investment growth.',
  },
  {
    question: 'Does Investt+ offer financial advisory services?',
    answer: 'Yes, Investt+ connects users with SEBI-registered financial experts who provide personalized advice based on your financial situation and goals.',
  },
  {
    question: 'Can I access Investt+ on mobile devices?',
    answer: 'Investt+ is fully responsive and can be accessed via web browsers on mobile devices. We also offer dedicated mobile apps for iOS and Android platforms.',
  },
  {
    question: 'What support does Investt+ offer if I have questions or issues?',
    answer: 'Investt+ provides dedicated customer support through various channels, including email, live chat, and phone. We also have an extensive knowledge base and community forum for self-help options.',
  },
];

const Page4 = () => {
  const [visibleAnswer, setVisibleAnswer] = useState(null);

  const toggleAnswer = useCallback((index) => {
    setVisibleAnswer(prevVisible => prevVisible === index ? null : index);
  }, []);

  return (
    <section className="page4" id="FAQs">
      <div className="page4-title">
        <h2>Frequently Asked Questions</h2>
      </div>
      <div className="page4-content">
        <div className="page4-faqs">
          {faqData.map((faq, index) => (
            <FAQ
              key={index}
              question={faq.question}
              answer={faq.answer}
              isVisible={visibleAnswer === index}
              onToggle={() => toggleAnswer(index)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page4;
