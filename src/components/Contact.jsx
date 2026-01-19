import { useState } from "react";
import { BsEnvelope, BsGithub, BsLinkedin, BsWhatsapp, BsCopy, BsCheck2 } from "react-icons/bs";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "ramadhanfajar.ara@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="min-h-screen w-full flex flex-col items-center justify-center py-24 px-6 relative overflow-hidden">
      {/* bg */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-50/50 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl w-full text-center space-y-16 relative z-10">
        <div className="space-y-6">
          <h2 className="text-5xl md:text-7xl font-serif text-slate-900 tracking-tight leading-tight">
            Let's build <span className="text-purple-600 italic">together</span>.
          </h2>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto font-sans font-light leading-relaxed">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 pt-4">
          {/* icon tiles */}

          <div className="group relative">
            <a
              href={`mailto:${email}?subject=Interested%20By%20Your%20Personal%20Website&body=Hi%20Andi!`}
              className="flex flex-col items-center justify-center aspect-square p-2 sm:p-8 rounded-2xl sm:rounded-[2.5rem] bg-white border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-purple-200/50 hover:-translate-y-2 group"
            >
              <div className="p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-amber-50 text-amber-600 group-hover:bg-amber-100 transition-colors duration-300">
                <BsEnvelope className="text-xl sm:text-3xl" />
              </div>
              <span className="mt-5 text-sm font-semibold text-slate-600 group-hover:text-slate-900 tracking-wide uppercase hidden sm:block">Email Me</span>
              <span className="mt-2 text-xs text-slate-400 opacity-0 group-hover:opacity-100 transition-all duration-300 truncate w-full px-4 overflow-hidden hidden sm:block">
                {email}
              </span>
            </a>

            <button
              onClick={copyEmail}
              className="absolute top-2 right-2 sm:top-6 sm:right-6 p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-slate-50 text-slate-400 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-slate-900 hover:text-white"
              title="Copy Email"
            >
              {copied ? <BsCheck2 className="text-green-500" /> : <BsCopy className="text-[10px] sm:text-xs" />}
            </button>

            {copied && (
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-slate-900 text-white text-[10px] rounded-lg shadow-xl animate-bounce whitespace-nowrap z-20">
                Copied!
              </div>
            )}
          </div>

          <a
            href="https://wa.me/6281291678841"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center aspect-square p-2 sm:p-8 rounded-2xl sm:rounded-[2.5rem] bg-white border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-green-200/50 hover:-translate-y-2 group"
          >
            <div className="p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-green-50 text-green-600 group-hover:bg-green-100 transition-colors duration-300">
              <BsWhatsapp className="text-xl sm:text-3xl" />
            </div>
            <span className="mt-5 text-sm font-semibold text-slate-600 group-hover:text-slate-900 tracking-wide uppercase hidden sm:block">WhatsApp</span>
            <span className="mt-2 text-xs text-slate-400 opacity-0 group-hover:opacity-100 transition-all duration-300 hidden sm:block">
              Quick Chat
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/andi-fajar-ramadhan/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center aspect-square p-2 sm:p-8 rounded-2xl sm:rounded-[2.5rem] bg-white border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-blue-200/50 hover:-translate-y-2 group"
          >
            <div className="p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition-colors duration-300">
              <BsLinkedin className="text-xl sm:text-3xl" />
            </div>
            <span className="mt-5 text-sm font-semibold text-slate-600 group-hover:text-slate-900 tracking-wide uppercase hidden sm:block">LinkedIn</span>
            <span className="mt-2 text-xs text-slate-400 opacity-0 group-hover:opacity-100 transition-all duration-300 hidden sm:block">
              Professional Network
            </span>
          </a>

          <a
            href="https://github.com/andi-ramadhan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center aspect-square p-2 sm:p-8 rounded-2xl sm:rounded-[2.5rem] bg-white border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-2 group"
          >
            <div className="p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-slate-50 text-slate-900 group-hover:bg-slate-200 transition-colors duration-300">
              <BsGithub className="text-xl sm:text-3xl" />
            </div>
            <span className="mt-5 text-sm font-semibold text-slate-600 group-hover:text-slate-900 tracking-wide uppercase hidden sm:block">GitHub</span>
            <span className="mt-2 text-xs text-slate-400 opacity-0 group-hover:opacity-100 transition-all duration-300 hidden sm:block">
              Source Code
            </span>
          </a>
        </div>

        <div className="pt-24 space-y-4">
          <p className="text-slate-400 text-xs tracking-[0.2em] uppercase font-medium">Indonesia • Remote Friendly</p>
          <div className="h-px w-12 bg-slate-200 mx-auto"></div>
        </div>
      </div>
    </section>
  );
}