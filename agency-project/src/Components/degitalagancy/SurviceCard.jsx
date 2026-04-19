import React from 'react'

function SurviceCard({survice}) {
    
    
  return (
    <div className='flex shadow-xl rounded-2xl bg-white text-black dark:text-white dark:bg-gray-900/70 dark:border-blue-950 dark:'>
            {/* <h1 className='text-8xl'>Hello</h1> */}
    <img width={100} className='p-2 rounded-full' src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa" alt="" />
        <div className=' p-5 '>
            <h2 className='text-2xl '>{survice.title}</h2>
            <p>{survice.descreption}</p>
        </div>
    </div>
  )
}

export default SurviceCard