"use client"

import React from 'react'
import Image from 'next/image'
import { BsGithub } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';
import { ImFacebook2 } from 'react-icons/im';
import { AiOutlineMail } from 'react-icons/ai';
import { ImProfile} from 'react-icons/im';
import {AiOutlineContacts} from 'react-icons/ai';
import { useTypewriter,Cursor } from 'react-simple-typewriter';
import Link from 'next/link'
function Left() {
    const [text] =useTypewriter({
        words:["Sap Administrator.","Network Administrator.","Professional Coder.","Full Stack Developer."],
        loop:true,
        typeSpeed:30,
        deleteSpeed:20,
        delaySpeed:2000
    })
    

  return (
    <div className='w-5/12 h-full bg-slate-700 rounded-2xl'>
<div className='w-full h-3/5'>
<Image className='w-full h-full object-cover rounded-2xl' src={'/salman1.jpeg'} alt='image' height={200} width={200} />

</div>
<div className='w-full h-2/5 '>

    {/* Contain the intro */}
    <div className='flex flex-col items-center gap-2 py-10'>
        <h1 className='text-white text-2xl font-semibold'><span className='text-white font-serif'>Hi, I&apos;m</span> Muhammad Salman  </h1>
        <p className=' font-serif text-xl text-yellow-300' >a <span className=' text-yellow-300 font-serif text-xl tracking-wide'>{text}<Cursor cursorColor='red'  cursorStyle="|" /></span></p>
        <div className='flex justify-center gap-2 mt-2'>
           <span className='hover:text-blue-500 duration-300 cursor-pointer text-xl'><BsGithub/></span>
           <span className='hover:text-blue-500 duration-300 cursor-pointer text-xl'><FaLinkedin/></span> 
           <span className='hover:text-blue-500 duration-300 cursor-pointer text-xl'><ImFacebook2/></span> 
           <span className='hover:text-blue-500 duration-300 cursor-pointer text-xl'><AiOutlineMail/></span> 
           </div>
           <div className='p-3 animate-pulse bg-yellow-300 rounded-full ring-2 text-black' >
           <Link href={'/about'}> <button >About Me</button></Link>
           </div>
    </div>
    {/* Buttons */}
    <div className='flex h-14'>
    <Link href={"/salman_saeed.pdf"} target="_blank">
      <button className='w-full h-full flex justify-center pl-2 text-sm uppercase hover:text-blue-500 items-center gap-2'>Download CV <ImProfile/></button>
    </Link>
      <button className='w-1/2 h-full flex justify-center items-center gap-2 border-t-white  tracking-wide
      duration-300 uppercase hover:text-blue-500'>Contact me <AiOutlineContacts/></button>
    </div>

</div>


    </div>
  )
}

export default Left