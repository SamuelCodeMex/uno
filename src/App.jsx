import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Portafolio } from './pages/Portafolio';
import { PortafolioPHP } from './pages/PortafolioPHP';
import { CrudReact } from './pages/CrudReact';
import { SalasChat } from './pages/SalasChat';
import { SisAdmin } from './pages/SisAdmin';
import { BuscadorPixabay } from './pages/BuscadorPixabay';
import { CitasVeterinarias } from './pages/CitasVeterinarias';
import { ApiRESTfulPHP } from './pages/ApiRESTfulPHP';
import { CitasMedicas } from './pages/CitasMedicas';

export const App = () => {
 
    return (
        <>
            <Router>
                
                <Routes> 
                    <Route path="/" element={<Home />} />
                    <Route path="/portafolio" element={<Portafolio/>} />
                    <Route path="/portafolioPHP" element={<PortafolioPHP/>} />
                    <Route path="/crud" element={<CrudReact/>} /> 
                    <Route path="/salasChat" element={<SalasChat/>} />
                    <Route path="/sisAdmin" element={<SisAdmin/>} />
                    <Route path="/buscadorPixabay" element={<BuscadorPixabay/>} />
                    <Route path="/citasVeterinarias" element={<CitasVeterinarias/>} />
                    <Route path="/citasMedicas" element={<CitasMedicas/>} />
                    <Route path="/apiRESTfulPHP" element={<ApiRESTfulPHP/>} />
                    <Route path="/*" element={<Home />} />
                </Routes>

            </Router>

        </>
    );
}
