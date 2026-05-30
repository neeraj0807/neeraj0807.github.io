'use client';

import { portfolioData } from '@/data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="section relative">
      <div className="blur-effect w-96 h-96 bg-blue-500 -top-40 -right-40"></div>

      <div className="max-w-5xl mx-auto">
        <h2 className="section-title mb-16">EXPERIENCES</h2>

        <div className="space-y-8">
          {portfolioData.experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-blue-400/50 transition-all hover:shadow-lg hover:shadow-blue-500/20"
            >
              <div className="flex items-start gap-6">
                {/* Icon */}
                <div className="text-4xl flex-shrink-0">{exp.icon}</div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-2xl font-bold text-blue-400">
                      {exp.title}
                    </h3>
                    <span className="text-slate-400 text-sm md:text-base">
                      {exp.duration}
                    </span>
                  </div>
                  <p className="text-slate-300 font-semibold mb-4">
                    {exp.company}
                  </p>
                  <p className="text-slate-400 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>

              {/* Timeline Line */}
              {index < portfolioData.experiences.length - 1 && (
                <div className="ml-8 h-12 border-l-2 border-blue-400/30 mt-6"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
