export default function Testimonials() {
  return (
    <section className="bg-light py-5 mt-5">
      <div className="container">
        <h2 className="mb-4 text-center">Client Success Stories</h2>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="p-4 bg-white rounded shadow-sm">
              <p className="mb-2">
                “In just 3 months, I transformed my body and confidence. Incredible experience!”
              </p>
              <div className="fw-bold">– Sarah K.</div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-4 bg-white rounded shadow-sm">
              <p className="mb-2">
                “The best trainer I’ve ever worked with. Professional, motivating, and results-driven.”
              </p>
              <div className="fw-bold">– James T.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
