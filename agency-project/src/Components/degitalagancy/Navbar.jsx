import React from 'react'
import ThemeToggle from './ThemeToggle'

function Navbar({theme, setTheme}) {
  return (
    <div className='flex px-20 py-2 justify-between bg-gray-50 text-center fixed lg:w-full mb-40 dark:bg-gray-900/90 dark:text-white'>
        <h1 className='text-2xl mt-2 '>Agency.ai</h1>
        <div className='flex gap-7 items-center justify-center dark:text-white' >
            <a className='text-xl ' href="#hero">Home</a>
            <a className='text-xl ' href="#survices">Survicese</a>
            <a className='text-xl ' href="#ourwork">Users</a>
            <a className='text-xl ' href="#contact">Contact Us</a>
            {/* <a className='text-xl ' href="#">Contact Us</a> */}
        </div>

        <div className='flex gap-3 text-center '>
          <ThemeToggle  theme={theme} setTheme={setTheme}/>
            <button className='px-6 bg-blue-600 rounded-full text-white'>Contact</button>
        </div>
    </div>
  )
}

export default Navbar