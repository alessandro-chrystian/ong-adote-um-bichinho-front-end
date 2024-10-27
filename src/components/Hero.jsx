import React from 'react'
import '../assets/styles/hero.css'
import HeroTitle from './HeroTitle'
import HeroButtons from './HeroButtons'

const Hero = () => {
  return (
    <>
      <section className='relative'>
          <div className='hero min-h-[350px] max-h-[500px] flex flex-col gap-5 items-center justify-center md:w-1/2 m-auto'>
              <HeroTitle />
              <HeroButtons />
          </div>
      </section>
    </>
    
  )
}

export default Hero