import { Link } from 'react-router-dom';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

export const DescriptionPortafolio = ({portafolioweb}) => {

    return (
        <>
        <div className="hero hero-single route bg-image" style={{backgroundImage: 'url(/img/overlay-bg.jpg)'}}>
        <div className="overlay-mf"></div>
        <div className="hero-content display-table">
            <div className="table-cell">
                <div className="container">
                <h2 className="hero-title mb-4">{portafolioweb.title}</h2>
                <ol className="breadcrumb d-flex justify-content-center">
                    <li className="breadcrumb-item">
                        <Link to={'/'} >INICIO</Link>
                    </li>
                    <li className="breadcrumb-item active">{portafolioweb.breadcrumb}</li>
                </ol>
                </div>
            </div>
            </div>
        </div>
        <main id="main">
            <section id="portfolio-details" className="portfolio-details">
            <div className="container">
                <div className="row gy-4">
                    <div className="col-lg-8">
                      <Swiper 
                         modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                         spaceBetween={10}
                         slidesPerView={1}
                         navigation
                         pagination={{ clickable: true }}
                         scrollbar={{ draggable: true }}
                         autoplay={{ delay: 3000 }} 
                         loop={true} 
                         >
                        <div className="portfolio-details-slider swiper">
                            <div className="swiper-wrapper align-items-center">
                                {portafolioweb.sweppers.map((el)=>{
                                    return(
                                        <SwiperSlide key={el}>
                                            <img src={el} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt={el}/>
                                        </SwiperSlide>
                                    )
                                    
                                  }
                                )}
                            </div>
                        </div>
                       </Swiper>
                    </div>
                    <div className="col-lg-4">
                        <div className="portfolio-info">
                            <h3>Información del Proyecto</h3>
                            <ul>
                                <li>{portafolioweb.info}</li>
                                <li><strong>URL</strong>:</li>
                                {
                                    portafolioweb.linkgo.map((el)=>{
                                    return(
                                        <li key={el.url}>
                                            <Link to={el.url} >
                                                {el.title}
                                            </Link>
                                        </li> 
                                    )
                                        
                                    })  
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="portfolio-info">
                            <h2>Descripción</h2>
                            <p className="justify_p">
                            {portafolioweb.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </main>
        </>

    )
}