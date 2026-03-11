export default function EducationAndSkills() {
  const skills = [
    { category: 'Programming', items: ['Python', 'Embedded C', 'Bash (Linux)'] },
    { category: 'Cybersecurity', items: ['Penetration Testing Fundamentals', 'Vulnerability Assessment', 'Network Scanning'] },
    { category: 'Certifications', items: ['MATLAB Onramp', 'Machine Learning Onramp – MATLAB'] },
    { category: 'Soft Skills', items: ['Analytical Thinking', 'Self-Learning', 'Technical Research'] },
  ];

  const education = [
    {
      degree: 'Bachelor of Technology Computer and Communication Engineering',
      institution: 'Amrita Vishwa Vidyapeetham, Coimbatore',
      period: '2022 - 2026',
    },
    {
      degree: 'Intermediate (MPC)',
      institution: 'Sri Chaitanya Junior College, Khammam',
      period: '2020 - 2022',
    }
  ];

  return (
    <section className="relative w-full bg-[#121212] py-32 px-6 md:px-12 lg:px-24 border-t border-white/10 z-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* Education Column */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Education</h2>
          <div className="space-y-12">
            {education.map((item, idx) => (
              <div key={idx} className="relative pl-8 border-l border-white/20">
                <div className="absolute w-4 h-4 rounded-full bg-blue-500 -left-[9px] top-1"></div>
                <h3 className="text-2xl font-bold text-white mb-2">{item.degree}</h3>
                <h4 className="text-xl text-gray-400 mb-2">{item.institution}</h4>
                <p className="text-blue-400 font-medium">{item.period}</p>
              </div>
            ))}
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 mt-20">Volunteering</h2>
          <div className="relative pl-8 border-l border-white/20">
            <div className="absolute w-4 h-4 rounded-full bg-emerald-500 -left-[9px] top-1"></div>
            <h3 className="text-2xl font-bold text-white mb-2">Member of National Service Scheme (NSS)</h3>
          </div>
        </div>

        {/* Skills Column */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Skills & Expertise</h2>
          <div className="space-y-12">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="bg-[#1a1a1a] p-8 rounded-3xl border border-white/5 shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((item, itemIdx) => (
                    <span 
                      key={itemIdx} 
                      className="px-4 py-2 text-sm md:text-base font-medium text-gray-300 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
