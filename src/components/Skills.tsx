'use client';

import { portfolioData } from '@/data/portfolio';

export default function Skills() {
  const skillCategories = {
    Frontend: ['ReactJS', 'TypeScript'],
    Backend: ['Node.js'],
    Other: [],
  };

  return (
    <section id="skills" className="section relative">
      <div className="blur-effect w-96 h-96 bg-purple-500 -bottom-40 -left-40"></div>

      <div className="max-w-5xl mx-auto">
        <h2 className="section-title mb-16">SKILLS</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skillCategories).map(([category, categorySkills]) => (
            <div
              key={category}
              className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-blue-400/50 transition-all"
            >
              <h3 className="text-2xl font-bold text-blue-400 mb-6">{category}</h3>
              <div className="space-y-4">
                {(categorySkills.length > 0
                  ? categorySkills
                  : portfolioData.skills
                ).map((skill) => (
                  <div key={skill}>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-300 font-medium">{skill}</span>
                      <span className="text-blue-400">90%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-400 to-purple-600 h-2 rounded-full"
                        style={{ width: '90%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* All Skills List */}
        <div className="mt-12 bg-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50">
          <h3 className="text-xl font-semibold text-blue-400 mb-6">
            Complete Skill Set
          </h3>
          <div className="flex flex-wrap gap-3">
            {portfolioData.skills.map((skill) => (
              <span
                key={skill}
                className="px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/50 rounded-lg text-slate-200 hover:bg-blue-400/20 hover:border-blue-400 transition-all"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
