import React from 'react'
import { Outlet } from 'react-router-dom'
import { BiHomeHeart } from "react-icons/bi";
import { AiFillProject } from "react-icons/ai";
import { MdDesignServices, MdContacts } from "react-icons/md";
import { BsEmojiSunglassesFill } from "react-icons/bs";

import logo from '../img/logo.jpg'
import '../../src/index.css'

function Layout() {
  return (
    <>
      <header className='p-2 w-full flex md:justify-between justify-center cabecera'>
        <div className='flex items-center'>
          <img className='w-10 rounded-full border-2 border-primary' src={logo} alt="Logo de la pagina"/>
          <h1 className='font-title ml-2'>Miguel Ángel <span className='text-primary'>Dev</span></h1>
        </div>
        <nav>
          <ul className='md:flex flex left-0 justify-evenly bottom-0 font-texto fixed md:relative bg-colorBlanco w-full z-10'>
            <li className='m-3'><a href="#" className='hover:text-colorBlack flex items-center text-colorGray'><BiHomeHeart className='mr-1' size={20} color="rgb(0, 0, 0, .50)" /><p className='hidden md:block'>Home</p></a></li>
            <li className='m-3'><a href="#" className='hover:text-colorBlack flex items-center text-colorGray'><AiFillProject className='mr-1' size={20} color="rgb(0, 0, 0, .50)" /><p className='hidden md:block'>Proyects</p></a></li>
            <li className='m-3'><a href="#" className='hover:text-colorBlack flex items-center text-colorGray'><MdDesignServices className='mr-1' size={20} color="rgb(0, 0, 0, .50)" /><p className='hidden md:block'>Services</p></a></li>
            <li className='m-3'><a href="#" className='hover:text-colorBlack flex items-center text-colorGray'><BsEmojiSunglassesFill className='mr-1' size={20} color="rgb(0, 0, 0, .50)" /><p className='hidden md:block'>About me</p></a></li>
            <li className='m-3'><a href="#" className='hover:text-colorBlack flex items-center text-colorGray'><MdContacts className='mr-1' size={20} color="rgb(0, 0, 0, .50)" /><p className='hidden md:block'>Contact</p></a></li>
          </ul>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Layout