import './App.css'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import ProfileHead from './components/ProfileHead'
import Works from './components/Works'

function App() {

  return (
    <>
      <div className='w-full h-screen fixed bg-white'></div>
      <header className='flex justify-center'>
        <Navbar />
      </header>
      <main className='flex flex-col items-center px-5 min-h-screen w-full overflow-x-hidden'>
        <ProfileHead />
        <Works />
        <Contact />
      </main>
    </>
  )
}

export default App
