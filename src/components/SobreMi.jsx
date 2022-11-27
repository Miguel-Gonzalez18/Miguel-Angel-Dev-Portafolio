import React from 'react'
// Importando recursos
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

function SobreMi() {
    return (
        <div className='md:max-w-3xl mx-auto mt-16' id='sobreMi' data-aos="fade-up" data-aos-duration="1000">
            <h2 className='font-textos text-2xl text-center'>Sobre mi</h2>
             {/* Los puntos debajo del titulo */}
            <div className='text-center'>
                <span className='w-2 h-2 m-1 bg-primary rounded-full inline-block'></span>
                <span className='w-2 h-2 m-1 bg-primary rounded-full inline-block'></span>
                <span className='w-2 h-2 m-1 bg-primary rounded-full inline-block'></span>
            </div>
             {/* Contenedor principal */}
            <div className='w-full flex mt-10 md:flex-row flex-col'>
                <div className='md:order-1 order-2'>
                    <h2 className='font-textos text-xl text-colorGray2 text-center'>Miguel Ángel González</h2>
                    <span className='font-textos text-colorGray2 text-sm text-center block'><span className='w-16 h-px bg-colorGray2 inline-block'></span> Desarrollador Web</span>
                    <div className='p-5'>
                        <p className='mt-5 font-textos text-justify'>
                            Soy estudiante de ingeniería de software, estoy interesado en la programación, desarrollo web y desarrollo de aplicaciones móviles.
                        </p>
                        <p className='font-textos text-justify'>
                            Busco colaborar en proyectos que me aporten valor y conocimiento, trabajar en equipo y así aportar mis conocimientos obtenidos, tengo experiencia trabajando con tecnologías web como HTML, CSS, JavaScript, React entre otros y en el desarrollo móvil con React Native.
                        </p>
                    </div>
                </div>

                <div className='md:order-2 order-1'>
                    <div className="bg-[url('/src/img/ImgPerfil.jpg')] w-48 h-48 bg-no-repeat bg-center bg-cover stylesImgPerfil md:m-5 m-auto">
                        {/* Foto de perfil */}
                    </div>

                    {/* Botones de redes sociales */}
                    <div className='flex justify-center gap-1 my-7'>
                        <div className='bg-colorLinkedin w-10 h-10 rounded-md flex justify-center items-center'>
                            <a href="https://www.linkedin.com/in/miguel%C3%A1ngelgonz%C3%A1lez770459219/" target="_blank">
                                <BsLinkedin size={24} color='#ffffff'/>
                            </a>
                        </div>
                        <div className='bg-colorBlack w-10 h-10 rounded-md flex justify-center items-center'>
                            <a href="https://github.com/Miguel-Gonzalez18" target="_blank">
                                <BsGithub size={24} color='#ffffff'/>
                            </a>
                        </div>
                        <div className='bg-colorInstagram w-10 h-10 rounded-md flex justify-center items-center'>
                            <a href="https://www.instagram.com/miguelangel09__/" target="_blank">
                                <BsInstagram size={24} color='#ffffff'/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SobreMi