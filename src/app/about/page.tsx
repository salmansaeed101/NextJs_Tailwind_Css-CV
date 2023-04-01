

import React from 'react'
import Image from 'next/image'
import { IoLogoTwitter } from "react-icons/io";
import { AiOutlineLinkedin} from "react-icons/ai";
import { FiFacebook} from "react-icons/fi";
import Skills from '../Skills';




export default function Aboutme() {
  return ( <>

    <div className='flex min-h-screen flex-col md:flex-row '>
        <div className='bg-gray-900 sticky top-0 left-0  flex flex-col h-screen items-center content-between sm:justify-around md:w-3/12 sm-fixed'>

    <Image src={'/Salman.jpeg'} alt='' height={150} width={150} className='rounded-l-3xl pt-7 ' />

    <h1 className='text-yellow-400 font-serif hover:text-blue-600 uppercase text-xl mt-4'>Muhammad Salman Saeed</h1>
    <h2 className=' text-white mb-4 text-center hover:text-blue-600 font-serif '>IT MANAGER</h2>
<p className=' text-white mb-2 text-center hover:text-blue-600 font-serif '>MASTER OF COMPUTER SCIENCE (MCS) </p>


    
    <div className='flex flex-wrap pt-6 justify-center gap-3 '>

<Image src={'/mcp.png'} alt='mcp' height={50} width={50} className='rounded-full  hover:scale-150 transform transition ' />
<Image src={'/palo.png'} alt='mcp' height={50} width={50} className='rounded-full hover:scale-150 transform transition' />
<Image src={'/ccnar.png'} alt='mcp' height={50} width={50} className='rounded-full hover:scale-150 transform transition' />
<Image src={'/ccnss.png'} alt='mcp' height={50} width={50} className='rounded-full  hover:scale-150 transform transition' />
<Image src={'/ccnp.png'} alt='mcp' height={50} width={50} className='rounded-full hover:scale-150 transform transition' />
</div>

 <div className='text-white text-center mb-2 mt-44'>
          <h3 className='hover:text-blue-600 font-serif '>CONTACT ME</h3>
          <div className='flex  pt-2 justify-center gap-5 '>
          <a href='https://twitter.com/salmansaeed1101' target={'_blank'} ><IoLogoTwitter className='h-6 w-6 hover:text-blue-600' /></a>
          <a href='https://www.linkedin.com/in/salman-saeed-07231755/' target={'_blank'}><AiOutlineLinkedin className='h-6 w-6 hover:text-blue-600'/></a>
          <a href='https://www.facebook.com/salman.saeed.98892' target={'_blank'}><FiFacebook className='h-6 w-6 hover:text-blue-600'/></a>
        </div>


</div>
</div>

    <div className='md:w-8/12'>
<div className='px-9 py-4 '>

<h2 className='text-black uppercase text-3xl font-serif mb-3'>ABOUT ME</h2>
<p className='mb-6 font-serif'>I am an enthusiastic, self-motivated, reliable, responsible and hard working person. 
    I am a mature team worker and adaptable to all challenging situations.
     I am able to work well both in a team environment as well as using own initiative.
     I am able to work well under pressure and adhere to strict deadlines.</p>



</div>
<div className='px-9 py-4  '>
<Skills/>
</div>
    </div>

    </div>
    
       
    </>
  )

}
