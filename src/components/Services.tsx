import React from 'react';

const Services: React.FC = () => {
  return (
    <section className="container my-5">
      <h2 className="mb-4 text-center">Training Services</h2>
      <div className="row g-4">
        <div className="col-md-4 text-center">
          <i className="bi bi-heart-pulse fs-1 text-danger mb-2"></i>
          <h5>Cardio Coaching</h5>
          <p>Custom cardio sessions to improve endurance and burn fat efficiently.</p>
        </div>
        <div className="col-md-4 text-center">
          <i className="bi bi-person-bounding-box fs-1 text-primary mb-2"></i>
          <h5>Strength Training</h5>
          <p>Build strength safely with tailored weightlifting plans and proper form.</p>
        </div>
        <div className="col-md-4 text-center">
          <i className="bi bi-emoji-sunglasses fs-1 text-success mb-2"></i>
          <h5>Flexibility & Wellness</h5>
          <p>Enhance mobility and reduce stress through guided stretching and recovery.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
