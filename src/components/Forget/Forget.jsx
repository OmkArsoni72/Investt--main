import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Forget.css'

const Forget = () => {
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send a request to your backend to handle the password reset
    // For this example, we'll just redirect to the SetPassword page
    navigate('/set-password')
  }

  return (
    <div className="forget-page">
        <div className="forget-left">
            <div className="forget-left-up">
                <div className="forget-logo">
                    <div className="forget-logo-img"></div>
                    <h1>Investt+</h1>
                </div>
                <div className="forget-monolog">
                    <div className="forget-mono">
                        <span>Secure Access to Your</span>
                        <span>Investments in Minutes.</span>
                    </div>
                    <div className="line"></div>
                </div>
            </div>

            <div className="forget-left-down">
                <div className="forget-img"></div>
                <div className="forget-cc">
                    <p>© 2024 Invest+. All Rights Reserved.</p>
                </div>
            </div>
        </div>
        <div className="forget-right">
            <div className="forget-right-up">
                <p><Link to="/">Home</Link> | <Link to="/support">Support</Link></p>
            </div>

            <div className="forget-right-down">
                <div className="forget-content">
                    <h1>Forgot Password?</h1>
                    <p>No worries! Just enter your registered email below, and we'll send you a link to reset your
                        password.</p>
                    <form onSubmit={handleSubmit}>
                        <input 
                          type="email" 
                          placeholder="Email Address" 
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                        <button type="submit">Continue</button>
                    </form>
                    <p>Didn't receive the email? <Link to="#">resend the email</Link></p>
                </div>
            </div>
        </div>
        <footer>
            <p>© 2024 Invest+. All Rights Reserved.</p>
        </footer>
    </div>
  )
}

export default Forget