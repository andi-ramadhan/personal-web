import { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { projectData } from "./Projects.Data";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Works() {
  const scrollRef = useRef(null);
  const projects = projectData;

  const scroll = (direction) => {
    if (scrollRef.current) {
      // Find the first actual project card (skipping the spacer)
      const firstCard = scrollRef.current.querySelector('.flex > .snap-center');
      const gap = 20;
      const cardWidth = firstCard ? firstCard.offsetWidth + gap : 540;
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;

      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="works" className="min-h-screen w-full flex flex-col items-center justify-center py-24 px-6 relative overflow-hidden">
      {/* bg */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-150 bg-blue-50/50 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl w-full space-y-16 relative z-10">
        <div className="space-y-6 text-center">
          <h2 className="text-5xl md:text-7xl font-serif text-slate-900 tracking-tight leading-tight">
            Selected <span className="text-purple-600 italic">Works</span>
          </h2>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto font-sans font-light leading-relaxed">
            A collection of projects where I've blended technical precision with creative problem-solving.
          </p>
        </div>

        <button
          onClick={() => scroll('left')}
          aria-label="Scroll left"
          className="hidden md:block z-50 absolute top-1/2 left-0 -translate-y-1/2 p-3 bg-slate-100 rounded shadow cursor-pointer"
        >
          <FaChevronLeft />
        </button>

        <button
          onClick={() => scroll('right')}
          aria-label="Scroll right"
          className="hidden md:block z-50 absolute top-1/2 right-2 -translate-y-1/2 p-3 bg-slate-100 rounded shadow cursor-pointer"
        >
          <FaChevronRight />
        </button>
        <div ref={scrollRef} className="max-w-6xl w-full overflow-x-auto no-scrollbar pb-8">
          <div className="flex flex-col md:flex-row md:whitespace-nowrap snap-y md:snap-x snap-mandatory scroll-smooth gap-4 md:gap-10">
            {/* Spacer start - desktop only */}
            <div className="hidden md:block flex-none w-[calc(50vw-45rem)]" aria-hidden="true" />

            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                {...project}
              />
            ))}

            {/* Spacer end - desktop only */}
            <div className="hidden md:block flex-none w-[calc(50vw-45rem)]" aria-hidden="true" />
          </div>
        </div>

        <div className="pt-12 text-center">
          <p className="text-slate-400 text-xs tracking-[0.2em] uppercase font-medium">More projects coming soon</p>
          <div className="mt-4 h-px w-12 bg-slate-200 mx-auto"></div>
        </div>
      </div>
    </section>
  );
}
