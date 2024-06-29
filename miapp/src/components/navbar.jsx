import React from 'react'
import { Button } from 'react-scroll'
import { BiPhone } from "react-icons/bi";
import { CgMail } from "react-icons/cg";
import { Link, NavLink, Outlet } from 'react-router-dom';


const NavBar = () => {
  return (
    <header className="fixed text-lime-500 bg-black/60 	body-font top-0 left-0 right-0 ">
    <div className="container mx-auto flex flex-wrap  md:px-12 flex-col md:flex-row items-center">
      <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto cursor-pointer">
        <ul>
        <NavLink to='Servicios'><a className="mr-8 hover:text-lime-300 hover:text-shadow">Servicios</a></NavLink>
        <a  className="mr-8 hover:text-lime-300 hover:text-shadow">Sectores</a>
        <a  className="mr-8 hover:text-lime-300 hover:text-shadow">Nosotros</a>
        <a  className="mr-8 hover:text-lime-300 hover:text-shadow">Contacto</a>
        </ul>
      </nav>
      <a  className="flex order-first lg:order-none lg:w-1/5 lg:items-center lg:justify-center mb-4 md:mb-0">
        <img className='w-40 h-40' src="../../LOGO 1 EN BLANCO.png" alt="" />
      </a>
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