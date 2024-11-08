
import {NavbarProy} from '../components/layout/NavBarProy';
import {Footer} from '../components/layout/Footer';
import { DescriptionPortafolio } from './DescriptionPortafolio';

export const ApiRESTfulPHP = () => {
    const portafolioweb = 
        {
            id: 0,
            title: 'Buscador de Imágenes Pixabay',
            breadcrumb: 'Detalles del Proyecto',
            info: 'Desarrollado con PHP, MySQL. Uso de POO, PDO, JSON y JWT. Para utilizar la API es necesario utilizar una aplicación de API como POSTMAN.',
            linkgo: [
                {
                    title: 'Ir a proyecto',
                    url: 'https://ser76prof23.x10.mx/'
                },
                {
                    title: 'Instrucciones de uso',
                    url: ''
                }
                ],
            description: 'Desarrollé este proyecto para crear una API RESTful sin utilizar un framework, asegurando su reutilización y escalabilidad. Implementé los métodos GET, POST, PUT, PUSH y DELETE, así como sentencias SQL. Además, generé respuestas en formato JSON y códigos HTTP. Esta API RESTful es muy segura, ya que incluye autenticación, una clave de seguridad y utiliza JWT (JSON Web Tokens).',
            sweppers: ['./img/api01.png', './img/api02.png','./img/api03.png'],
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