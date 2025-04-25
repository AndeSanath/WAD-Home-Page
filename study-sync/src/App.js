import React from 'react';
import StudyingImage from './images/StudyingImage.jpg';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          StudySync
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-links">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/register" className="nav-links">
              Register
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links">
              About Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Boost Your Productivity with StudySync</h1>
        <p>The ultimate platform for student success and time management</p>
        <div className="home-btns">
          <Link to="/register" className="btn btn-primary">
            Get Started
          </Link>
          <Link to="/about" className="btn btn-secondary">
            Learn More
          </Link>
        </div>
      </div>
      <div className="home-image">
        <img src={StudyingImage} alt="Student studying" />
      </div>
    </div>
  );
}

function Login() {
  return (
    <div className="form-container">
      <h2>Login to StudySync</h2>
      <form className="auth-form">
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
}

function Register() {
  return (
    <div className="form-container">
      <h2>Create a StudySync Account</h2>
      <form className="auth-form">
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <input type="password" placeholder="Confirm Password" required />
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
}

function About() {
  return (
    <div className="about-container">
      <h2>About StudySync</h2>
      <p>
        StudySync is a productivity platform designed specifically for students to
        help them manage their time, track assignments, and stay organized
        throughout their academic journey.
      </p>
      <div className="features">
        <div className="feature">
          <h3>Task Management</h3>
          <p>Keep track of all your assignments and deadlines in one place.</p>
        </div>
        <div className="feature">
          <h3>Study Timer</h3>
          <p>Use our Pomodoro timer to maximize your study sessions.</p>
        </div>
        <div className="feature">
          <h3>Progress Tracking</h3>
          <p>Monitor your academic progress and identify areas for improvement.</p>
        </div>
      </div>
    </div>
  );
}

export default App;