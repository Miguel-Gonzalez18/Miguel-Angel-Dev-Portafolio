import React from 'react'
//Iconos
import { AiFillHtml5 } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { DiCss3Full } from "react-icons/di";
import { ImGit } from "react-icons/im";
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io";
import { SiPhp, SiFirebase } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

function Habilidades() {
    return (
        <div className='md:max-w-3xl m-auto mb-10'>
                    {/* Titulo */}
            <h2 className='font-textos text-xl text-colorGray2 text-center'>Habilidades</h2>
            <div className='md:flex justify-evenly mt-5 md:mx-0 mx-5'>
                    {/* Card FrontEnd */}
                <div className='p-5 shadow-md rounded-md bg-colorBlanco border-x border-y border-colorGray4' data-aos="fade-up" data-aos-duration="3000">
                    <p className='font-textos text-center'>Frontend Developer</p>
                    <div className='grid grid-cols-2 gap-x-24 gap-y-5 m-3 mt-5'>

                        <div>
                            <p className='font-textos flex justify-start text-sm'>
                                <AiFillHtml5 size={16} color="#FF6347" className=' mr-1'/>
                                HTML
                            </p>
                            <p className='font-textos text-xs text-colorGray2'>Avanzado</p>
                        </div>

                        <div>
                            <p className='font-textos flex justify-start text-sm'>
                                <FaReact size={16} color="#61DBFB" className=' mr-1'/>
                                React
                            </p>
                            <p className='font-textos text-xs text-colorGray2'>Intermedio</p>
                        </div>

                        <div>
                            <p className='font-textos flex justify-start text-sm'>
                                <DiCss3Full size={16} color="#264DE4" className=' mr-1'/>
                                CSS
                            </p>
                            <p className='font-textos text-xs text-colorGray2'>Avanzado</p>
                        </div>

                        <div>
                            <p className='font-textos flex justify-start text-sm'>
                                <ImGit size={16} color="#F1502F" className=' mr-1'/>
                                Git
                            </p>
                            <p className='font-textos text-xs text-colorGray2'>Intermedio</p>
                        </div>

                        <div>
                            <p className='font-textos flex justify-start text-sm'>
                                <IoLogoJavascript size={16} color="#F0DB4F" className=' mr-1'/>
                                JavaScript
                            </p>
                            <p className='font-textos text-xs text-colorGray2'>Intermedio</p>
                        </div>
                    </div>
                </div>

                    {/* Card BackEnd */}
                <div className='p-5 shadow-md rounded-md bg-colorBlanco border-x border-y border-colorGray4 md:mt-0 mt-5' data-aos="fade-up" data-aos-duration="2000">
                    <p className='font-textos text-center'>Backend Developer</p>
                    <div className='grid grid-cols-2 gap-x-24 gap-y-5 m-3 mt-5'>

                        <div>
                            <p className='font-textos flex justify-start text-sm'>
                                <SiPhp size={16} color="#474A8A" className=' mr-1'/>
                                PHP
                            </p>
                            <p className='font-textos text-xs text-colorGray2'>Basico</p>
                        </div>

                        <div>
                            <p className='font-textos flex justify-start text-sm'>
                                <IoLogoNodejs size={16} color="#3C873A" className=' mr-1'/>
                                Node Js
                            </p>
                            <p className='font-textos text-xs text-colorGray2'>Basico</p>
                        </div>

                        <div>
                            <p className='font-textos flex justify-start text-sm'>
                                <GrMysql size={16} color="#264DE4" className=' mr-1'/>
                                My SQL
                            </p>
                            <p className='font-textos text-xs text-colorGray2'>Intermedio</p>
                        </div>

                        <div>
                            <p className='font-textos flex justify-start text-sm'>
                                <SiFirebase size={16} color="#F6820C" className=' mr-1'/>
                                Firebase
                            </p>
                            <p className='font-textos text-xs text-colorGray2'>Basico</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Habilidades