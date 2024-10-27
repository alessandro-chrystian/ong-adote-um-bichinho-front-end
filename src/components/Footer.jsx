import React from 'react'
import { useLocation } from 'react-router-dom'
import { FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa6'
const date = new Date()
const year = date.getFullYear()

const Footer = () => {

  const location = useLocation()

  return (
    <footer className={`bg-secondary text-center p-4 flex justify-around items-center text-lg ${location.pathname === '/doacao' && 'lg:fixed bottom-0 w-full'} ${location.pathname === '/login' && 'lg:fixed bottom-0 w-full'} ${location.pathname === '/pets' && 'lg:fixed bottom-0 w-full'}`}>
        <p>Feito por <strong><a href="https://www.instagram.com/chrystiansandro" target="_blank">Alessandro Chrystian</a></strong> {year}  ©</p>
        <div className='flex gap-5 text-2xl'>
            <a href="https://www.instagram.com/aledevweb" target="_blank">
              <FaInstagram />
            </a>
            <a href="https://www.github.com/alessandro-chrystian" target="_blank">
              <FaGithub />
            </a>
            <a href="https://api.whatsapp.com/send?phone=5521981859528" target="_blank">
              <FaWhatsapp />
            </a>
        </div>
    </footer>
  )
}

export default Footer