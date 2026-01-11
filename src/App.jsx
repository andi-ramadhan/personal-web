import './App.css'
import Navbar from './components/Navbar'
import ProfileHead from './components/ProfileHead'
import Works from './components/Works'

function App() {

  return (
    <>
      <div className='w-full h-screen fixed justify-center items-center bg-radial from-purple-300 via-10% to-yellow-100'></div>
      <header className='flex justify-center'>
        <Navbar />
      </header>
      <main className='flex flex-col justify-center items-center px-3 min-h-screen w-full overflow-hidden'>
        <ProfileHead />
        <Works />
      </main>
    </>
  )
}

export default App
