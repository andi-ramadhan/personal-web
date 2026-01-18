import { BsEnvelope, BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";

export default function Contact() {
  return (
    <>
      <div id="contact" className="flex flex-col justify-center items-center leading-relaxed text-pretty min-h-screen w-full ">
        <div className="flex flex-col gap-3 shadow-2xl backdrop-blur-xl bg-white/20 rounded-xl p-5 [&>p]:text-md w-full">
          <h1 className="text-4xl pb-3 text-center text-purple-700">Contact Me</h1>
          <div className="flex gap-8 justify-center items-center">
            <a href="mailto:ramadhanfajar.ara@gmail.com?subject=Interested%20By%20Your%20Personal%20Website&body=Hi%20Andi!" target="_blank">
              <BsEnvelope className="size-8 text-amber-800" />
            </a>
            <a href="https://wa.me/6281291678841" target="_blank">
              <BsWhatsapp className="size-7 text-green-600" />
            </a>
            <a href="https://www.linkedin.com/in/andi-fajar-ramadhan/" target="_blank">
              <BsLinkedin className="size-7 text-blue-600" />
            </a>
            <a href="https://github.com/andi-ramadhan" target="_blank">
              <BsGithub className="size-7" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}