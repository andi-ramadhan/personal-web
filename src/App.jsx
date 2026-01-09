import './App.css'
import Navbar from './components/Navbar'
import ProfileHead from './components/ProfileHead'

function App() {

  return (
    <>
      <div className='w-full h-screen flex justify-center items-center absolute bg-radial from-purple-300 via-10% to-yellow-100'></div>
      <header className='flex justify-center'>
        <Navbar />
      </header>
      <main className='flex flex-col justify-center h-screen mx-4'>
        <ProfileHead />
      </main>
    </>
  )
}

export default App
