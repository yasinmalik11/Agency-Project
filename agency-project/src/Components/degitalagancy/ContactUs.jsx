import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { IoMdContact } from "react-icons/io";

function ContactUs() {
  return (
    <div id='contact' className='flex flex-col items-center mt-20 dark:text-white'>
         <div className='text-center dark:text-white mt-4'>
            <h2 className='text-6xl font-medium '>How i am help you</h2>
            <p className=' mt-5 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit.  Pariatur, quibusdam. <br /> Dolore vitae culpa ab voluptatibus repellendus beatae facere </p>
        </div>
        <form className='grid gap-3 p-10  mt-10 dark:bg-gray-900/30 rounded-4xl' >

            <div className='flex gap-7'>
               <div>
                <p className='mb-2 text-sm font-medium'>Your Name</p>
                <div className='flex gap-2 border border-gray-300 dark:border-gray-600 '>
                    <IoMdContact  className='w-10 h-10 rounded-full text-gray-500 p-1 '/>

                    <input type="text" placeholder='Enter Your Name' className=' w-full text-sm p-3 outline-none' />
                </div>
            </div>

             <div>
                <p className='mb-2 text-sm font-medium'>Email</p>
                <div className='flex gap-3 border border-gray-300 '>
                <MdOutlineMail className='w-10 h-10 rounded-full p-1 text-gray-500' />

                    <input type="text" placeholder='Enter Your email id' className=' w-full text-sm p-3 outline-none' />
                </div>
            </div>
            </div>
            <div>
                <p className='text-sm mb-2 font-medium'>Message</p>
                <textarea rows={8} placeholder='Enter your Meassge' className='w-full text-sm p-3 outline-none border border-gray-300'/>
            </div>
            <button type="submit" className='w-max px-8 py-3 bg-primary text-sm font-semibold text-white rounded-full'>summit</button>            
        </form>
    </div>
  )
}

export default ContactUs