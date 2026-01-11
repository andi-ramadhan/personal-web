import './App.css'
import Navbar from './components/Navbar'
import ProfileHead from './components/ProfileHead'
import Works from './components/Works'

function App() {

  return (
    <>
      <div className='w-full h-screen flex justify-center items-center fixed bg-radial from-purple-300 via-10% to-white'></div>
      <header className='flex justify-center'>
        <Navbar />
      </header>
      <main className='flex flex-col justify-center items-center px-5 min-h-screen w-full overflow-hidden'>
        <ProfileHead />
        <Works />
      </main>
    </>
  )
}

export default App
