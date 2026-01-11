export default function ProfileHead() {
  return (
    <div className="flex flex-col justify-center items-center leading-relaxed text-pretty h-screen w-full">
      <div className="flex flex-col gap-3 shadow-2xl backdrop-blur-xl bg-white/20 rounded-xl p-5 [&>p]:text-md">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-4xl pb-3">Halo, <br />I'm Andi!</h1>
          <div className="size-30 mr-4 border border-gray-400 rounded-full flex items-center justify-center">
            <img
              src='src\assets\pfp.png'
              className="size-full rounded-full object-cover bg-white/20"
            />
          </div>
        </div>
        <p>
          4+ years of experience in IT Support Specialist,
          usually handling any IT devices problem such as Desktop, Laptop, Server, and Network devices.
        </p>
        <p>
          Currently I'm expanding my skills in Full-Stack Web Development
        </p>
        <p className="text-sm">
          Tech stack: React.js, Express.js, Node.js, PostsgreSQL, TailwindCSS
        </p>
      </div>
    </div>
  )
}