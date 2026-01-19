import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { BsArrowRight, BsCodeSlash, BsMusicNoteBeamed, BsDatabase, BsGithub, BsLink45Deg } from "react-icons/bs";

export default function ProjectCard({ title, description, details, technologies, link }) {
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

  // trying icon based on title
  const getIcon = () => {
    if (title.toLowerCase().includes("music") || title.toLowerCase().includes("vocal")) {
      return title.toLowerCase().includes("api") ? <BsDatabase /> : <BsMusicNoteBeamed />;
    }
    return <BsCodeSlash />;
  };

  return (
    <>
      <div
        onClick={openModal}
        className="group cursor-pointer flex flex-col p-8 md:p-10 rounded-[2.5rem] bg-white border border-purple-200 sm:border-slate-100 shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-purple-200/50 hover:-translate-y-2"
      >
        <div className="flex justify-between items-start mb-8">
          <div className="p-5 rounded-2xl bg-purple-600 text-white sm:bg-slate-50 sm:text-slate-900 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 text-3xl">
            {getIcon()}
          </div>
          <div className="p-3 rounded-full border border-slate-100 bg-purple-200 text-gray-600 sm:bg-transparent sm:text-slate-400 group-hover:text-purple-600 group-hover:border-purple-100 transition-all duration-300">
            <BsArrowRight className="-rotate-45 font-bold group-hover:rotate-0 transition-transform duration-300" />
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
                <p>{description}</p>
                {details && <p className="border-l-4 border-purple-100 pl-6 italic text-slate-500">{details}</p>}
              </div>

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

              <div className="pt-6 border-t border-slate-100">
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 w-full md:w-auto px-8 py-4 bg-slate-900 text-white font-semibold rounded-2xl hover:bg-purple-600 transition-all shadow-lg shadow-slate-200 group"
                >
                  {link?.includes("github.com") ? <BsGithub /> : <BsLink45Deg className="text-xl" />}
                  <span>{link?.includes("github.com") ? "Source Code" : "Live Demo"}</span>
                  <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}