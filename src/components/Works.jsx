import { useState, useEffect } from "react"

const Modal = ({ onClose }) => {
  useEffect(() => {
    // prevent scrolling on the body when the modal is open
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    // re-enable scrolling when the modal is closed
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-xs p-5">
      <div className="bg-gray-100 rounded-2xl p-8 max-w-lg w-full shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-8 right-8 text-gray-500 hover:text-black transition-colors"
        >
          ✕
        </button>

        <div className="flex flex-col gap-2 [&>p]:text-gray-600">
          <h2 className="text-2xl font-semibold mb-4">Project Details</h2>
          <h3 className="text-xl text-gray-800">SiiChiSei Vocal Course Website</h3>
          <p>
            A Company Web profile for SiiChiSei Vocal Course, a Vocal Course Company that held in Online based for any people in Indonesia.
          </p>
          <p>
            In this project, I ensure the clarity, accessibility, and user-friendly interface for the website.
          </p>
          <p>Technologies used:</p>
          <ul className="flex gap-1 [&>li]:rounded-lg [&>li]:px-3 [&>li]:py-1 [&>li]:bg-purple-300 text-sm text-gray-800">
            <li>React.js + Vite</li>
            <li>Node.js</li>
            <li>EmailJS</li>
          </ul>
          <a href="https://sichisei.vercel.app/" target="_blank" rel="noopener noreferrer">
            <button className="bg-purple-300 px-4 py-2 rounded-lg text-white hover:bg-purple-400 transition-colors">
              View Project
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Works() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => { setIsModalOpen(true) };
  const closeModal = () => { setIsModalOpen(false) };

  const handleModal = () => {
    if (isModalOpen) {
      closeModal();
    } else {
      openModal();
    }
  }

  return (
    <div className="flex flex-col justify-center items-center leading-relaxed text-pretty h-screen w-full">
      {isModalOpen && <Modal onClose={closeModal} />}
      <div className="flex flex-col gap-3 shadow-2xl backdrop-blur-xl bg-white/20 rounded-xl p-5 [&>p]:text-md w-full">
        <h1 className="text-4xl pb-3" id="works">My Works</h1>
        <div className="container flex flex-col gap-2 w-full">

          <div className="flex items-center rounded-xl shadow-sm px-4 py-2 ring-1 ring-purple-300">
            <button onClick={handleModal} className="w-full text-left">
              <h3 className="text-lg col-span-7">SiiChiSei Vocal Course Website</h3>
            </button>
          </div>
          <div className="flex items-center rounded-xl shadow-sm px-4 py-2 ring-1 ring-purple-300">
            <h3 className="text-lg col-span-7">SiiChiSei Vocal Course Website</h3>
          </div>
        </div>
      </div>
    </div>
  )
}