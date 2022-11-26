import React from 'react'
// imagenes
import imgCode from '../img/code.png'
import imgUpdate from '../img/update.png'
import imgWebDesign from '../img/web-design.png'
import imgWordpress from '../img/wordpress.png'

function Services() {
    return (
        <div className='p-5 md:p-10 mt-10' id='serices'>
            <h2 className='font-textos text-2xl text-center'>Servicios</h2>
            {/* Los puntos debajo del titulo */}
            <div className='text-center'>
                <span className='w-2 h-2 m-1 bg-primary rounded-full inline-block'></span>
                <span className='w-2 h-2 m-1 bg-primary rounded-full inline-block'></span>
                <span className='w-2 h-2 m-1 bg-primary rounded-full inline-block'></span>
            </div>

            {/* cards de servicios */}
            <div className='md:flex justify-center gap-3 mt-10'>
            {/* cards 1 */}
                <div data-aos="fade-up" data-aos-duration="2000" className='md:w-80 w-full h-auto p-3 shadow-lg rounded-md md:relative md:top-24 border-t-colorRojo border-t-4 md:mb-0 mb-5 bg-colorBlanco'>
                    <h3 className='font-textos font-medium'>Crear aplicaciones web y sitios web</h3>
                    <p className='font-textos text-sm mt-2'>
                        Un sitio web es una muy buena opción para presentar a los clientes nuevos servicios, informar sobre nuevos productos, anunciar eventos y promociones especiales.
                        Cuando una institución cuenta con una página web eleva su prestigio
                    </p>
                    <div className='w-full p-1 flex justify-end'>
                        <img src={imgCode} alt="Imagen de code" className='w-10' />
                    </div>
                </div>
            {/* cards 2 */}
                <div data-aos="fade-up" data-aos-duration="1000" className='md:w-80 w-full h-auto p-3 shadow-lg rounded-md border-t-colorMorado border-t-4 md:mb-0 mb-5 bg-colorBlanco'>
                    <h3 className='font-textos font-medium'>Mantener y actualizar el sitios web</h3>
                    <p className='font-textos text-sm mt-2'>
                        La actualización y el mantenimiento de un sitio web proporcionará un diseño actual y adaptado a las últimas tendencias como tambien engloba las acciones correctivas para detectar errores mejorar la usabilidad y performance.
                    </p>
                    <div className='w-full p-1 flex justify-end'>
                        <img src={imgUpdate} alt="Imagen de code" className='w-10' />
                    </div>
                </div>
            {/* cards 3 */}
                <div data-aos="fade-up" data-aos-duration="3000" className='md:w-80 w-full h-auto p-3 shadow-lg rounded-md md:relative md:top-24 border-t-colorAmarillo border-t-4 bg-colorBlanco'>
                    <h3 className='font-textos font-medium'>Hacer prototipos del sitio web</h3>
                    <p className='font-textos text-sm mt-2 mb-2'>
                        Crear un prototipo te permite ver una referencia visual de la estructura o idea de cómo será la página web, definiendo al detalle el contenido y su distribución visual, organizando así la información a nivel del sitio
                    </p>
                    <div className='w-full p-1 flex justify-end'>
                        <img src={imgWebDesign} alt="Imagen de code" className='w-10' />
                    </div>
                </div>
            </div>
            {/* cards 4 */}
            <div className='md:flex justify-center mt-5'>
                <div data-aos="fade-up" data-aos-duration="4000" className=' md:w-80 w-full h-auto p-3 shadow-lg rounded-md border-t-colorVerder border-t-4 bg-colorBlanco'>
                    <h3 className='font-textos font-medium'>Página web Wordpress</h3>
                    <p className='font-textos text-sm mt-2 mb-2'>
                        WordPress tambien llamado sistema de gestión de contenidos web, una buena opción para crear un sitio web peronal o blog, tienda virtual sin necesidad de conocer código de programaión
                    </p>
                    <div className='w-full p-1 flex justify-end'>
                        <img src={imgWordpress} alt="Imagen de code" className='w-10' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services