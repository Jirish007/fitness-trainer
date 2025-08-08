import React, { Suspense } from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import AboutCoach from "./components/AboutCoach";
import Gallery from "./components/Gallery";

const Testimonials = React.lazy(() => import("./components/Testimonials"));

const App: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <AboutCoach />
      <Gallery />
      <Suspense fallback={<div className="text-center my-5">Loading testimonials…</div>}>
        <Testimonials />
      </Suspense>
    </>
  );
};

export default App;
