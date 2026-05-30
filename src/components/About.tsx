'use client';

import { portfolioData } from '@/data/portfolio';

export default function About() {
  return (
    <section id="about" className="section relative">
      <div className="blur-effect w-96 h-96 bg-blue-500 -top-40 -right-40"></div>

      <div className="max-w-5xl mx-auto">
        <h2 className="section-title mb-16">WHO I AM?</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="w-80 h-80 rounded-xl bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-8xl font-bold text-white shadow-2xl border-4 border-slate-700/50">
              NA
            </div>
          </div>

          {/* Bio Text */}
          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              {portfolioData.bio}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8 pt-8 border-t border-slate-700">
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-blue-400 mb-2">6+</div>
                <div className="text-slate-400">Years Experience</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-blue-400 mb-2">20+</div>
                <div className="text-slate-400">Projects Delivered</div>
              </div>
            </div>

            {/* Tech Stack Summary */}
            <div className="mt-8 pt-8 border-t border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-sm text-slate-300 hover:border-blue-400 hover:text-blue-400 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
