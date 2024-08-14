import React from 'react';
import './LandingPage.css';

const TestimonialsSection = () => {
    return (
        <section id="testimonials" className="testimonials-section">
            <h2>What Our Clients Say</h2>
            <div className="testimonials-container">
                <div className="testimonial-box">
                    <p>"This system has completely transformed how we manage our cases."</p>
                    <h4>— John Doe, Attorney</h4>
                </div>
                <div className="testimonial-box">
                    <p>"Client management has never been easier, thanks to this platform."</p>
                    <h4>— Jane Smith, Legal Consultant</h4>
                </div>
                <div className="testimonial-box">
                    <p>"The document automation feature saves us hours every week."</p>
                    <h4>— Robert Brown, Paralegal</h4>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
