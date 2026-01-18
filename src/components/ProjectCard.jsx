import { useState, useEffect } from "react"
import { createPortal } from "react-dom"

export default function ProjectCard({ title, description, details, technologies, link }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => { setIsModalOpen(true) };
  const closeModal = () => { setIsModalOpen(false) };

  // Handle body scroll locking when modal is open
  useEffect(() => {
    if (isModalOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isModalOpen]);

  return (
    <>
      <div className="flex items-center rounded-xl shadow-sm px-4 py-2 ring-1 ring-purple-300 hover:bg-purple-50 transition-colors">
        <button onClick={openModal} className="w-full text-left">
          <h3 className="text-lg">{title}</h3>
        </button>
      </div>

      {isModalOpen && createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl py-6 px-8 max-w-lg w-full shadow-xl relative ring-1 ring-purple-200 animate-in fade-in zoom-in duration-200">
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-gray-400 hover:text-black transition-colors text-xl"
            >
              ✕
            </button>

            <div className="flex flex-col gap-4 [&>p]:text-gray-600 leading-relaxed text-pretty">
              <div>
                <h2 className="text-sm font-bold text-purple-600 uppercase tracking-wider mb-1">Project Details</h2>
                <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
              </div>

              <div className="space-y-3">
                <p>{description}</p>
                {details && <p>{details}</p>}
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-500 mb-2">Technologies used:</p>
                <ul className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <li key={index} className="text-xs rounded-lg px-3 py-1 bg-purple-200 text-purple-800 font-semibold">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2"
              >
                <button className="w-full bg-yellow-300 font-bold px-4 py-3 rounded-xl hover:bg-yellow-400 transition-all shadow-md active:transform active:scale-95">
                  {link?.startsWith("https://github.com") ? "View Github" : "View Project"}
                </button>
              </a>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}