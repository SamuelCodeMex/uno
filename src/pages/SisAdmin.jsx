
import {NavbarProy} from '../components/layout/NavBarProy';
import {Footer} from '../components/layout/Footer';
import { DescriptionPortafolio } from './DescriptionPortafolio';

export const SisAdmin = () => {
    const portafolioweb = 
        {
            id: 0,
            title: 'Sistema Administrativo',
            breadcrumb: 'Detalles del Proyecto',
            info: 'Desarrollado con PHP, JAVASCRIPT, JQUERY, plantilla AdminLT, DataTable, creación y consumo de API RESTful.',
            linkgo: [
                {
                    title: 'Ir a proyecto',
                    url: 'http://sysadmininstrativo50.epizy.com'
                }
                ],
            description: 'Desarrollé este proyecto para demostrar que es posible crear un sistema seguro y escalable sin utilizar un framework. Este administrador incluye un panel de control completo para gestionar todas las funcionalidades, manejar reportes, asignar roles y permisos a los usuarios. Además, permite crear, actualizar y eliminar cuentas, así como generar reportes y exportar archivos en formatos EXCEL y PDF. También aprovecha el consumo de API RESTful con PHP.',
            sweppers: ['./img/sis01.png', './img/sis02.png','./img/sis03.png','./img/sis00.png'],
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