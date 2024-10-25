import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Landing/Nav/Navbar";
import Landing from "./components/Landing/Landing";
import Footer from "./components/Landing/Footer/Footer";
import Main from "./components/Main/Main";
import Forget from "./components/Forget/Forget";
import SetPassword from "./components/SetPass/SetPassword";
import OTP from "./components/Login/Otp_page";
import Profile from "./components/Main/Profile";
import Explore from "./components/Main/Explore/Explore";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = () => {
      const token = localStorage.getItem('authToken');
      setIsLoggedIn(!!token);
    };

    checkLoginStatus();
  }, []);

  const handleOtpVerification = (isVerified) => {
    if (isVerified) {
      setIsLoggedIn(true);
    }
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/forget" element={<Forget />} />
        <Route path="/set-password" element={<SetPassword />} />
        <Route path="/otp" element={<OTP onVerification={handleOtpVerification} />} />
        
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <>
                <Navbar />
                <Landing />
                <Footer />
              </>
            )
          }
        />
        <Route
          path="/dashboard"
          element={
            isLoggedIn ? (
              <Main />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
        <Route
          path="/profile"
          element={
            isLoggedIn ? (
              <Profile />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
        <Route
          path="/explore"
          element={
            isLoggedIn ? (
              <Explore />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
      </Routes>
    </div>
  );
};

export default App;
