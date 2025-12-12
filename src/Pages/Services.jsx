import React from "react";

const Services = () => {
  return (
    <main className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Services</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="card-elevated">
            <h3 className="text-xl font-semibold text-sky-600 mb-3">Construction</h3>
            <p className="text-slate-700">Comprehensive construction services including manpower, shuttering, reinforcement and concreting for residential and commercial projects.</p>
          </div>

          <div className="card-elevated">
            <h3 className="text-xl font-semibold text-sky-600 mb-3">Interior Designing</h3>
            <p className="text-slate-700">High-quality interior solutions — modular kitchens, wardrobes, ceilings and bespoke joinery.</p>
          </div>

          <div className="card-elevated">
            <h3 className="text-xl font-semibold text-sky-600 mb-3">Architectural</h3>
            <p className="text-slate-700">Design, project inspections and complete construction documentation to streamline execution and approvals.</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Services;
