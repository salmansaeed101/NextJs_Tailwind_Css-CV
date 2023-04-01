import React from 'react'
import { BiCodeAlt } from 'react-icons/bi';
import { DiCss3 } from 'react-icons/di';
import { TbBrandNextjs} from 'react-icons/tb';
import { IoIosGitNetwork} from 'react-icons/io';

const ServicesCard= () => {
  return ( <div>
    <div className='grid grid-cols-2'>
    <div className='py-8 px-6 flex flex-col  items-center gap-2'>
<span className='text-4xl text-yellow-300 mb-2'>
  <BiCodeAlt/>
</span>
<h2 className='font-serif text-lg font-semibold'>Web Development</h2>
<p className='text-base text-center text-zinc-400 px-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, soluta!</p>

    </div>
    <div>
    <div className='py-8 px-6 flex flex-col items-center gap-2'>
<span className='text-4xl text-yellow-300 mb-2'>
  <DiCss3/>
</span>
<h2 className='font-serif text-lg font-semibold'>CSS</h2>
<p className='text-base text-center text-zinc-400 px-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, soluta!</p>

    </div>
      
    </div>
    <div className='py-8 px-6 flex flex-col items-center gap-2'>
<span className='text-4xl text-yellow-300 mb-2'>
  <TbBrandNextjs/>
</span>
<h2 className='font-serif text-lg font-semibold'>Next Js</h2>
<p className='text-base text-center text-zinc-400 px-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, soluta!</p>

    </div>
    <div className='py-8 px-6 flex flex-col items-center gap-2'>
<span className='text-4xl text-yellow-300 mb-2'>
  <IoIosGitNetwork/>
</span>
<h2 className='font-serif text-lg font-semibold'>Next Js</h2>
<p className='text-base text-center text-zinc-400 px-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, soluta!</p>

    </div>
    </div>
    </div>
  )
}

export default ServicesCard