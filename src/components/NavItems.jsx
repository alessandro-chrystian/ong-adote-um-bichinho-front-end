import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/navbar.css'

const NavItems = ({item, to, toRoute}) => {
  return (
    <li className='relative border-animation border-b-2 border-primary md:border-0 before:hover:absolute before:hover:bottom-0 before:hover:border before:hover:border-primary hover:transition-all hover:font-bold hover:text-primary-dark'>{toRoute ? <Link to={toRoute}>{item}</Link> : <a href={to}>{item}</a> }</li>
  )
}

export default NavItems