
import {NavbarProy} from '../components/layout/NavBarProy';
import {Footer} from '../components/layout/Footer';
import { DescriptionPortafolio } from './DescriptionPortafolio';

export const CrudReact = () => {
    const portafolioweb = 
        {
            id: 0,
            title: 'CRUD React consumo API Restful PHP',
            breadcrumb: 'Detalles del Proyecto',
            info: 'Desarrollado con Vite, React, Bootstrap 5, Axios, SweetAlert2',
            linkgo: [
                {
                    title: 'Ir a proyecto',
                    url: 'https://crud-react-e03f0c.netlify.app/'
                },{
                    title: 'Ir a API RESTful',
                    url: 'http://samuel100.infinityfreeapp.com/api'
                }
                ],
            description: 'Este proyecto ha sido desarrollado utilizando React y está integrado con una API RESTful para manejar los datos del CRUD. La API RESTful se encuentra también en el portafolio. Link arriba.',
            sweppers: ['./img/crudapi1.png', './img/crudapi2.png', './img/crudapi3.png'],
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