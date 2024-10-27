import React from 'react'
import { useLocation } from 'react-router-dom'
import NavItems from './NavItems'

const Navbar = ({isVisible}) => {

  const location = useLocation()

  return (
    <ul className={`flex flex-col items-center md:flex-row gap-5 ${isVisible ? 'bg-background text-center w-full p-1 rounded-l-md': 'hidden md:flex'}`}>
        <NavItems item="Home" toRoute="/" />
        <NavItems item="Sobre nós" toRoute="/sobre" />
        <NavItems item="Doação" toRoute="/doacao" />
        <NavItems item="Nossos bichinhos" toRoute='/pets' />
        {location.pathname === '/' && <NavItems item="Contato" to="#contact" />}
        <NavItems item="Admin" toRoute="/login" />
    </ul>
  )
}

export default Navbar