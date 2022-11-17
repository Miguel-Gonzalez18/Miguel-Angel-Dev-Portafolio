import React from 'react'
import { AiOutlineArrowDown } from "react-icons/ai";

import estrellaSvg from '../img/estrellaSvg.svg'
import imgHero from '../img/undraw_static_assets_rpm6.png'
import logoFigma from '../img/logos_figmaimg.png'
import logoReact from '../img/vscode-icons_file-type-reactjsimg.png'

function Inicio() {
    return (
        <div className='w-full h-screen grid md:grid-cols-5 grid-cols-1'>
            <div className='grid place-content-center md:col-span-2 relative order-2 md:order-1'>
                <img src={imgHero} alt="hero"/>
                <img src={logoFigma} alt="logo figma" className='animate-bounce w-7 absolute md:top-24 top-8 md:left-48 left-40 hidden md:block'/>
                <img src={logoReact} alt="logo react" className='animate-bounce w-10 absolute md:bottom-24 md:top-96 top-64 md:left-80 left-60 hidden md:block'/>
            </div>
            <div className='w-full relative overflow-hidden md:col-span-3 order-1 md:order-2'>
                <div className='m-auto w-10/12 md:w-9/12'>
                    <h1 className='text-3xl font-textos mt-32 text-colorGray2'>“The idea is not to live forever, it is to create something that does”</h1>
                    <cite className='text-primary font-textos block mt-5 text-end mr-7 font-black text-lg'>-- Andy Warhol</cite>
                </div>
                <div className='bg-bgFigurasCirculo md:p-2 p-1 rounded-3xl md:w-72 w-60 text-center m-auto md:mt-36 mt-28'>
                    <p className='font-textos font-medium text-primary text-lg'>I am a web developer</p>
                </div>
                <img src={estrellaSvg} alt="svg de estrella" className='rotate-45 animate-bounce w-14 absolute md:left-96 left-16 top-80' />
                <div className='absolute md:w-96 md:h-96 w-80 h-80 rounded-full -right-20 top-10 bg-bgFigurasCirculo'></div>
                <div className='absolute w-28 h-28 md:w-40 md:h-40 rounded-3xl bg-bgFigurasCuadrado rotate-45 md:right-80 right-64 top-10'></div>
            </div>
            <div className='md:col-start-2 md:col-span-3 text-center order-3'>
                <div className='p-3 bg-bgFigurasCirculo border-primary w-12 inline-block rounded-full shadow-md animate-bounce cursor-pointer'>
                    <AiOutlineArrowDown size={24} color="#6C63FF"/>
                </div>
            </div>
        </div>
    )
}

export default Inicio