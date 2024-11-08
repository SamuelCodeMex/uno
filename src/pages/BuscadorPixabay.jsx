
import {NavbarProy} from '../components/layout/NavBarProy';
import {Footer} from '../components/layout/Footer';
import { DescriptionPortafolio } from './DescriptionPortafolio';

export const BuscadorPixabay = () => {
    const portafolioweb = 
        {
            id: 0,
            title: 'Buscador de Imágenes Pixabay',
            breadcrumb: 'Detalles del Proyecto',
            info: 'Desarrollado con framework Angular. Material desing.',
            linkgo: [
                {
                    title: 'Ir a proyecto',
                    url: 'https://angular-buscador-002.netlify.app/'
                }
                ],
            description: 'Desarrollé un buscador de imágenes en internet para poner en práctica el framework Angular. Este proyecto me permitió familiarizarme con su sintaxis, comprender cómo realizar despliegues, explorar el uso y las diferencias entre versiones, y consumir una API pública que proporciona imágenes. Una ventaja significativa de utilizar un framework Front-End es que permite modularizar todo en componentes, lo que facilita su mantenimiento y reutilización.',
            sweppers: ['./img/buscador-pixabyte.png', './img/buscador-pixabyte01.png'],
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