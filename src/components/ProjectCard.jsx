import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { BsGithub, BsLink45Deg } from "react-icons/bs";

export default function ProjectCard({ title, projectImg, imgAlt, description, details, technologies, live, github }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    if (isModalOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isModalOpen]);

  return (
    <>
      {/* Mobile view: thin card list */}
      <div
        onClick={openModal}
        className="md:hidden flex items-center justify-between p-6 rounded-2xl bg-white border border-slate-100 shadow-sm active:scale-[0.98] transition-all"
      >
        <div className="space-y-1">
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
          <p className="text-sm text-slate-500 line-clamp-1 italic">{description}</p>
        </div>
        <div className="text-purple-600 font-medium text-sm">View</div>
      </div>

      {/* Desktop view: original horizontal card */}
      <div
        onClick={openModal}
        className="hidden md:block snap-center flex-none group cursor-pointer w-130 p-8 md:p-10 rounded-[2.5rem] bg-white border border-purple-200 sm:border-slate-100 shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-purple-200/50 hover:-translate-y-2"
      >
        <div className="flex justify-between items-start mb-8">
          <div>
            <img src={`${projectImg}`} alt={`${imgAlt}`} className="rounded-2xl" />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-slate-900 leading-tight">
            {title}
          </h3>
          <p className="text-slate-500 font-sans font-light leading-relaxed line-clamp-2 italic">
            {description}
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {technologies.slice(0, 3).map((tech, index) => (
            <span key={index} className="text-[10px] uppercase tracking-wider font-bold text-slate-400">
              {tech}
            </span>
          ))}
          {technologies.length > 3 && (
            <span className="text-[10px] uppercase tracking-wider font-bold text-slate-300">
              +{technologies.length - 3} more
            </span>
          )}
        </div>
      </div>

      {isModalOpen && createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-md animate-in fade-in duration-300"
            onClick={closeModal}
          ></div>

          <div className="bg-white rounded-[2.5rem] py-10 px-8 md:px-12 max-w-2xl w-full shadow-2xl relative z-10 animate-in zoom-in-95 duration-300 overflow-y-auto max-h-[90vh]">
            <button
              onClick={closeModal}
              className="absolute top-8 right-8 p-2 rounded-full hover:bg-slate-50 text-slate-400 hover:text-slate-900 transition-all text-xl"
            >
              ✕
            </button>

            <div className="space-y-8">
              <header className="space-y-4">
                <div className="inline-block px-4 py-1.5 rounded-full bg-purple-50 text-purple-600 text-xs font-bold uppercase tracking-widest">
                  Project Case Study
                </div>
                <h3 className="text-3xl md:text-4xl font-serif text-slate-900 leading-tight">{title}</h3>
              </header>

              <div className="space-y-6 text-slate-600 font-sans font-light leading-relaxed text-lg">
                <div className="rounded-3xl overflow-hidden border border-slate-100 shadow-inner bg-slate-50 mb-8">
                  <div className="px-6 py-3 bg-slate-50 border-b border-slate-100 text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">
                    Project Preview
                  </div>
                  <img src={`${projectImg}`} alt={`${imgAlt}`} className="w-full h-auto object-cover" />
                </div>
                <p>{description}</p>
                {details && <p className="border-l-4 border-purple-100 pl-6 italic text-slate-500">{details}</p>}
              </div>

              {/* tech stack */}
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest">Stack</h4>
                <ul className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <li key={index} className="text-xs rounded-xl px-4 py-2 bg-slate-50 text-slate-600 border border-slate-100 font-medium">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              {/* button inside card */}
              <div className="pt-6 border-t border-slate-100">
                <div className="flex flex-col md:flex-row items-center gap-3">
                  {live && (
                    <a
                      href={live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 w-full md:w-auto px-8 py-4 bg-slate-900 text-white font-semibold rounded-2xl hover:bg-purple-600 transition-all shadow-lg shadow-slate-200 group"
                    >
                      View Live
                      <BsLink45Deg className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  )}

                  {github && (
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 w-full md:w-auto px-6 py-4 bg-white text-slate-900 font-semibold rounded-2xl hover:bg-slate-50 transition-all border border-slate-100 shadow-sm"
                    >
                      <BsGithub />
                      View Source
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}