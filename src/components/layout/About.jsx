
export const About = () => {
    const tecnologias = [
        {
            id: 0,
            urlimg: './img/iconscompress/javascript.png',
            style: {border:'0px black solid'}
        }, {
            id: 2,
            urlimg: './img/iconscompress/java.png',
            style: {border:'0px black solid'}
        },{
            id: 3,
            urlimg: './img/iconscompress/php.png',
            style: {border:'0px black solid'}
        },{
            id: 4,
            urlimg: './img/iconscompress/springboot.png',
            style: {border:'0px black solid'}
        },{
            id: 5,
            urlimg: './img/iconscompress/Laravel.png',
            style: {border:'0px black solid'}
        },{
            id: 6,
            urlimg: './img/iconscompress/react.png',
            style: {border:'0px black solid'}
        },{
            id: 7,
            urlimg: './img/iconscompress/jquery.png',
            style: {border:'0px black solid'}
        },{
            id: 8,
            urlimg: './img/iconscompress/html.png',
            style: {border:'0px black solid'}
        },{
            id: 9,
            urlimg: './img/iconscompress/css.png',
            style: {border:'0px black solid'}
        },{
            id: 10,
            urlimg: './img/iconscompress/linux.png',
            style: {border:'0px black solid'}
        },{
            id: 11,
            urlimg: './img/iconscompress/windows.png',
            style: {border:'0px black solid'}
        },{
            id: 12,
            urlimg: './img/iconscompress/mysql.png',
            style: {border:'0px black solid'}
        }
    ];
    return (

        <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
            <div className="row">
            <div className="col-sm-12">
                <div className="box-shadow-full">
                <div className="row">
                    <div className="col-md-6">
                    <div className="row" style={{border:'2px black solid', background:'black', padding:'30px', color:'white'}}>
                        <div className="title-box">
                            <h4 className="title-left" style={{color:'white'}}>
                            Acerca de mi
                            </h4>
                        </div>
                        <div className="col-sm-12 col-md-12">
                        <div className="about-info">
                            <p><b>Nombre: </b> <span>Samuel Orozco Cuevas</span></p>
                            <p><b>Puesto:</b> <span>Programador y Desarrollador</span></p>
                            <p><b>Email: </b> <span>programainline@gmail.com</span></p>
                        </div> 
                        </div>
                        <p className="justify_p">
                        Resido en la Ciudad de México y me considero una persona tranquila, adaptable y perseverante, apasionada por la programación y siempre en busca de nuevos retos.
                        </p>
                        <p className="justify_p">
                        Poseo sólidos conocimientos en matemáticas, lógica y programación, y soy capaz de utilizar y combinar diversos lenguajes, librerías y tecnologías. Con más de 4 años de experiencia en programación, me adapto fácilmente y trabajo tanto de manera independiente como en equipo.
                        </p>
                        <p className="justify_p">
                        Experiencia Profesional:
                        </p>
                        <div>
                            <ul>
                            <li>Desarrollar sitios web adaptables a cualquier dispositivo.</li>
                            <li>Realizar modificaciones en cualquier parte del código, tanto Front-End como Back-End.</li>
                            <li>Solucionar problemas de funcionamiento.</li>
                            <li>Evaluar y probar nuevas tecnologías para mejorar los proyectos existentes.</li>
                            <li>Desarrollar y consumir API RESTful.</li>
                            <li>Mantener una comunicación constante para implementar mejoras en el desarrollo cuando sea necesario.</li>
                            <li>Gestionar y crear bases de datos.</li>
                            <li>Desarrollar programas de escritorio.</li>
                            </ul> 
                        </div>
                        
                    </div>
                    </div>
                    <div className="col-md-6">
                        <div className="about-me pt-4 pt-md-0">
                            <div className="skill-mf">
                                
                                <div className="d-flex justify-content-center align-items-center vh-100">
                                    <div className="row">
                                        {tecnologias.map((el)=>{
                                                return (
                                                <div key={el.id} className="img-tech">
                                                    <img style={el.style} src={el.urlimg} alt={el.urlimg} className="work-img"/>
                                                </div>);
                                                
                                            }
                                        )}   
                                    
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    )};