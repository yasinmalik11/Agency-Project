import React from 'react'

function Hero() {
  return (
    <div id='hero' className='text-center p-20  dark:text-white '>
        <div className='inline-flex border-2 p-1 rounded-full mb-3 mt-10
         '>
            <p>Trust 10k followers of</p>
        </div>
        <h1 className='text-8xl mb-7'>Ai create imagination <br /> <span className='text-shadow-indigo-700 text-blue-700 dark:text-blue-500'>degital</span> impact.</h1>
        <p className='mb-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi suscipit perspiciatis veritatis molestias repellendus <br /> voluptate iste fugit consectetur excepturi ex repellat ut, delectus, ullam, atque voluptatum <br /> voluptas quibusdam! Dignissimos, tempora.</p>

        <img  className='w-full h-150 rounded-4xl ' src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa" alt="" />
    </div>
  )
}

export default Hero