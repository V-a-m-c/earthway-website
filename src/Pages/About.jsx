import React from "react";

const About = () => {
  return (
    <main className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">About Earthway</h2>
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <p className="text-slate-700 mb-4">Earthway Engineering & Infra Pvt Ltd provides professional construction, architectural and interior services with a focus on precision, safety and timely delivery. Our experienced teams manage projects from concept to completion.</p>
            <ul className="list-disc ml-5 text-slate-700 space-y-2">
              <li>Experienced workforce and on-site supervision</li>
              <li>Quality materials and testing</li>
              <li>End-to-end project management</li>
            </ul>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg">
            <img alt="team" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=60" className="w-full h-64 object-cover" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
