import React, { useState, useEffect } from 'react';
import { BiPhone } from "react-icons/bi";
import { CgMail } from "react-icons/cg";
import { NavLink } from 'react-router-dom';


const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const btnLink='mr-8 hover:text-lime-300 hover:text-shadow'
  const activeLink='mr-8 text-lime-300 text-shadow'
  return (
    <header className={`fixed font-semibold ${scrolled ? 'bg-black/75' : 'bg-transparent'} text-lime-500 body-font top-0 left-0 right-0 z-50 transition-colors duration-300`}>
    <div className="container mx-auto flex flex-wrap  md:px-12 flex-col md:flex-row items-center">
      <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto cursor-pointer">
        <ul>
        <NavLink to="/servicios"className={({isActive}) => isActive?activeLink:btnLink }>Servicios</NavLink>
        <NavLink to="/sectore" className={({isActive}) => isActive?activeLink:btnLink }>Sectores</NavLink>
        <NavLink to="/nosotros" className={({isActive}) => isActive?activeLink:btnLink }>Nosotros</NavLink>
        <NavLink to="/contacto"  className={({isActive}) => isActive?activeLink:btnLink }>Contacto</NavLink>
        </ul>
      </nav>
      <NavLink to="/"  className="flex order-first lg:order-none lg:w-1/5 lg:items-center lg:justify-center mb-4 md:mb-0">
        <img className='w-40 h-36' src="../../LOGO_OFICIAL-png.png" alt="" />
      </NavLink>
      <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0 cursor-pointer">
     
        <a href='https://wa.me/qr/ASVSS2N76ZQTL1' className="flex lg:items-center mr-8 hover:text-lime-300 hover:text-shadow">
        <BiPhone className=' mr-2 w-6 h-6' />
        999999999</a>
        <a className="flex lg:items-center mr-8 hover:text-lime-300 hover:text-shadow">
        <CgMail className=" mr-2 w-6 h-6" />
        ingelabs@gmail.com</a>
    
      </div>
    </div>
    
  </header>
  
  )
}

export default NavBar;