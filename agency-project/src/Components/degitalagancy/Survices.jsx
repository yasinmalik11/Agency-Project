import React from 'react'
import SurviceCard from './SurviceCard'

function Survices() {

    const survicesdata = [
        {title:'AAAAAaaa',
        descreption:'lorem lorem lorem lorem lorem'
        },
         {title:'AAAAAaaa',
        descreption:'lorem lorem lorem lorem lorem'
        },
         {title:'AAAAAaaa',
        descreption:'lorem lorem lorem lorem lorem'
        },
         {title:'AAAAAaaa',
        descreption:'lorem lorem lorem lorem lorem'
        },
        
        
    ]
  return (
    <div>
        <div id='survices' className='text-center dark:text-white mt-4'>
            <h2 className='text-6xl font-medium '>How i am help you</h2>
            <p className=' mt-5 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit.  Pariatur, quibusdam. <br /> Dolore vitae culpa ab voluptatibus repellendus beatae facere </p>
        </div>
        <div className='flex flex-col gap-10 mt-10 px-30 md:grid grid-cols-2 mb-15 '>
            {survicesdata.map((survice,index)=>(
                <SurviceCard key={index} survice={survice} index={index}/>
            ))}
        </div>
    </div>
  )
}

export default Survices