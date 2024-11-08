import { Link } from 'react-router-dom';
export const NavbarProy = () => {


   
    return (
        <header id="header" className="fixed-top header-scrolled">
            <div className="container d-flex align-items-center justify-content-between">
                <h1 className="logo"><Link to={'/'}>PORTAFOLIO</Link></h1>
                <nav id="navbar" className="navbar">
                    <ul>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>
            </div>
        </header>
    
    );
}