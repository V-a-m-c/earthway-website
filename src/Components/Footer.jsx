import React from "react";

const Footer = () => (
  <footer className="bg-slate-900 text-slate-200 py-8">
    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
      <div>
        <div className="text-lg font-semibold">Earthway Engineering & Infra Pvt Ltd</div>
        <div className="text-sm text-slate-400">© {new Date().getFullYear()}</div>
      </div>

      <div>
        <div className="text-sm text-slate-300 font-medium mb-2">Contact</div>
        <div className="text-sm text-slate-400">Dr.No: 2-74, Yeluru, Prathipadu (Mandal)</div>
        <div className="text-sm text-slate-400">Kakinada (Dist), Andhra Pradesh, India - 533432</div>
        <div className="text-sm text-slate-300 mt-2">📞 <a className="hover:text-white" href="tel:+919666952394">+91 9666952394</a></div>
        <div className="text-sm text-slate-300">✉️ <a className="hover:text-white" href="mailto:earthway2021@gmail.com">earthway2021@gmail.com</a></div>
      </div>

      <div className="flex flex-col md:items-end">
        <div className="text-sm text-slate-300 font-medium mb-2">Quick Links</div>
        <div className="flex flex-col text-sm text-slate-400 space-y-1">
          <a className="hover:text-white" href="/">Home</a>
          <a className="hover:text-white" href="/services">Services</a>
          <a className="hover:text-white" href="/about">About</a>
          <a className="hover:text-white" href="/events">Events</a>
          <a className="hover:text-white" href="/contact">Contact</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
