import React from 'react';
import './LandingPage.css';

const ServicesSection = () => {
    return (
        <section id="services" className="services-section">
            <h2>Our Services</h2>
            <div className="services-container">
                <div className="service-box">
                    <h3>Case Management</h3>
                    <p>Keep all your case details organized and accessible in one place.</p>
                </div>
                <div className="service-box">
                    <h3>Client Management</h3>
                    <p>Track client information and case history effortlessly.</p>
                </div>
                <div className="service-box">
                    <h3>Document Automation</h3>
                    <p>Generate legal documents quickly and accurately.</p>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
