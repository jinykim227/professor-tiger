import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import logo from '../assets/logo_pftiger.jpg'

import './Navbar.css'
import '../index.css'

const Navbar = () => {

  // Setting mobile view
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  // change nav-bar background color when scrolling
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 90) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  window.addEventListener('scroll', handleScroll);

  // Close menu on click not setup yet
  const closeMenu = () => setClick(false);

  return (
    <div className={ scroll ? 'header header-scrolled' : 'header' }>
        <nav className='navbar'>
            <a href='/' className='logo'>
                <img src={logo} alt='logo'/>
            </a>
            <a className={ scroll ? 'logoTitle logoTitle-scrolled' : 'logoTitle'}>
              Professor Tiger
            </a>
            <div className='hamburger' onClick={handleClick}>
              { click ? (<FaTimes size={30} style={{color: 'white'}}/>) : (<FaBars size={30} style={{color: 'white'}} />)}
            </div>
            <ul className={ click ? 'nav-menu active' : 'nav-menu'}>
              <li className={ scroll ? ' nav-item nav-item-scrolled a' : 'nav-item' }>
                <a href='/'> Home </a>
              </li>
              <li className={ scroll ? ' nav-item nav-item-scrolled a' : 'nav-item' }>
                <a href='/'> About </a>
              </li>
              <li className={ scroll ? ' nav-item nav-item-scrolled a' : 'nav-item' }>
                <a href='/'> Watch </a>
              </li>
              <li className={ scroll ? ' nav-item nav-item-scrolled a' : 'nav-item' }>
                <a href='/'> Contact </a>
              </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar
