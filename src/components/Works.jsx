import ProjectCard from "./ProjectCard";
import { projectData } from "./Projects.Data";

export default function Works() {
  const projects = projectData;

  return (
    <section id="works" className="min-h-screen w-full flex flex-col items-center justify-center py-24 px-6 relative overflow-hidden">
      {/* bg */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl w-full space-y-16 relative z-10">
        <div className="space-y-6 text-center">
          <h2 className="text-5xl md:text-7xl font-serif text-slate-900 tracking-tight leading-tight">
            Selected <span className="text-purple-600 italic">Works</span>
          </h2>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto font-sans font-light leading-relaxed">
            A collection of projects where I've blended technical precision with creative problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
            />
          ))}
        </div>

        <div className="pt-12 text-center">
          <p className="text-slate-400 text-xs tracking-[0.2em] uppercase font-medium">More projects coming soon</p>
          <div className="mt-4 h-px w-12 bg-slate-200 mx-auto"></div>
        </div>
      </div>
    </section>
  );
}
