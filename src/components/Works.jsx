export default function Works() {
  return (
    <div className="flex flex-col justify-center items-center leading-relaxed text-pretty h-screen w-full">
      <div className="flex flex-col gap-3 shadow-2xl backdrop-blur-xl bg-white/20 rounded-xl p-5 [&>p]:text-md w-full">
        <h1 className="text-4xl pb-3" id="works">My Works</h1>
        <div className="container flex flex-col gap-2 w-full">

          <div className="grid grid-cols-8 rounded-xl shadow-xl px-4 py-2">
            <h3 className="text-lg col-span-7">SiiChiSei Vocal Course Website</h3>
            <a href={"https://siichisei-vocalcourse.pages.dev"} className="text-sm col-span-1 shadow-lg flex justify-center items-center rounded-xl bg-purple-400">
              <img
                src="src/assets/arrow.svg"
                className="size-5 rotate-90 animate-bounce -translate-x-1"
              />
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}