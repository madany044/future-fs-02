import React from 'react';
import './about.css';

const About = () => {


  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>Our Story</h1>
          <p className="hero-subtitle">Redefining online shopping since 2025</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-content">
              <h2>Our Mission</h2>
              <p className="mission-text">
                FutureShop is revolutionizing online shopping through a customer-first approach 
                and curated selection of premium products. We're committed to making quality 
                accessible without compromising on service or sustainability.
              </p>
              <div className="stats-grid">
                <div className="stat-card">
                  <span className="stat-number">100+</span>
                  <span className="stat-label">Happy Customers</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number">20+</span>
                  <span className="stat-label">Premium Brands</span>
                </div>
              </div>
            </div>
            <div className="mission-image">
              <div className="image-placeholder"></div>
            </div>
          </div>
        </div>
      </section>
 {/* Project Credit */}
      <footer className="project-credit">
        <p>
          This project is built by <strong>Madan Y</strong> an aspiring 
          Full Stack Developer, Intern at <strong>FutureInterns</strong>.
        </p>
      </footer>
    </div>
  );
};

export default About;