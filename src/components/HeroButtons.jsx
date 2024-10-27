import React from 'react'

const HeroButtons = () => {
  return (
    <div className='flex gap-10 text-3xl md:text-5xl text-slate-100 font-bold z-10'>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScNAmREZXkeGckyDZsXmt4nZuf95HfvQnqGERcpFZMf8czJ4A/viewform" target="_blank" className='bg-secondary p-3 rounded-lg shadow-lg hover:scale-125 hover:rounded-3xl hover:transition-all'>Adotar</a>
        <a href="https://www.asaas.com/c/242439642795?fbclid=PAAaa5qq3hUyQtm-PgCXUljSupl0UqtKJkoRKbekLGJWJNjKLReiyDRWfGC7I" target="_blank" className='bg-accent p-3 rounded-lg shadow-lg hover:scale-125 hover:rounded-3xl hover:transition-all'>Doar</a>
    </div>
)
}

export default HeroButtons