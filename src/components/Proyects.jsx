import React from 'react'
// Las imagenes
import imgProyecto1 from '../img/proyecto1.png'
import imgProyecto2 from '../img/proyecto2.png'
import imgProyecto3 from '../img/proyecto3.png'
// Los iconos
import { SiJavascript } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { DiReact } from "react-icons/di";

function Proyects() {
    return (
        //Sesion paras los proyectos
        <div className='p-5 md:p-10' id='proyect'>
            {/* Titulo */}
            <h2 className='font-textos text-2xl text-center'><span className='text-primary font-textos'>Mis</span> Proyectos</h2>
            {/* Los puntos debajo del titulo */}
            <div className='text-center'>
                <span className='w-2 h-2 m-1 bg-primary rounded-full inline-block'></span>
                <span className='w-2 h-2 m-1 bg-primary rounded-full inline-block'></span>
                <span className='w-2 h-2 m-1 bg-primary rounded-full inline-block'></span>
            </div>
            {/* Todos los proyectos */}
            <div className='grid md:grid-cols-3 md:gap-5'>
                {/* Proyecto 1 */}
                <div className='p-2 bg-colorBlanco shadow-md rounded-lg mt-5 border-b-4 border-b-primary' data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                    <div className='w-full'>
                        <img src={imgProyecto1} alt="Imagen del proyecto1" className='object-fill rounded-lg' />
                    </div>
                    <div className='mt-3'>
                        <p className='font-textos'>Cotizador de criptos</p>
                        <div className='w-full flex justify-between py-2 items-center'>
                            <a href="https://cotizar-criptomonedas-app.netlify.app" target="_blank" rel="noopener noreferrer" className='py-1 px-5 bg-primary text-colorBlanco rounded-md shadow font-textos'>Ver más</a>
                            <div className='flex gap-2'>
                                <SiJavascript size={24} color="#F7DF1E"/>
                                <FaCss3Alt size={24} color="#1572B6"/>
                                <AiFillHtml5 size={24} color="#F1662A"/>
                                <DiReact size={24} color="#00D8FF"/>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Proyecto 2 */}
                <div className='p-2 bg-colorBlanco shadow-md rounded-lg mt-5 border-b-4 border-b-primary' data-aos="fade-up" data-aos-duration="3000">
                    <div className='w-full'>
                        <img src={imgProyecto2} alt="Imagen del proyecto1" className='object-fill rounded-lg' />
                    </div>
                    <div className='mt-3'>
                        <p className='font-textos'>Planificador de gastos</p>
                        <div className='w-full flex justify-between py-2 items-center'>
                            <a href="https://control-de-presupuestos.netlify.app" target="_blank" rel="noopener noreferrer" className='py-1 px-5 bg-primary text-colorBlanco rounded-md shadow font-textos'>Ver más</a>
                            <div className='flex gap-2'>
                                <SiJavascript size={24} color="#F7DF1E"/>
                                <FaCss3Alt size={24} color="#1572B6"/>
                                <AiFillHtml5 size={24} color="#F1662A"/>
                                <DiReact size={24} color="#00D8FF"/>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Proyecto 3 */}
                <div className='p-2 bg-colorBlanco shadow-md rounded-lg mt-5 border-b-4 border-b-primary' data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                    <div className='w-full'>
                        <img src={imgProyecto3} alt="Imagen del proyecto1" className='object-fill rounded-lg' />
                    </div>
                    <div className='mt-3'>
                        <p className='font-textos'>Validador de cédula</p>
                        <div className='w-full flex justify-between py-2 items-center'>
                            <a href="https://miguel-gonzalez18.github.io/validador-de-cedula/" target="_blank" rel="noopener noreferrer" className='py-1 px-5 bg-primary text-colorBlanco rounded-md shadow font-textos'>Ver más</a>
                            <div className='flex gap-2'>
                                <SiJavascript size={24} color="#F7DF1E"/>
                                <FaCss3Alt size={24} color="#1572B6"/>
                                <AiFillHtml5 size={24} color="#F1662A"/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Proyects