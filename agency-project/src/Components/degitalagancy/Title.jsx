import React from 'react'

function Title({title,desc}) {
  return (
    <>
     <h2 className='text-3xl sm:text-5xl font-medium '>{title}</h2>
     <p className='text-center mt-8 max-w-lg w-full'>{desc}</p>
    </>
  )
}

export default Title