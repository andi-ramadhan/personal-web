export default function Navbar() {
  return (
    <div className="flex gap-10 fixed bottom-5 z-1 bg-none backdrop-blur-xl rounded-xl shadow-2xl p-4 justify-center">
      <a href="#">
        <img
          src="/images/home.svg"
          className="size-7 opacity-50"
        />
      </a>
      <a href="#works">
        <img
          src="/images/work.svg"
          className="size-7 opacity-50"
        />
      </a>
      <a href="#contact">
        <img
          src="/images/contact.svg"
          className="size-7 opacity-50"
        />
      </a>
    </div>
  )
}