import React from 'react'

const AboutMe = () => {
  return (
    <>
    <div className='flex pb-6'>

<div className='w-1/2 text-zinc-400 p-6  flex flex-col  '>
<div className='py-6'>
<h2 className='font-semibold text-sm mb-1'>Hello! i&apos;m Muhammad Salman </h2>
<p className='text-sm leading-6'>Web Designer from Pakistan. I have rich experience in web site
Design and building, also i m good in Network Administrator. I love to
talk with you about our unique.
</p>
</div>


</div>
<div className='w-1/2 p-6'>
    <ul>
<li className='text-zinc-400 text-sm font-normal flex justify-between 
items-center border-gray-800 py-2'><span className='bg-yellow-300 text-black 
uppercase px-4 py-1 rounded-md'>Residence:</span>PAK</li>

<li className='text-zinc-400 text-sm font-normal flex justify-between 
items-center border-gray-800 py-2'><span className='bg-yellow-300 text-black 
uppercase px-4 py-1 rounded-md'>Freelance:</span>Available</li>


<li className='text-zinc-400 text-sm font-normal flex justify-between 
items-center border-gray-800 py-2'><span className='bg-yellow-300 text-black 
uppercase px-4 py-1 rounded-md'>Address:</span>Lahore, PAK</li>

    </ul>
</div>


    </div>
    <h1 className='font-bold font-serif text-xl capitalize text-white
relative z-10 px-6 py-3  group'><span className='text-yellow-300'>My </span>Services</h1>
    </>
  )
}

export default AboutMe