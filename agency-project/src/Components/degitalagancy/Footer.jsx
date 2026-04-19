import React from 'react'

import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { SiXstate } from "react-icons/si";

function Footer() {
  return (

    <>
    <div className=' px-20 py-10 dark:text-white bg-gray-100 dark:bg-gray-900/50 mt-10 '>
        <div className='grid grid-cols-2 gap-10'>
             <div >
            <h2 className='text-3xl mb-4'>Agency.ai</h2>
            <p className='justify text-sm mb-4 max-w-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum explicabo libero sapiente nihil placeat! Laboriosam quae cumque voluptatum nostrum est!</p>
           <ul className='flex gap-8'>
            <li><a className='text-lg hover:text-primary' href="#home">Home</a></li>
            <li><a className='text-lg hover:text-primary' href="#survices">Survices</a></li>
            <li><a className='text-lg hover:text-primary' href="#ourwork">Ourwork</a></li>
            <li><a className='text-lg hover:text-primary' href="#contact">ContactUs</a></li>
           </ul>
        </div>
        <div>
            <h2 className='text-xl mb-2'>Subscribe our newseiffer</h2>
            <p className='text-sm mb-4 max-w-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nobis rerum repellendus, officiis voluptates reprehender.</p>
            <div className='flex gap-2'>
                <input type="email" placeholder='Enter Your Email' className='border w-full rounded-lg border-gray-300 text-lg outline-none p-2' />
                <button type="submit" className='px-10 py-2 text-sm rounded-lg bg-primary'>Subscribe</button>
            </div>
        </div>
        </div>
       
        <hr className='bg-gray-400 my-4'/>
        <div className='flex justify-between'>
             <p>@cpy rooa graea -fl;a</p>
             <div className='flex gap-5'>
                <CiFacebook  className='w-10 h-10 rounded-full text-gray-500'/>
                <CiTwitter  className='w-10 h-10 rounded-full text-gray-500'/>
                <CiLinkedin  className='w-10 h-10 rounded-full text-gray-500'/>
                <SiXstate  className='w-10 h-10 rounded-full text-gray-500'/>
            
             </div>
        </div>
       

    </div>

      

    </>
    
  )
}

export default Footer