'use client';

import { portfolioData } from '@/data/portfolio';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', phone: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="section relative">
      <div className="blur-effect w-96 h-96 bg-purple-500 -top-40 -right-40"></div>

      <div className="max-w-5xl mx-auto">
        <h2 className="section-title mb-16">CONTACT WITH ME</h2>

        <p className="text-center text-slate-300 text-lg mb-12 max-w-2xl mx-auto">
          If you have any questions or concerns, please don't hesitate to contact
          me. I am open to any work opportunities that align with my skills and
          interests.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 text-center hover:border-blue-400/50 transition-all">
            <div className="text-4xl mb-4">✉️</div>
            <h3 className="text-lg font-semibold text-blue-400 mb-2">Email</h3>
            <a
              href={`mailto:${portfolioData.email}`}
              className="text-slate-300 hover:text-blue-400 transition-colors"
            >
              {portfolioData.email}
            </a>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 text-center hover:border-blue-400/50 transition-all">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-lg font-semibold text-blue-400 mb-2">Phone</h3>
            <a
              href={`tel:${portfolioData.phone}`}
              className="text-slate-300 hover:text-blue-400 transition-colors"
            >
              {portfolioData.phone}
            </a>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 text-center hover:border-blue-400/50 transition-all">
            <div className="text-4xl mb-4">📍</div>
            <h3 className="text-lg font-semibold text-blue-400 mb-2">
              Location
            </h3>
            <p className="text-slate-300">{portfolioData.location}</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-400 transition-colors"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-400 transition-colors"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-400 transition-colors"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Mobile Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-400 transition-colors"
              />
            </div>

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-400 transition-colors resize-none"
            ></textarea>

            <button
              type="submit"
              className="w-full px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg text-white font-semibold transition-all transform hover:scale-105"
            >
              SEND MESSAGE
            </button>

            {submitted && (
              <div className="p-4 bg-green-500/20 border border-green-400 rounded-lg text-green-400 text-center">
                Thank you! Your message has been sent successfully.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
