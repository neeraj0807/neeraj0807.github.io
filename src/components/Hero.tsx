'use client';

import { portfolioData } from '@/data/portfolio';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
      {/* Background Blur Effects */}
      <div className="blur-effect w-96 h-96 bg-blue-500 -top-40 -left-40"></div>
      <div className="blur-effect w-96 h-96 bg-purple-500 -bottom-40 -right-40"></div>

      <div className="max-w-4xl mx-auto text-center z-10">
        {/* Profile Image Placeholder */}
        <div className="mb-8 relative inline-block">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-6xl font-bold text-white shadow-2xl">
            NA
          </div>
          <div className="absolute inset-0 rounded-full border-2 border-blue-400/50 animate-pulse"></div>
        </div>

        {/* Main Text */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-up">
          Hello, This is{' '}
          <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            {portfolioData.name}
          </span>
        </h1>

        <p className="text-2xl md:text-3xl text-slate-300 mb-6 font-light">
          I'm a Professional {portfolioData.title}
        </p>

        {/* Bio Code-like Display */}
        <div className="bg-slate-900/50 backdrop-blur-sm rounded-lg p-6 mb-8 text-left max-w-2xl mx-auto border border-slate-700/50 overflow-x-auto">
          <pre className="text-sm text-slate-200 font-mono">
            <span className="text-purple-400">const</span>
            {' coder = {'}
            {'\n  '}
            <span className="text-blue-400">name</span>: <span className="text-green-400">'{portfolioData.name}'</span>,
            {'\n  '}
            <span className="text-blue-400">skills</span>: [
            {portfolioData.skills.map((skill, i) => (
              <span key={skill}>
                <span className="text-green-400">'{skill}'</span>
                {i < portfolioData.skills.length - 1 ? ', ' : ''}
              </span>
            ))}
            ],
            {'\n  '}
            <span className="text-blue-400">hireable</span>:
            <span className="text-purple-400"> true</span>,
            {'\n'}
            {'}'}
          </pre>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href="#projects"
            className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-semibold transition-all transform hover:scale-105"
          >
            View My Work
          </a>
          <a
            href={`mailto:${portfolioData.email}`}
            className="px-8 py-3 border-2 border-blue-400 text-blue-400 hover:bg-blue-400/10 rounded-lg font-semibold transition-all"
          >
            Contact Me
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-8">
          <a
            href={portfolioData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-400 transition-colors"
            title="GitHub"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href={portfolioData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-400 transition-colors"
            title="LinkedIn"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.006 1.419-.103.249-.129.597-.129.946v5.44h-3.555V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
            </svg>
          </a>
          <a
            href={`mailto:${portfolioData.email}`}
            className="text-slate-400 hover:text-blue-400 transition-colors"
            title="Email"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 animate-bounce">
          <svg className="w-6 h-6 mx-auto text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
