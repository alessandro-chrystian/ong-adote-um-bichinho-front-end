import React from 'react'
import { FaEnvelope, FaMapLocation, FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa6'
import contactImg from '../assets/images/contact-img.jpg'

const Contact = () => {
  return (
    <section className='flex flex-col text-center items-center gap-5 mb-10' id="contact">
        <h1 className='text-4xl md:text-5xl text-secondary font-bold'>Entre em contato conosco!</h1>
        <div className='flex flex-col md:flex-row items-center gap-5 container justify-between bg-white p-5 shadow-xl rounded-lg'>
            <div className='flex flex-col gap-8'>
                <div className='flex flex-col items-center gap-5'>
                    <div className='text-xl md:text-3xl flex gap-2'>
                        <a href="mailto:contato@adoteumbichinhorj.org" className='flex gap-4 items-center '>
                        <span className='text-primary'><FaEnvelope /></span>
                        <p>contato@adoteumbichinhorj.org</p></a>
                    </div>
                    <div className='text-xl md:text-3xl flex gap-2'>
                        <span className='text-primary'><FaMapLocation /></span>
                        <p>Endereço</p>
                    </div>
                </div>
                <div className='flex flex-col gap-10'>
                    <h2 className='text-4xl font-bold'>Nossas Redes Sociais</h2>
                    <div className='flex text-5xl gap-5 justify-center flex-wrap'>
                        <a href="#" target="_blank"><FaInstagram /></a>
                        <a href="#" target="_blank"><FaFacebook /></a>
                        <a href="#" target="_blank"><FaTiktok /></a>
                    </div>
                </div>
            </div>
            <div>
                <img src={contactImg} alt="Cachorro sorrindo" className='rounded-lg' loading='lazy' />
            </div>
        </div>
    </section>
  )
}

export default Contact