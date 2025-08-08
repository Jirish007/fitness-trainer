import React from 'react';
import coach from '../assets/coach.webp';

const AboutCoach: React.FC = () => {
  return (
    <section className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src={coach}
            alt="Fitness Coach"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <h2>Meet Your Coach</h2>
          <p>
            Hi, I’m Alex — certified personal trainer with 8+ years of experience transforming lives.
            I blend modern fitness science with personalized attention to help you reach your full potential.
          </p>
          <ul className="list-unstyled">
            <li><i className="bi bi-check-circle-fill text-success me-2"></i> Certified Strength Coach</li>
            <li><i className="bi bi-check-circle-fill text-success me-2"></i> Nutrition & Wellness Expert</li>
            <li><i className="bi bi-check-circle-fill text-success me-2"></i> 1-on-1 and Group Coaching</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutCoach;
