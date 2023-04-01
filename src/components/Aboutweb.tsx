import React from 'react'
import AboutMe from './AboutMe'
import Myservices from './Myservices'
import Title from './Title'

const Aboutweb = () => {
  return (
    <section id="aboutweb" className='w-full'>
<Title />

<AboutMe/>
<Myservices/>
    </section>
  )
}

export default Aboutweb