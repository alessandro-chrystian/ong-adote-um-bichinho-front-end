import React from 'react'

const HelpCard = ({img, alt, title, paragraph}) => {
  return (
    <div className='bg-white shadow-md rounded-md flex flex-col p-2 text-center gap-2'>
        <img src={img} alt={alt} className='w-full' loading='lazy' />
        <h3 className='font-bold text-2xl text-secondary'>{title}</h3>
        <p>{paragraph}</p>
    </div>
  )
}

export default HelpCard