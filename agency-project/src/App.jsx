import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Navbar from './Components/degitalagancy/Navbar'
import Hero from './Components/degitalagancy/Hero'
import Survices from './Components/degitalagancy/Survices'
import Ourwork from './Components/degitalagancy/Ourwork'
import Ourteam from './Components/degitalagancy/Ourteam'
import ContactUs from './Components/degitalagancy/ContactUs'
import Footer from './Components/degitalagancy/Footer'
import './App.css'
// import Ourwork from './Components/degitalagancy/Ourwork'

function App() {
  const [count, setCount] = useState(0)
      const [theme, setTheme] = useState('light')

  return (
    <>
      <div className='dark:bg-black  relative '>

  <Navbar theme={theme} setTheme={setTheme}/>
    <Hero/>
    <Survices/>
    <Ourwork/>
    <Ourteam/>
    <ContactUs/>
    <Footer/> 
    
    </div>
    </>
  )
}

export default App
