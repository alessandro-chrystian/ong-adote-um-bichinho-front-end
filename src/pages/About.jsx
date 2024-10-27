import React from 'react'
import AboutCard from '../components/AboutCard'
import ana from '../assets/images/ana-paula.jpeg'
import debora from '../assets/images/debora.jpeg'
import giulia from '../assets/images/giulia.jpeg'
import fulano from '../assets/images/fulano.jpeg'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section className='mb-5'>
      <h1 className='text-center text-5xl font-bold p-10'>Quem Somos!</h1>
      <div className='flex flex-col md:flex-row justify-center gap-2 container m-auto bg-white p-2 shadow-lg rounded-lg'>
        <div className='grid grid-cols-2 gap-2 p-2 mx-3'>
          <AboutCard img={ana} text="Ana Paula Lopes" />
          <AboutCard img={debora} text='Débora Osório' />
          <AboutCard img={giulia} text='Giulia Di Sipio' />
          <AboutCard img={fulano} text='fulano' />
        </div>
        <div className='flex flex-col justify-evenly text-2xl md:text-4xl w-full md:w-1/2 p-5'>
          <p className='text-justify'>Essa é a nossa equipe dedicada! Cada um de nós traz amor e paixão pela causa, trabalhando incansavelmente para oferecer o melhor cuidado e encontrar lares amorosos para nossos amiguinhos de quatro patas. Juntos, fazemos a diferença na vida de muitos pets e suas futuras famílias!</p>
          <div className='flex items-end justify-end'>
            <Link to='/doacao'><p className='bg-primary p-3 rounded-lg shadow-lg w-min hover:transition-all hover:scale-110'>Doação</p></Link>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default About