
import { Link } from 'react-router-dom';

export const Navbar = ({activeLink,BtnState}) => {


   
    return (
        <header id="header" className="fixed-top header-scrolled">
            <div className="container d-flex align-items-center justify-content-between">
                <h1 className="logo"><Link to={'/'}>PORTAFOLIO</Link></h1>
                <nav id="navbar" className="navbar">
                    <ul>
                    <li onClick={() =>BtnState('start')}><a className={`nav-link scrollto ${activeLink === 'start' ? 'active' : ''}`} href="#start" >INICIO</a></li>
                    <li onClick={() =>BtnState('about')}><a className={`nav-link scrollto ${activeLink === 'about' ? 'active' : ''}`} href="#about" >Acerca de mi</a></li>
                    <li onClick={() =>BtnState('work')}><a className={`nav-link scrollto ${activeLink === 'work' ? 'active' : ''}`} href="#work" >Proyectos</a></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>
            </div>
        </header>
    
    );
}