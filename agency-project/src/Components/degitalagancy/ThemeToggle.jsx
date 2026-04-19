import React, { useEffect } from 'react'
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";


function ThemeToggle({theme,setTheme}) {

    useEffect(()=>{
        if(theme==='dark'){
            document.documentElement.classList.add('dark')
        }else{
            document.documentElement.classList.remove('dark')
        }
    },[theme])
  return (
    <>
   <button>
     {theme === 'dark' ? (
        <button className='border w-8 h-8 rounded-full border-white pl-0.5' onClick={()=>{setTheme('light')}}> {<IoSunnyOutline className='w-6 h-6 rounded-full' />} </button>
    ) :(
    <button className='w-8 h-8 rounded-full border border-black pl-1'  onClick={()=>{setTheme('dark')}}><IoMoonOutline className='w-6 h-6 rounded-full' /></button>

    )}
   </button>
    
    </>
  )
}

export default ThemeToggle