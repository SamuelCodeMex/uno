
import {NavbarProy} from '../components/layout/NavBarProy';
import {Footer} from '../components/layout/Footer';
import { DescriptionPortafolio } from './DescriptionPortafolio';

export const PortafolioPHP = () => {
    const portafolioweb = 
        {
            id: 0,
            title: 'PORTAFOLIO EN PHP',
            breadcrumb: 'Detalles del Proyecto',
            info: 'Desarrollado con PHP, HTML, CSS, Bootstrap, MySQL. Uso de patrones POO y MVC.',
            linkgo: [
                {
                    title: 'Ir a proyecto',
                    url: 'http://samuel100.infinityfreeapp.com/'
                }
                ],
            description: 'Desarrolle esta proyecto para mostrar mis avances y como utilizo las tecnologías mencionadas en mi CV. Se puede apreciar que es adaptable a cualquier dispositivo. En cuanto a código, desarrolle un pequeño microframework MVC tipo Laravel, que utiliza la misma sintaxis. La ventaja es que es muy ligero, cuenta con una estructura muy sencilla similar a laravel, separa correctamente la vista, el modelo y el controlador, maneja rutas y cuenta con un pequeño ORM, así como su archivo de configuración .env. Es ideal para pequeños proyectos.',
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