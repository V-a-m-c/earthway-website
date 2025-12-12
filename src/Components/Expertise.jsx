import React from "react";

const Expertise = () => {
  return (
    <section id="expertise" className="py-16 px-6 pattern-bg text-white">
      <h2 className="text-3xl font-bold text-cyan-300 text-center mb-10">
        Our Expertise
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Construction */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-emerald-300 mb-4">CONSTRUCTION</h3>
          <ul className="text-slate-200">
            <li>Man Power</li>
            <li>Shuttering Works</li>
            <li>Reinforcement</li>
            <li>Concreting</li>
            <li>Masonry</li>
            <li>Earth Work</li>
            <li>Erection Work</li>
            <li>Slipform Work</li>
          </ul>
        </div>

        {/* Interior Designing */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-amber-300 mb-4">INTERIOR DESIGNING</h3>
          <ul className="text-slate-200">
            <li>Modular Kitchens</li>
            <li>Wardrobes & Storage</li>
            <li>False Ceiling</li>
            <li>Floating, Handling & Cantilever Staircase</li>
          </ul>
        </div>

        {/* Architectural */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-sky-300 mb-4">ARCHITECTURAL</h3>
          <ul className="text-slate-200">
            <li>Project Inspection</li>
            <li>Design & Development</li>
            <li>Construction Documents</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
