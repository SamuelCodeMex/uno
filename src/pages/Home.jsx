import { useEffect, useState } from "react";
import { Navbar } from "../components/layout/Navbar";
import { About } from "../components/layout/About";
import { Footer } from "../components/layout/Footer";
import { Hero } from "../components/layout/Hero";
import { Works } from "../components/layout/Works";

export const Home = () => {

    const [activeLink, setActiveLink] = useState('hero');

    const handleScroll = () => { const sections = document.querySelectorAll('section'); 
        sections.forEach(section => { 
            const rect = section.getBoundingClientRect(); 
            if (rect.top >= 0 && rect.top < window.innerHeight / 2) { 
                setActiveLink(section.id); 
            } }); 
    }; 
             
    useEffect(() => { 
        window.addEventListener('scroll', handleScroll); 
        return () => { 
            window.removeEventListener('scroll', handleScroll); 
        }; 
    }, []);
   

    const BtnState = (s) =>{
        setActiveLink(s);
    } 
    
    
    
    return (
        <>
        <Navbar activeLink={activeLink} BtnState={BtnState}/>
                <Hero/>
                <About/>
                <Works/>
                <Footer/>
        </>
    )

}

