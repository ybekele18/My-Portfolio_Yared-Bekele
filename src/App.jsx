import React from 'react';
import reactLogo from './assets/mylogo_y.svg';
import profilePic from "./assets/profile_y.jpg";
import './App.css';

function App() {
  return (
    <>
      <div className="container">
        <div className="portfolio">
          <header>
            <h1>Yared Bekele</h1>
            <p>Welcome to my Portfolio!</p>
          </header>
          <div className="card">
            <h2>About Me</h2>
            <p>
              I'm passionate about music. I'm a music creator and arranger, and I serve in Protestant religious music services.
            </p>
          </div>
          <div className="projects">
            <h2>My Services</h2>
            <ul>
              <li>Music Arrangement</li>
              <li>Stage Band Service</li>
              <li>Mixing and Mastering</li>
            </ul>
          </div>
        </div>
        
        <div className="profile">
          <img src={profilePic} className="profile-pic" alt="Profile" />
        </div>
      </div>

      <footer>
        <div className="social-icons">
          <a href="mailto:ybekele18@gmail.com" aria-label="Email">
            <img src="/path/to/email-icon.svg" alt="Email" />
          </a>
          <a href="https://instagram.com/your-instagram" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <img src="/path/to/instagram-icon.svg" alt="Instagram" />
          </a>
          <a href="https://facebook.com/your-facebook" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <img src="/path/to/facebook-icon.svg" alt="Facebook" />
          </a>
          <a href="https://t.me/ybekele18" aria-label="Telegram" target="_blank" rel="noopener noreferrer">
            <img src="/path/to/telegram-icon.svg" alt="Telegram" />
          </a>
        </div>
        <p className="contact-info">Contact Me: Tel: 0942823656</p>
        <p className="read-the-docs">More things coming soon.</p>
      </footer>
    </>
  );
}

export default App;