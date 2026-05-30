'use client';

import { portfolioData } from '@/data/portfolio';

export default function Education() {
  return (
    <section id="education" className="section relative">
      <div className="blur-effect w-96 h-96 bg-purple-500 -bottom-40 -right-40"></div>

      <div className="max-w-5xl mx-auto">
        <h2 className="section-title mb-16">EDUCATION</h2>

        <div className="space-y-8">
          {portfolioData.education.map((edu, index) => (
            <div
              key={edu.id}
              className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-blue-400/50 transition-all hover:shadow-lg hover:shadow-blue-500/20"
            >
              <div className="flex items-start gap-6">
                {/* Icon */}
                <div className="text-4xl flex-shrink-0">{edu.icon}</div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-2xl font-bold text-blue-400">
                      {edu.degree}
                    </h3>
                    <span className="text-slate-400 text-sm md:text-base">
                      {edu.duration}
                    </span>
                  </div>
                  <p className="text-slate-300 font-semibold mb-2">
                    {edu.institution}
                  </p>
                  <p className="text-slate-400">{edu.location}</p>
                </div>
              </div>

              {/* Timeline Line */}
              {index < portfolioData.education.length - 1 && (
                <div className="ml-8 h-12 border-l-2 border-blue-400/30 mt-6"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
