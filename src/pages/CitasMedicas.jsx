
import {NavbarProy} from '../components/layout/NavBarProy';
import {Footer} from '../components/layout/Footer';
import { DescriptionPortafolio } from './DescriptionPortafolio';

export const CitasMedicas = () => {
    const portafolioweb = 
        {
            id: 0,
            title: 'Buscador de Imágenes Pixabay',
            breadcrumb: 'Detalles del Proyecto',
            info: 'Desarrollado con Laravel 8, MYSQL, ORM eloquent, Bootstrap',
            linkgo: [
                {
                    title: 'Ir a proyecto',
                    url: ''
                }
                ],
            description: 'Este sistema integral organiza los horarios de pacientes y doctores, permitiendo la creación de citas y gestionando los horarios de todos los usuarios del sistema. Desarrollé este proyecto para crear un organizador de horarios y profundizar en la lógica, roles y permisos, así como en la estructura MVC con Laravel. Esta aplicación permite la administración de horarios según el rol del usuario, ya sea doctor, paciente o administrador.',
            sweppers: ['./img/cmedicas01.png', './img/cmedicas02.png', './img/cmedicas03.png'],
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