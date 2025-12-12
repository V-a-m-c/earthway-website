import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-6">
      <h2 className="text-3xl font-bold text-blue-700 text-center mb-8">
        Get in Touch
      </h2>

      <div className="max-w-4xl mx-auto text-center">
        <div className="card-elevated flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1 text-left">
            <h3 className="text-xl font-bold text-blue-700 mb-2">Get in Touch</h3>
            <p className="text-slate-700">Dr.No: 2-74, Yeluru, Prathipadu (Mandal)</p>
            <p className="text-slate-700">Kakinada (Dist), Andhra Pradesh, India - 533432</p>
          </div>

          <div className="flex-1 text-left">
            <p className="text-slate-700">📞 <a className="text-slate-900 font-semibold" href="tel:+919666952394">+91 9666952394</a></p>
            <p className="text-slate-700">✉️ <a className="text-slate-900 font-semibold" href="mailto:earthway2021@gmail.com">earthway2021@gmail.com</a></p>
            <div className="mt-4">
              <a href="#" className="btn-primary inline-block">Message on WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
