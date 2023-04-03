import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// import LandingPage from './components/pages/LandingPage'
import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import HomePage from './components/pages/HomePage'

import './App.css'
import Main from './components/pages/Main'
import Payment from './components/pages/Payment'

export default function App() {
  return (
    <Router>
      
        <Routes>
        
          {/* <Route exact path="/" component={LandingPage} /> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/Payment" element={<Payment />} />
        </Routes>
        {/* <Footer /> */}
      
    </Router>
  )
}

const Footer = () => {
  return (
    <p className="text-center" style={FooterStyle}>Designed & coded by <a href="https://izemspot.netlify.com" target="_blank" rel="noopener noreferrer">IZEMSPOT</a></p>
  )
}

const FooterStyle = {
  background: "#222",
  fontSize: ".8rem",
  color: "#fff",
  position: "absolute",
  bottom: 0,
  padding: "1rem",
  margin: 0,
  width: "100%",
  opacity: ".5"
}