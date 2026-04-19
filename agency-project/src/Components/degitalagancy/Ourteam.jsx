import React from 'react'

function Ourteam() {

    const teamdata =[
        {name:'Anjum',
         desc:'Hi this is Anjum',
         img:'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb'
        },
         {name:'Anjum',
         desc:'Hi this is Anjum',
         img:'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb'
        },
         {name:'Anjum',
         desc:'Hi this is Anjum',
         img:'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb'
        },
         {name:'Anjum',
         desc:'Hi this is Anjum',
         img:'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb'
        },
         {name:'Anjum',
         desc:'Hi this is Anjum',
         img:'https://images.unsplash.com/photo-1578683010236-d716f9a3f461'
        },
         {name:'Anjum',
         desc:'Hi this is Anjum',
         img:'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb'
        },
         {name:'Anjum',
         desc:'Hi this is Anjum',
         img:'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb'
        },
         {name:'Anjum',
         desc:'Hi this is Anjum',
         img:'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb'
        },
    ]
  return (
    <div className='mt-20'>
        <div className='text-center dark:text-white'>
            <h2 className='text-6xl font-medium '>Meet the team</h2>
            <p className=' mt-5 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit.  Pariatur,<br /> quibusdam.  Dolore vitae culpa ab  voluptatibus.</p>
        </div>
        <div className='grid grid-cols-4 px-20 mt-10 gap-11'>
            {teamdata.map((team,idx)=>{
             return   <div className='flex dark:bg-gray-900/70 dark:text-white hover:scale-105  rounded-xl bg-white shadow-2xl mb-4
            py-2 px-1 gap-7 ' key={idx}>
                    <img className='w-15 h-15 rounded-full ' src={team.img} alt="Hello" />
                    <div className=''>
                        <h2>{team.name}</h2>
                        <p>{team.desc}</p>
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Ourteam