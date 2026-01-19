import { BsArrowDown, BsDownload } from "react-icons/bs";

export default function ProfileHead() {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center py-16 px-6 relative overflow-hidden">

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-50/50 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl w-full relative z-10 space-y-12">

        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-8">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-600 text-[10px] font-bold uppercase tracking-widest border border-green-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for new projects
            </div>

            <h1 className="text-5xl md:text-8xl font-serif text-slate-900 tracking-tight leading-[0.9]">
              Halo, <br />
              I'm <span className="text-purple-600 italic">Andi</span>
            </h1>
          </div>

          <div className="relative group shrink-0">
            <div className="absolute -inset-1 bg-linear-to-r from-purple-600 to-blue-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative size-40 md:size-48 rounded-full border-4 border-white bg-white overflow-hidden shadow-2xl">
              <img
                src='/images/pfp.png'
                alt="Andi Fajar Ramadhan"
                className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        </div>

        {/* about */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 p-8 md:p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm space-y-6">
            <h2 className="text-xl font-bold text-slate-900 uppercase tracking-widest">About Me</h2>
            <p className="text-lg md:text-2xl text-slate-500 font-sans font-light leading-relaxed">
              Merging <span className="text-slate-900 font-normal">4+ years</span> of IT Support expertise with a passion for building <span className="text-slate-900 font-normal">applications</span>. I bridge the gap between technical infrastructure and creative code. For me, code is not only about the logic, but also about the <span className="text-slate-900 font-normal">art and experience.</span>
            </p>
            <div className="pt-4">
              <a
                href="/CV - Andi Fajar Ramadhan.PDF"
                download
                className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-slate-50 text-slate-900 border border-slate-100 font-semibold hover:bg-slate-900 hover:text-white transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-slate-200/50"
              >
                <BsDownload className="text-lg" />
                <span>Download CV</span>
              </a>
            </div>
          </div>

          <div className="p-8 md:p-10 rounded-[2.5rem] bg-slate-900 text-white shadow-xl space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <h2 className="text-sm font-bold text-purple-400 uppercase tracking-widest">Stack</h2>
              <ul className="space-y-2 text-sm font-sans  text-slate-300 [&>li]:bg-slate-800 [&>li]:px-2 [&>li]:py-1 [&>li]:rounded-lg [&>li]:tracking-wider">
                <li>React.js / Vite</li>
                <li>Node.js / Express</li>
                <li>PostgreSQL</li>
                <li>TailwindCSS</li>
              </ul>
            </div>
            <div className="pt-4 border-t border-slate-800">
              <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Based in South Tangerang, ID</p>
            </div>
          </div>
        </div>

        {/* scroll indicator */}
        <div className="flex justify-center pt-8 animate-bounce">
          <a href="#works" className="p-4 rounded-full border border-slate-100 text-purple-600 hover:bg-purple-600 hover:text-white transition-colors">
            <BsArrowDown />
          </a>
        </div>
      </div>
    </section>
  );
}
