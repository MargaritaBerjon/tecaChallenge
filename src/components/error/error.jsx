import "./error.css";
import { Link } from "react-router-dom";

function Error() {
    return (
        <div className='error-container'>
            <h1>Error</h1>
            <p>Tu formulario no ha podido enviarse</p>
            <Link to='/'>Volver al formulario</Link>
        </div>
    );
}

export default Error;
