import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-part1">
        <div className="footer-part1-left">
          <div className="footer-logo">
            <img
              className="logo-img"
              src="https://www.investtplus.com/Img-Vid/investtplus%20logo.jpg"
              alt="Investt+ logo"
            />
            <h1>Investt+</h1>
          </div>
          <div className="footer-connect">
            <p>Connect With Us</p>
            <p>Email: investtplus7@gmail.com</p>
            <p>Phone: +91-9065929948</p>
          </div>
          <div className="footer-social">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="ri-facebook-box-fill"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="ri-twitter-x-fill"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="ri-instagram-fill"></i>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="ri-linkedin-box-fill"></i>
            </a>
          </div>
        </div>
        <div className="footer-part1-right">
          <div className="footer-company">
            <strong>Company</strong>
            <Link to="/about">About Us</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/press">Press</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/faqs" onClick={(e) => {
              e.preventDefault();
              const faqsElement = document.getElementById('FAQs');
              if (faqsElement) {
                faqsElement.scrollIntoView({ behavior: 'smooth' });
              }
            }}>FAQs</Link>
          </div>

          <div className="footer-products">
            <strong>Products</strong>
            <Link to="/investment-plans">Investment Plans</Link>
            <Link to="/mutual-funds">Mutual Funds</Link>
            <Link to="/stocks-etfs">Stocks & ETFs</Link>
            <Link to="/bonds">Bonds</Link>
            <Link to="/sips">SIPs</Link>
          </div>

          <div className="footer-resources">
            <strong>Resources</strong>
            <Link to="/help-center">Help Center</Link>
            <Link to="/tutorials">Tutorials</Link>
            <Link to="/learning-academy">Learning Academy</Link>
            <Link to="/market-updates">Market Updates</Link>
            <Link to="/security-privacy">Security & Privacy</Link>
          </div>

          <div className="footer-legal">
            <strong>Legal</strong>
            <Link to="/terms-conditions">Terms & Conditions</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/risk-disclosure">Risk Disclosure</Link>
            <Link to="/investor-protection">Investor Protection</Link>
          </div>
        </div>
      </div>
      <div className="footer-part2">
        <div className="footer-cc">
          <p>
            &copy; {new Date().getFullYear()} All rights reserved by Investtplus | Curiosity | TechServe
          </p>
        </div>
        <div className="footer-links">
          <p>
            Useful Links:{" "}
            <a href="https://www.nseindia.com/" target="_blank" rel="noopener noreferrer">NSE</a> |{" "}
            <a href="https://www.bseindia.com/" target="_blank" rel="noopener noreferrer">BSE</a> |{" "}
            <a href="https://www.sebi.gov.in/" target="_blank" rel="noopener noreferrer">SEBI</a> |{" "}
            <a href="https://www.cdslindia.com/" target="_blank" rel="noopener noreferrer">CDSL</a>
          </p>
        </div>
        <div className="footer-credits">
          <p>
            Icons by: <a href="https://remixicon.com/" target="_blank" rel="noopener noreferrer">RemixIcon</a>
          </p>
          <p>
            Vector Art by: <a href="https://www.vecteezy.com/" target="_blank" rel="noopener noreferrer">Vecteezy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
