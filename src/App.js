import { BrowserRouter, Route, Routes,  Navigate } from "react-router-dom"
// BrowserRouter: permite navegar mediante la url
// Routes: guarda los Route
// Route: para poder cambiar de pagina
// al poner la inicial en mayuscula , react lo reconoce como componente
// en las ultimas versiones no es necesario importar react en cada pagina
// Navigate: redirecciona
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import UsersPage from './pages/UsersPage';
import UserPage from './pages/UserPage';
import NotFoundPage from './pages/NotFoundPage';
import Dashboard from "./pages/Dashboard";

import Navbar from './components/Navbar'

export default function App() {
  return (
    <BrowserRouter>

        <Navbar/> 

        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/users" element={<UsersPage/>}/>
            <Route path="/usuarios" element={<Navigate to="/users"/>}/>
            <Route path="/users/:id" element={<UserPage/>}/>

            <Route path="/dashboard/*" element={<Dashboard/>}> {/*el "*" indica que tendra subrutas*/}
              <Route path="welcome" element={<p>Welcome</p>}/>{/* ya no es necesario poner "/" */}
              <Route path="goodbye" element={<p>Goodbye</p>}/>
            </Route>

            {/* // /* el "*" hace referencia a todas las demas rutas */}
            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
    </BrowserRouter>
  )
}
