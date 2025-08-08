import React from 'react';
import session from '../assets/session.webp';
import session2 from '../assets/session2.webp';

const Gallery: React.FC = () => {
  return (
    <section className="container my-5">
      <h2 className="text-center mb-4">Training Gallery</h2>
      <div className="row g-4">
        <div className="col-md-6">
          <img
            src={session}
            alt="Training Session 1"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <img
            src={session2}
            alt="Training Session 2"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
