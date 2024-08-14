import React from 'react';
import './LandingPage.css';

const HeroSection = () => {
    return (
        <section id="home" className="hero-section">
            <div className="hero-content">
                <h2>Manage Your Law Firm with Ease</h2>
                <p>Our Lawyer Management System helps you streamline your operations and focus on what matters most—your clients.</p>
                <a href="#services" className="cta-button">Learn More</a>
            </div>
        </section>
    );
};

export default HeroSection;
