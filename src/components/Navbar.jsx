export default function Navbar() {
  return (
    <div className={`
      flex gap-10 fixed top-5 z-1 bg-none backdrop-blur-sm rounded-xl ring-1 ring-purple-200 shadow-md p-4 justify-center
      [&>a]:size-7 [&>a]:opacity-70 [&>a]:font-thin
      `} >
      <a href="#">
        <img
          src="/images/home.svg"
        />
      </a>
      <a href="#works">
        <img
          src="/images/work.svg"
        />
      </a>
      <a href="#contact">
        <img
          src="/images/contact.svg"
        />
      </a>
    </div >
  )
}