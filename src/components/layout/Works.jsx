import { Link } from 'react-router-dom';

export const Works = () => {
    const listW = [
    {
        id:0,
        title: "Portafolio en React",
        urlimg: "./img/portafolio01.png",
        stylea: {margin: '12px'},
        urlgo: "http://samuel100.infinityfreeapp.com/",
        details: "/portafolio"

    },{
        id:1,
        title: "Portafolio en PHP",
        urlimg: "./img/portafolio01.png",
        stylea: {margin: '12px'},
        urlgo: "http://samuel100.infinityfreeapp.com/",
        details: "/portafolioPHP"

    },{
        id:2,
        title: "CRUD React consumo API RESTful PHP",
        urlimg: "./img/crudapi1.png",
        stylea: {margin: '-10px'},
        urlgo: "https://crud-react-e03f0c.netlify.app/",
        details: "/crud"
    },{
        id:3,
        title: "Salas de Chat",
        urlimg: "./img/imgpory72.png",
        stylea: {margin: '14px'},
        urlgo: "http://chatsam.free.nf/",
        details: "/salasChat"
    },{
        id:4,
        title: "Sistema Administrativo",
        urlimg: "./img/sis01.png",
        stylea: {margin: '17px'},
        urlgo: "http://sysadmininstrativo50.epizy.com/",
        details: "/sisAdmin"
    },{
        id:5,
        title: "Buscador Pixabay",
        urlimg: "./img/buscador-pixabyte.png",
        stylea: {margin: '12px'},
        urlgo: "https://angular-buscador-002.netlify.app/",
        details: "/buscadorPixabay"
    },{
        id:6,
        title: "Citas Veterinarias",
        urlimg: "./img/citas-veterinario-react.png",
        stylea: {margin: '12px'},
        urlgo: "https://citas-veterinarias-react-001.netlify.app/",
        details: "citasVeterinarias"
    },{
        id:7,
        title: "Citas Medicas",
        urlimg: "./img/cmedicas02.png",
        stylea: {margin: '12px'},
        urlgo: " ",
        details: "/citasMedicas"
    },{
        id:8,
        title: "API RESTful",
        urlimg: "./img/api02.png",
        stylea: {margin: '0px'},
        urlgo: "https://ser76prof23.x10.mx/",
        details: "/apiRESTfulPHP"
    }
    
    ];
  return (
    <section id="work" className="portfolio-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">
                Proyectos
              </h3>
              <p>
                Desarrollos ejemplos y descripciones.
              </p>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>
        <div className="row">
            {listW.map((el)=>{
                return(
                    <div className="col-md-4" key={el.id}>
                        <div className="work-box">
                            <a href={el.urlimg} data-gallery="portfolioGallery" className="portfolio-lightbox">
                                <div className="work-img">
                                    <img style={el.stylea} src={el.urlimg} alt="" className="img-fluid"/>
                                </div>
                            </a>
                            <div className="work-content">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <h2 className="w-title">{el.title}</h2>
                                        <h3 className="w-more"><a href={el.urlgo}>Ir al proyecto</a></h3>
                                        <div className="w-more">
                                            <span className="w-ctegory">
                                                <Link to={el.details}>
                                                Detalles
                                                </Link> 
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
      </div>
    </section>
  )
}


  
    
  
