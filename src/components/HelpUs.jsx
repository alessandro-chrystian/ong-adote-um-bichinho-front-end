import React, {Suspense, lazy} from 'react'
import partnership from '../assets/images/partnership.jpg'
import publicize from '../assets/images/publicize.jpg'
import collections from '../assets/images/collections.jpg'
const HelpCard = lazy(() => import('./HelpCard'))

const HelpUs = () => {

  return (
    <section className='flex flex-col items-center justify-center gap-4'>
        <h1 className='text-4xl md:text-5xl text-center text-secondary font-bold'>Outras formas de nos ajudar!</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 justify-items-center w-[75%] md:w-full gap-7 container'>
            <Suspense fallback={<div>Loading Card...</div>}>
              <HelpCard img={partnership} alt='parceria' title="Virando nosso parceiro!" paragraph="Com uma parceria você pode nos ajudar com os cuidados com os nossos bichinhos!" />
            </Suspense>
            <Suspense fallback={<div>Loading Card...</div>}>
              <HelpCard img={publicize} alt="divulgando" title="Divulgando o nosso conteúdo!" paragraph="Compartilhe nosso conteúdo em suas redes sociais, convide amigos para conhecer nosso trabalho e ajude a aumentar nossa visibilidade!" />
            </Suspense>
            <Suspense fallback={<div>Loading Card...</div>}>
              <HelpCard img={collections} alt="Organize coletas" title="Organizando Coletas!" paragraph="Ajude a reunir doações de alimentos e suprimentos. Organizar coletas pode fazer uma grande diferença na vida dos nossos bichinhos!" />
            </Suspense>
        </div>
    </section>
  )
}

export default HelpUs