
import {NavbarProy} from '../components/layout/NavBarProy';
import {Footer} from '../components/layout/Footer';
import { DescriptionPortafolio } from './DescriptionPortafolio';

export const Portafolio = () => {
    const portafolioweb = 
        {
            id: 0,
            title: 'Portafolio en React',
            breadcrumb: 'Detalles del Proyecto',
            info: 'Desarrollado con Vite, React, Bootstrap 5.',
            linkgo: [
                {
                    title: 'Ir a proyecto',
                    url: ''
                }
                ],
            description: ' Este portafolio web incluye todos los proyectos que he desarrollado, demostrando mi capacidad para migrar código de PHP a React gracias a mi dominio de diversas tecnologías. El objetivo es mostrar que la aplicación mantiene todas sus funcionalidades, pasando de un modelo MVC a una SPA (Single Page Application).',
            sweppers: ['./img/portafolio01.png', './img/portafolio02.png'],
            start: ''
        };
    return (
        <>
        <NavbarProy/>
        <DescriptionPortafolio portafolioweb={portafolioweb}/>
        <Footer/>
        </>
    ) 
}