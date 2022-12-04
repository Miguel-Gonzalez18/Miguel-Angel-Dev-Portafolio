import React from 'react'
import { useActionData, Form } from 'react-router-dom'; 
//iconos
import { MdMarkEmailUnread } from "react-icons/md";
import { BsLinkedin, BsFillHeartFill } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { IoIosSend } from "react-icons/io";

function Contacto() {
    // Obtener fecha actual
    const fecha = new Date()
    const year = fecha.getFullYear()
    return (
        <footer>
            <div className='bg-colorAzul py-10 md:px-28 px-3 w-full'>
                <h2 className='font-textos text-2xl text-colorBlanco'>Contacto</h2>
                <div className='mt-5 md:flex w-full'>
                    <div className='md:w-5/12 w-full'>
                        <a href="mailto:gonzalezmiguela816@gmail.com" className='font-textos text-colorBlanco text-sm'>
                            <MdMarkEmailUnread size={24} color="#ffffff" className='inline-block mr-1'/>
                            gonzalezmiguela816@gmail.com
                        </a>
                        <div className='flex gap-3 my-5'>
                            <a href="https://www.linkedin.com/in/miguel%C3%A1ngelgonz%C3%A1lez770459219/" target="_blank">
                                <BsLinkedin size={26} color='#ffffff'/>
                            </a>
                            
                            <a href="https://github.com/Miguel-Gonzalez18" target="_blank">
                                <BsGithub size={26} color='#ffffff'/>
                            </a>
                            <a href="https://www.instagram.com/miguelangel09__/" target="_blank">
                                <BsInstagram size={26} color='#ffffff'/>
                            </a>
                        </div>
                    </div>
                    <div className='w-full text-center'>
                        <Form method='post' noValidate >
                            <div className='md:flex justify-center gap-x-5'>
                                <input type="text" name="nombre" placeholder='Nombre' autoComplete='off' className='p-2 rounded-lg font-textos w-full outline-none inputStyle'/>
                                <input type="email" name="email" placeholder='Correo' autoComplete='off' className='md:mt-0 mt-5 p-2 rounded-lg font-textos w-full outline-none inputStyle'/>
                            </div>
                            <div className='mt-5'>
                                <textarea name="mensaje" className='w-full h-40 font-textos rounded-lg p-2 outline-none inputStyle' placeholder='Escribe tu mensaje'></textarea>
                            </div>
                            <div className='flex justify-end mt-5'>
                                <button type='submit' className='font-textos text-colorBlanco px-7 py-2 bg-colorVerder2 rounded-lg shadow-md flex hover:bg-colorVerder3'>
                                    Enviar <IoIosSend size={24} color="#FFFFFF" className='ml-2'/>
                                </button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
            <div className='p-5 bg-colorAzulOscuro'>
                <div className='md:flex md:justify-between'>
                    <p className='text-colorBlanco font-textos text-sm'>Copyright ©. Todos los derechos reservados {year}</p>
                    <p className='flex text-colorBlanco font-textos text-sm'>Creado con <span className='px-2 mt-1'><BsFillHeartFill size={17} color="red"/></span> en React.</p>
                </div>
            </div>
        </footer>
    )
}

export default Contacto