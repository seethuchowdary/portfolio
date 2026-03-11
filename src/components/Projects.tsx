'use client';

import Tilt from 'react-parallax-tilt';

export default function Projects() {
  const projects = [
    {
      title: 'Smart Health Monitoring System',
      description: 'Wearable smart vest using biosensors and Raspberry Pi to continuously monitor vital parameters. Implemented ML-based anomaly detection using LightGBM.',
      tags: ['Raspberry Pi', 'Machine Learning', 'Python'],
      color: 'from-blue-500/20 to-cyan-500/20',
      border: 'group-hover:border-cyan-500/50'
    },
    {
      title: 'IoT Based Green House Monitoring',
      description: 'Smart greenhouse system integrating temperature, humidity, light, and soil moisture with automated actuator control via real-time Wi-Fi dashboard.',
      tags: ['IoT', 'Embedded C', 'Sensors'],
      color: 'from-emerald-500/20 to-teal-500/20',
      border: 'group-hover:border-teal-500/50'
    },
    {
      title: 'Cybersecurity Practice Labs',
      description: 'Performed vulnerability scanning, enumeration, and penetration testing exercises in simulated environments (TryHackMe Labs).',
      tags: ['Cybersecurity', 'Penetration Testing', 'Network Scanning'],
      color: 'from-purple-500/20 to-pink-500/20',
      border: 'group-hover:border-pink-500/50'
    }
  ];

  return (
    <section className="relative w-full min-h-screen bg-[#121212] py-32 px-6 md:px-12 lg:px-24 z-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">Selected Work</h2>
          <div className="h-1 w-24 bg-white/20 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, idx) => (
            <Tilt 
              key={idx}
              tiltMaxAngleX={15} 
              tiltMaxAngleY={15}
              perspective={1000}
              scale={1.05}
              transitionSpeed={2000}
              className="group cursor-pointer"
            >
              <div 
                className={`relative overflow-hidden rounded-3xl bg-[#1a1a1a] shadow-2xl transition-all duration-500 border border-white/5 ${project.border} h-full`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Image Placeholder / Gradient area */}
                <div 
                  className={`w-full h-64 md:h-80 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden relative`}
                  style={{ transform: 'translateZ(20px)' }}
                >
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-500 shadow-2xl">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
                
                {/* Content area */}
                <div 
                  className="p-8 md:p-10 backdrop-blur-xl bg-gradient-to-t from-black/80 to-transparent"
                  style={{ transform: 'translateZ(40px)' }}
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-lg mb-8 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag, tagIdx) => (
                      <span key={tagIdx} className="px-4 py-1.5 text-sm font-medium text-gray-300 bg-white/5 border border-white/10 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}
