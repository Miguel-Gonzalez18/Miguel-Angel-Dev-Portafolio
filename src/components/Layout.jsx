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
    window.addEventListener("scroll", function(){
      progreso();
    });
    //Detectar la direccion del scroll
    var lastScrollTop = 0;
    window.addEventListener("scroll", function(){
      var st = window.pageYOffset || document.documentElement.scrollTop; 
      let menu = document.querySelector(".ulMenu")
      menu.classList.toggle("scroleado", st > lastScrollTop)
      
      lastScrollTop = st;
    }, false);
    //Detectar el size de pantalla
    if(size <= 768) {
      setScreenSize(24)
    }
    else{
      setScreenSize(20)
    }
  },[])
  // Movimiento de la barra de progreso superior
  function progreso(){
    let scroll = document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let proceso = (scroll / height)*100;
    document.querySelector('.progreso').style.width = proceso+"%";
  }
  return (
    <>
      <header className='fixed w-full z-10 bg-colorGray3 shadow-sm'>
      <div className="progreso w-0 h-1 rounded-lg bg-primary">
      </div>
        <div className='p-1 w-full flex md:justify-between justify-center'>
          <div className='flex items-center px-1'>
            <img className='w-10 rounded-full border-2 border-primary' src={logo} alt="Logo de la pagina"/>
            <h1 className='font-title ml-2'>Miguel Ángel <span className='text-primary'>Dev</span></h1>
          </div>
          <nav>
            <ul className='ulMenu md:flex flex md:left-0 left-4 justify-evenly md:bottom-0 transition-all bottom-3 font-texto fixed md:relative bg-colorGray3 md:w-full w-11/12 md:shadow-none shadow-md z-10 md:border-0 border-2 border-colorMorado md:rounded-none rounded-full'>
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