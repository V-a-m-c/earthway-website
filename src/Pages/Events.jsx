import React from "react";

const Events = () => {
  const events = [
    {id:1, title: 'Safety Training Workshop', date: '2025-10-05', desc: 'On-site safety and best practices for contractors.'},
    {id:2, title: 'Open House: Project Showcase', date: '2025-11-15', desc: 'Showcasing recent projects and capabilities.'}
  ];

  return (
    <main className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Events</h2>

        <div className="space-y-4">
          {events.map(ev => (
            <div key={ev.id} className="card-elevated">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{ev.title}</h3>
                  <p className="text-sm text-slate-600">{ev.desc}</p>
                </div>
                <div className="text-sm text-slate-500">{ev.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Events;
