
import { Link, useNavigate, Outlet } from "react-router-dom"
// sirve para redireccionar despues de una accion (o algo asi)

export default function Dashboard() {
   
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate('/')
    }
   
    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={handleClick}>
                Logout
            </button>
            <br/><br/>
            <Link to="welcome">Say welcome</Link>
            <br/>
            <Link to="goodbye">Say goodbye</Link>
            <Outlet/> 
            {/* indica donde se pintara el subcomponente */}
        </div>
    )
}