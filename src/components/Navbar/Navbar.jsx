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
    <>
      <div className={`menu-overlay ${mobilemenu ? 'active' : ''}`} onClick={toggleMenu}></div>
      <nav className={`container ${sticky || mobilemenu ? 'dark-nav' : 'transparent-nav'}`}>
        <img src={result} alt="" className='result' />

        <ul className={mobilemenu ? '' : 'hide-mobile-menu'}>
          <li><Link to='hero' smooth={true} offset={0} duration={500} onClick={toggleMenu}>Home</Link></li>
          <li><Link to='program' smooth={true} offset={-300} duration={500} onClick={toggleMenu}>Program</Link></li>
          <li><Link to='about' smooth={true} offset={-160} duration={500} onClick={toggleMenu}>About</Link></li>
          <li><Link to='Campus' smooth={true} offset={-300} duration={500} onClick={toggleMenu}>Gallary</Link></li>
          <li><Link to='Testimonials' smooth={true} offset={-300} duration={500} onClick={toggleMenu}>Review</Link></li>
          <li><Link to='contact' smooth={true} offset={-300} duration={500} className='btn' onClick={toggleMenu}>Contact us</Link></li>
        </ul>
        <img src={menu} alt='' className={`menu-icon ${mobilemenu ? 'rotate' : ''}`} onClick={toggleMenu}></img>
      </nav>
    </>
  )
}

export default Navbar
