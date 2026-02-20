import React, { useEffect, useState } from 'react'
import './Navbar.css'
import result from '../../assets/result.png'
import { Link } from 'react-scroll'
import menu from '../../assets/menu.png'



const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobilemenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    setMobileMenu(!mobilemenu);
  }
  return (
    <nav className={`container ${sticky || mobilemenu ? 'dark-nav' : 'transparent-nav'}`}>
      <img src={result} alt="" className='result' />

      <ul className={mobilemenu ? '' : 'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-300} duration={500}>Program</Link></li>
        <li><Link to='about' smooth={true} offset={-160} duration={500}>About</Link></li>
        <li><Link to='Campus' smooth={true} offset={-300} duration={500}>Gallary</Link></li>
        <li><Link to='Testimonials' smooth={true} offset={-300} duration={500}>Review</Link></li>
        <li><Link to='contact' smooth={true} offset={-300} duration={500} className='btn'>Contact us</Link></li>

      </ul>
      <img src={menu} alt='' className='menu-icon' onClick={toggleMenu}></img>
    </nav>
  )
}

export default Navbar
