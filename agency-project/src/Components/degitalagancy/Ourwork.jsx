import React from 'react'
import Title from './Title'

function Ourwork() {

  const workdata =[
    {title:'Moblide app',
    desc:'lorem hi i am malik yaseen lorem hi i am malik yaseen vlorem hi i am malik yaseen lorem hi i am malik yaseen lorem hi i am malik yaseen',
    img:'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa'},
     {title:'Moblide app',
    desc:'lorem hi i am malik yaseen lorem hi i am malik yaseen vlorem hi i am malik yaseen lorem hi i am malik yaseen lorem hi i am malik yaseen',
    img:'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa'},
     {title:'Moblide app',
    desc:'lorem hi i am malik yaseen lorem hi i am malik yaseen vlorem hi i am malik yaseen lorem hi i am malik yaseen lorem hi i am malik yaseen',
    img:'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa'},

     
  ]
  return (
    <div id='ourwork' className='mt-20'>
     <div className='text-center dark:text-white'>
            <h2 className='text-6xl font-medium '>How i am help you</h2>
            <p className=' mt-5 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit.  Pariatur, quibusdam.  Dolore <br />vitae culpa ab  voluptatibus repellendus beatae facere<br />   corporis harum!</p>
        </div>
        <div className='grid grid-cols-3 px-20 gap-10 mt-10 '>
           {workdata.map((work,idx)=>{
          return  <div className='flex-col gap-10 shadow-xl hover:scale-105 duration-100 transition-all   bg-white rounded-2xl dark:bg-gray-900/70 dark:text-white' key={idx} >
                <img className='w-full h-60 rounded-xl'  src={work.img} alt="" />
                <h2 className='px-3 py-2 text-xl font-semibold'>{work.title}</h2>
                <p className='justify px-3 pb-3'>{work.desc}</p>
            </div>
           })}
        </div>
    </div>
  )
}

export default Ourwork