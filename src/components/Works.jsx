import { useState } from "react"

const Modal = () => {
  return (
    <div className="fixed size-full bg-white/20 backdrop-blur-lg p-5">
      <p>Modal</p>
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
      <div className="flex flex-col gap-3 shadow-2xl backdrop-blur-xl bg-white/20 rounded-xl p-5 [&>p]:text-md w-full">
        <h1 className="text-4xl pb-3" id="works">My Works</h1>
        <div className="container flex flex-col gap-2 w-full">

          <div className="flex items-center rounded-xl shadow-sm px-4 py-2 ring-1 ring-purple-300">
            <a>
              <h3 className="text-lg col-span-7">SiiChiSei Vocal Course Website</h3>
            </a>
          </div>
          <div className="flex items-center rounded-xl shadow-sm px-4 py-2 ring-1 ring-purple-300">
            <h3 className="text-lg col-span-7">SiiChiSei Vocal Course Website</h3>
          </div>
        </div>
      </div>
    </div>
  )
}