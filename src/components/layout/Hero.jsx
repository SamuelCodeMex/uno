
import WriteTltle  from "./WriteTltle";

export const Hero = () => {
    
    return (
    <section id="start" className="hero route bg-image" style={{backgroundImage: 'url("img/hero-bg.jpg")'}}>
        <div className="overlay-itro"></div>
        <div className="hero-content display-table">
        <div className="table-cell">
            <div className="container">
            <h1 className="hero-title mb-4">Samuel Orozco</h1>
            <div className="hero-subtitle"><span className="typed"><WriteTltle/></span></div>
            </div>
        </div>
        </div>
    </section>
    )
};