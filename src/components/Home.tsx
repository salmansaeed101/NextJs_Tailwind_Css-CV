import React from 'react'
import Left from './Left'
import { FaUserAlt,FaEnvelope} from 'react-icons/fa';
import { IoIosPaperPlane} from 'react-icons/io';
import { MdWorkOutline,MdOutlineClosedCaptionOff} from 'react-icons/md';
import { SiGooglechat} from 'react-icons/si';
import { BsTelephonePlus} from 'react-icons/bs';
import Aboutweb from './Aboutweb';

function Home() {
  return (
    <div className='w-[85%] h-[85%] bg-transparent text-white z-50 flex items-start justify-between ' >
    <div className='w-16 h-96 bg-transparent flex flex-col gap-4'>
      <div className='w-full h-20 bg-slate-700 rounded-3xl 
      flex justify-center items-center cursor-pointer group'>

        {/* Home Icons */}
        <div className='flex flex-col gap-1.5 overflow-hidden '>
          <span className='w-8 h-[2px] bg-white inline-block -translate-x-2 group-hover:translate-x-0
          transition-transform duration-300 group-hover:bg-yellow-200'></span>
          <span className='w-8 h-[2px] bg-white inline-block'></span>
          <span className='w-8 h-[2px] bg-white inline-block -translate-x-2 group-hover:translate-x-0
          transition-transform duration-300 group-hover:bg-yellow-200'></span>

          
        </div>
      </div>
      {/* Other Icons */}
      <div className='w-full h-96 bg-slate-600 rounded-3xl py-6 
      flex flex-col items-center justify-between'>

 <span className='w-full h-6 text-white text-xl flex items-center
 hover:text-yellow-300 cursor-pointer relative group justify-center'><FaUserAlt/><span 
 className='absolute text-black font-medium text-xs uppercase bg-yellow-200 px-4 py-[1px]
  rounded-xl left-0 translate-x-8 group-hover:translate-x-12 transition-all duration-300
  z-20 opacity-0 group-hover:opacity-100 '>About</span> </span>


<span className='w-full h-6 text-white text-xl flex items-center
 hover:text-yellow-300 cursor-pointer relative group justify-center'><IoIosPaperPlane/><span 
 className='absolute text-black font-medium text-xs uppercase bg-yellow-200 px-4 py-[1px]
  rounded-xl left-0 translate-x-8 group-hover:translate-x-12 transition-all duration-300
  z-20 opacity-0 group-hover:opacity-100 '>Resume</span> </span>

<span className='w-full h-6 text-white text-xl flex items-center
 hover:text-yellow-300 cursor-pointer relative group justify-center'><MdWorkOutline/><span 
 className='absolute text-black font-medium text-xs uppercase bg-yellow-200 px-4 py-[1px]
  rounded-xl left-0 translate-x-8 group-hover:translate-x-12 transition-all duration-300
  z-20 opacity-0 group-hover:opacity-100 '>Projects</span> </span>


<span className='w-full h-6 text-white text-xl flex items-center
 hover:text-yellow-300 cursor-pointer relative group justify-center'><SiGooglechat/><span 
 className='absolute text-black font-medium text-xs uppercase bg-yellow-200 px-4 py-[1px]
  rounded-xl left-0 translate-x-8 group-hover:translate-x-12 transition-all duration-300
  z-20 opacity-0 group-hover:opacity-100 '>Blog</span> </span>

<span className='w-full h-6 text-white text-xl flex items-center
 hover:text-yellow-300 cursor-pointer relative group justify-center'><FaEnvelope/><span 
 className='absolute text-black font-medium text-xs uppercase bg-yellow-200 px-4 py-[1px]
  rounded-xl left-0 translate-x-8 group-hover:translate-x-12 transition-all duration-300
  z-20 opacity-0 group-hover:opacity-100 '>Contact</span> </span>


<span className='w-full h-6 text-white text-xl flex items-center
 hover:text-yellow-300 cursor-pointer relative group justify-center'><BsTelephonePlus/><span 
 className='absolute text-black font-medium text-xs uppercase bg-yellow-200 px-4 py-[1px]
  rounded-xl left-0 translate-x-8 group-hover:translate-x-12 transition-all duration-300
  z-20 opacity-0 group-hover:opacity-100 '>Call</span> </span>




      </div>
    </div>
    <div className='w-[94%] h-full bg-slate-700 flex items-center'>

    {/* Left Part Start */}
    <Left/>

    {/* Right Start */}

    <div className='w-8/12 h-[95%] bg-slate-700'>
<div className='w-full h-[96%] overflow-y-scroll scrollbar-thin scrollbar-thumb-[#646464]'>
<Aboutweb/>

</div>
     
    </div>



    </div>
       
    </div>

  )
}

export default Home