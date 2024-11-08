
import {NavbarProy} from '../components/layout/NavBarProy';
import {Footer} from '../components/layout/Footer';
import { DescriptionPortafolio } from './DescriptionPortafolio';

export const CitasVeterinarias = () => {
    const portafolioweb = 
        {
            id: 0,
            title: 'Citas Veterinarias',
            breadcrumb: 'Detalles del Proyecto',
            info: 'Desarrollado con libreria REACT',
            linkgo: [
                {
                    title: 'Ir a proyecto',
                    url: 'https://citas-veterinarias-react-001.netlify.app/'
                }
                ],
            description: 'Gracias a este proyecto aprendí la sintaxis básica de React. Su sistema almacena datos del lado cliente, para esto utiliza Web Storage.',
            sweppers: ['./img/citas-veterinario-react.png', './img/citas-veterinario-react01.png'],
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