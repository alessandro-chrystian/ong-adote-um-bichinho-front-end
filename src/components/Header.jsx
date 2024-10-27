import React, {useState} from 'react'
import { FaSquareFacebook, FaTiktok, FaInstagram } from 'react-icons/fa6';
import { FaBars } from 'react-icons/fa';
import Navbar from './Navbar';
import '../assets/styles/navbar.css'
import logo from '../assets/images/logo.png'


const Header = () => {

  const [isVisible, setIsVisible] = useState(false)

  const handleClick = () => {
    setIsVisible(prevState => !prevState)
  }

  return (
    <header className='flex flex-col'>
        <div className='flex relative items-center text-md justify-between p-2 sm:p-5 text-lg md:text-xl gap-2'>
          <div><img src={logo} alt="logo da marca" className='z-10 absolute top-2' /></div>
          <div>
            <Navbar />
          </div>
          <div className='flex gap-5'>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScL0-7gocM3tH51omzkd4cyGkdZuAOToOoFhXZlwsFDCF045w/viewform" target="_blank" alt="Se torne nosso padrinho" className='bg-secondary-dark text-md text-white hover:scale-110 hover:transition-all hover:font-bold hover:rounded-2xl p-1 rounded-lg'>Apadrinhe!</a>
              <ul className='text-xl sm:text-2xl justify-center flex items-center gap-5'>
                  <li><a href="https://www.instagram.com/adoteumbichinhorj/" target="_blank">
                    <FaInstagram />
                  </a></li>
                  <li><a href="https://www.facebook.com/Adoteumbichinhorjj?mibextid=ZbWKwL" target="_blank">
                    <FaSquareFacebook />
                  </a></li>
                  <li><a href="https://www.tiktok.com/@adoteumbichinhorj" target="_blank">
                    <FaTiktok />
                  </a></li>
              </ul>
          </div>
          <div className='block md:hidden'>
            <button className='border-2 border-black p-1 rounded-md' onClick={handleClick}>
              <FaBars />
            </button>
          </div>
        </div>
        {isVisible && <div className='menu-animation md:hidden'><Navbar isVisible={isVisible} /></div>}
    </header>
  )
}

export default Header