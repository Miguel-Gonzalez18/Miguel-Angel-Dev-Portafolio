import React, {useState, useEffect} from 'react'
import { Outlet } from 'react-router-dom'
import { BiHomeHeart } from "react-icons/bi";
import { AiFillProject } from "react-icons/ai";
import { MdDesignServices, MdContacts } from "react-icons/md";
import { BsEmojiSunglassesFill } from "react-icons/bs";

import logo from '../img/logo.jpg'
import '../../src/index.css'

function Layout() {
  const [screenSize, setScreenSize] = useState()
  const size = screen.width

  useEffect(()=>{
    if(size <= 768) {
      setScreenSize(24)
    }
    else{
      setScreenSize(20)
    }
  },[])

  return (
    <>
      <header className='fixed w-full z-10 bg-colorGray3 shadow-sm'>
        <div className='p-1 w-full flex md:justify-between justify-center'>
          <div className='flex items-center px-1'>
            <img className='w-10 rounded-full border-2 border-primary' src={logo} alt="Logo de la pagina"/>
            <h1 className='font-title ml-2'>Miguel Ángel <span className='text-primary'>Dev</span></h1>
          </div>
          <nav>
            <ul className='md:flex flex md:left-0 left-4 justify-evenly md:bottom-0 bottom-3 font-texto fixed md:relative bg-colorGray3 md:w-full w-11/12 md:shadow-none shadow-md z-10 md:border-0 border-2 border-colorMorado md:rounded-none rounded-full'>
              <li className='m-3'><a href="#inicio" className='hover:text-colorBlack flex items-center text-colorGray'><BiHomeHeart className='mr-1' size={screenSize} color="rgb(0, 0, 0, .50)" /><p className='hidden md:block'>Inicio</p></a></li>
              <li className='m-3'><a href="#proyect" className='hover:text-colorBlack flex items-center text-colorGray'><AiFillProject className='mr-1' size={screenSize} color="rgb(0, 0, 0, .50)" /><p className='hidden md:block'>Proyectos</p></a></li>
              <li className='m-3'><a href="#serices" className='hover:text-colorBlack flex items-center text-colorGray'><MdDesignServices className='mr-1' size={screenSize} color="rgb(0, 0, 0, .50)" /><p className='hidden md:block'>Servicios</p></a></li>
              <li className='m-3'><a href="#sobreMi" className='hover:text-colorBlack flex items-center text-colorGray'><BsEmojiSunglassesFill className='mr-1' size={screenSize} color="rgb(0, 0, 0, .50)" /><p className='hidden md:block'>Sobre mi</p></a></li>
              <li className='m-3'><a href="#" className='hover:text-colorBlack flex items-center text-colorGray'><MdContacts className='mr-1' size={screenSize} color="rgb(0, 0, 0, .50)" /><p className='hidden md:block'>Contactos</p></a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Layout