import ScrollyCanvas from '@/components/ScrollyCanvas';
import Projects from '@/components/Projects';
import EducationAndSkills from '@/components/EducationAndSkills';

export default function Home() {
  return (
    <main className="w-full bg-[#121212] flex flex-col items-center">
      {/* 
        ScrollyCanvas handles its own 500vh container.
        Inside it, sticky elements stick to the viewport while 
        the container scrolls past. 
      */}
      <ScrollyCanvas />
      
      {/* 
        Projects renders normally below the 500vh ScrollyCanvas.
      */}
      <Projects />

      {/* 
        Education & Skills Section
      */}
      <EducationAndSkills />

      {/* 
        Simple Footer with contact info
      */}
      <footer className="w-full bg-[#0a0a0a] py-12 px-6 flex flex-col items-center justify-center border-t border-white/5 z-20">
        <h2 className="text-2xl font-bold text-white mb-4">Let&apos;s Connect</h2>
        <div className="flex flex-col md:flex-row gap-4 items-center mb-8">
          <a href="mailto:seethuchowdary18@gmail.com" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            seethuchowdary18@gmail.com
          </a>
          <span className="hidden md:block text-gray-600">|</span>
          <span className="text-gray-400 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            8978263158
          </span>
        </div>
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} Chintanippu Seethu. All rights reserved.</p>
      </footer>
    </main>
  );
}
