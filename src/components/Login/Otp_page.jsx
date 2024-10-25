import React, { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Otp_page.css'

const OtpPage = () => {
  const [otp, setOtp] = useState(['', '', '', ''])
  const [showAlert, setShowAlert] = useState(false)
  const navigate = useNavigate()
  const inputRefs = useRef([])

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false

    const newOtp = [...otp]
    newOtp[index] = element.value
    setOtp(newOtp)

    if (element.value !== '' && index < 3) {
      inputRefs.current[index + 1].focus()
    }
  }

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace') {
      e.preventDefault()
      const newOtp = [...otp]
      newOtp[index] = ''
      setOtp(newOtp)

      if (index > 0) {
        inputRefs.current[index - 1].focus()
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send a request to your backend to verify the OTP
    // For this example, we'll simulate OTP verification
    const enteredOtp = otp.join('')
    if (enteredOtp === '1234') { // Replace '1234' with actual OTP verification logic
      localStorage.setItem('authToken', 'dummyToken') // Set a dummy token
      window.location.reload() // Reload the page
    } else {
      setShowAlert(true)
      setTimeout(() => setShowAlert(false), 3000) // Hide alert after 3 seconds
    }
  }

  useEffect(() => {
    // Check if OTP is verified (using the dummy token for this example)
    const token = localStorage.getItem('authToken')
    if (token) {
      navigate('/dashboard')
    }
  }, [navigate])

  return (
    <div className="otp-page">
      <div className="otp-left">
        <div className="otp-left-up">
          <div className="otp-logo">
            <div className="otp-logo-img"></div>
            <h1>Investt+</h1>
          </div>
          <div className="otp-monolog">
            <div className="otp-mono">
              <span>Secure Access to Your</span>
              <span>Investments in Minutes.</span>
            </div>
            <div className="line"></div>
          </div>
        </div>

        <div className="otp-left-down">
          <div className="otp-img"></div>
          <div className="otp-cc">
            <p>© 2024 Invest+. All Rights Reserved.</p>
          </div>
        </div>
      </div>
      <div className="otp-right">
        <div className="otp-right-up">
          <p><Link to="/">Home</Link> | <Link to="/support">Support</Link></p>
        </div>

        <div className="otp-right-down">
          <div className="otp-content">
            <h1>Enter OTP</h1>
            <p>We've sent a one-time password to your email. Please enter it below to verify your account.</p>
            {showAlert && (
              <div className="alert alert-danger" role="alert">
                Incorrect OTP. Please try again.
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="otp-input-container">
                {otp.map((data, index) => {
                  return (
                    <input
                      className="otp-input"
                      type="text"
                      name="otp"
                      maxLength="1"
                      key={index}
                      value={data}
                      onChange={e => handleChange(e.target, index)}
                      onKeyDown={e => handleKeyDown(e, index)}
                      onFocus={e => e.target.select()}
                      ref={el => inputRefs.current[index] = el}
                    />
                  )
                })}
              </div>
              <button type="submit">Verify OTP</button>
            </form>
            <p>Didn't receive the OTP? <Link to="#">Resend OTP</Link></p>
          </div>
        </div>
      </div>
      <footer>
        <p>© 2024 Invest+. All Rights Reserved.</p>
      </footer>
    </div>
  )
}

export default OtpPage
