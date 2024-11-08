
import {NavbarProy} from '../components/layout/NavBarProy';
import {Footer} from '../components/layout/Footer';
import { DescriptionPortafolio } from './DescriptionPortafolio';

export const SalasChat = () => {
    const portafolioweb = 
        {
            id: 0,
            title: 'SALAS DE CHAT',
            breadcrumb: 'Detalles del Proyecto',
            info: 'Desarrollado con PHP, JAVASCRIPT, MySQL. Uso de POO y MVC.',
            linkgo: [
                {
                    title: 'Ir a proyecto',
                    url: 'http://chatsam.free.nf/'
                }
                ],
            description: 'Desarrollé este proyecto de sala de chat para permitir la comunicación entre varios dispositivos en línea. Los usuarios solo necesitan ingresar a la página y autenticarse. La aplicación cuenta con roles y permisos.',
            sweppers: ['./img/imgproy70.png', './img/imgpory72.png','./img/imgproy71.png'],
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