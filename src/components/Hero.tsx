import React from 'react';
import hero from '../assets/hero.webp';

const Hero: React.FC = () => {
  return (
    <header
      className="text-white text-center py-5 mb-5"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '400px',
      }}
    >
      <div className="container">
        <h1 className="display-4 fw-bold">Train with Purpose</h1>
        <p className="lead">Achieve your goals with expert fitness coaching.</p>
        <button className="btn btn-light btn-lg mt-3">Book a Session</button>
      </div>
    </header>
  );
};

export default Hero;
