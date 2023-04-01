import React from 'react'
import Home from './Home'
import Round from './Round1'
import Round2 from './Round2'
import Round3 from './Round3'
import Round4 from './Round4'

function New() {
  return (
    <div className='w-full h-screen font-serif text-white bg-black relative overflow-hidden'>
        <div className='max-w-screen-xl h-full mx-auto flex justify-center items-center'>
            <Home/>
        </div>
        <div className='w-full h-full absolute top-0 left-0 z-10' >
            <Round/>
            <Round2/>
            <Round3/>
            <Round4/>

        </div>
        
        </div>
  )
}

export default New