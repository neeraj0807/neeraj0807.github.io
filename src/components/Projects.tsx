'use client';

import { portfolioData } from '@/data/portfolio';
import { useState } from 'react';

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  return (
    <section id="projects" className="section relative">
      <div className="blur-effect w-96 h-96 bg-blue-500 -top-40 -left-40"></div>

      <div className="max-w-6xl mx-auto">
        <h2 className="section-title mb-16">PROJECTS</h2>

        <div className="space-y-16">
          {portfolioData.projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover:border-blue-400/50 transition-all"
            >
              {/* Project Images Carousel */}
              <div className="relative h-96 md:h-96 bg-slate-800 overflow-hidden group">
                {project.images.length > 0 && (
                  <>
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                  </>
                )}

                {/* Image Counter */}
                {project.images.length > 1 && (
                  <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur px-4 py-2 rounded-lg text-sm text-slate-300">
                    1 / {project.images.length}
                  </div>
                )}
              </div>

              {/* Project Details */}
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <h3 className="text-3xl font-bold text-blue-400 mb-2">
                    {project.title}
                  </h3>
                  <span className="text-slate-400 text-sm md:text-base">
                    {project.duration}
                  </span>
                </div>

                <p className="text-slate-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-400 mb-3">
                    TECH STACK USED:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-500/20 border border-blue-400/50 rounded text-sm text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded text-white text-sm font-semibold transition-colors"
                    >
                      Visit Project
                    </a>
                  )}
                  <button
                    onClick={() =>
                      setExpandedProject(
                        expandedProject === project.id ? null : project.id
                      )
                    }
                    className="px-4 py-2 border border-blue-400 text-blue-400 hover:bg-blue-400/10 rounded text-sm font-semibold transition-colors"
                  >
                    {expandedProject === project.id
                      ? 'Hide Details'
                      : 'View Details'}
                  </button>
                </div>

                {/* Expanded Details */}
                {expandedProject === project.id && (
                  <div className="mt-6 pt-6 border-t border-slate-700">
                    <h4 className="text-lg font-semibold text-blue-400 mb-4">
                      Project Gallery
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.images.map((image, idx) => (
                        <div
                          key={idx}
                          className="relative h-48 bg-slate-800 rounded-lg overflow-hidden"
                        >
                          <img
                            src={image}
                            alt={`${project.title} - Image ${idx + 1}`}
                            className="w-full h-full object-cover hover:scale-110 transition-transform"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
