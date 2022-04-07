import "./success.css";
import { Link } from "react-router-dom";

function Success() {
    return (
        <div className='success-container'>
            <h1>Gracias por actualizar tus datos</h1>
            <p>Tu formulario se ha enviado correctamente</p>
            <Link to='/'>Volver</Link>
        </div>
    );
}

export default Success;
