import React from 'react'

const AboutCard = ({img, text}) => {
  return (
    <div className='flex flex-col items-center gap-2'>
        <img src={img} alt={text} className='w-[500px] h-[300px] rounded-lg shadow-xl bg-white p-2' loading='lazy' />
        <p>{text}</p>
    </div>
  )
}

export default AboutCard